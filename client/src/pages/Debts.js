import React, {useState,useEffect} from 'react'
import axios from "axios"
import { Card,CardHeader,Container,Alert, Row, Col ,FormGroup, Input, Label} from 'reactstrap';
import AddDebt from '../components/AddDebt';
import DebtPromise from '../components/DebtPromise';
import NewInstallment from '../components/NewInstallment';

require('./pages.css')
function Losses() {

    const [shops,setShops] = useState([]);
    const [debts,setDebts] = useState([]);
    const [idSelected,setIdSelected] = useState();
    const handleChange = event => {
        setIdSelected(event.target.value)
        alert(event.target.value)
     };
    useEffect(() => {
        axios.get("http://localhost:3000/api/shops/").then(response => {
            setShops(response.data)   
        })

        axios.get("http://localhost:3000/api/debts/").then(response => {
            setDebts(response.data)
            
        })
    }, [])

      const postData =(body) => {
        let date = new Date().toISOString()
        
        axios.post("http://localhost:3000/api/debts/" ,{date , ...body}).then(response => response.status)
        .then((status) => {   
            if (status === 200) {
                alert(JSON.stringify({"Mrigel" : "jawwik behi", "status ": status}))
                setIdSelected(false)
                setDebts([ ...debts, {date , ...body}])
            }
        }).catch(err => alert(err))
      }

      const newInstallment =(body , debtID) => {
        let date = new Date().toISOString()
        axios.put("http://localhost:3000/api/debts/" + `${debtID}/installment/` ,{date , ...body}).then(response => response.status)
        .then((status) => {   
            if (status === 200) {
                alert(JSON.stringify({"Mrigel" : "jawwik behi", "status ": status}))
            }
        }).catch(err => alert(err))
      }
      const debtPromise =(body, debtID) => {
        axios.put("http://localhost:3000/api/debts/" + `${debtID}/promise/` ,{...body}).then(response => response.status)
        .then((status) => {   
            if (status === 200) {
                alert(JSON.stringify({"Mrigel" : "jawwik behi", "status ": status}))
            }
        }).catch(err => alert(err))

      }


    return (
        <Container className="cairo">
            <Row style={{marginTop:"10px"}}>
            <FormGroup>
        
            <Input className="" type="select" onChange={(e) => handleChange(e)} >
            <option value={""}>إختر </option>    
            {shops.map(shop => 
                    
                <>
                    
                    <option value={shop._id}>{shop.name}</option>
                    
                </>  
                )}
            </Input>
            </FormGroup>
            </Row>
            <Row>
             {(idSelected) ? <AddDebt idSelected={idSelected} postData={postData} /> : <Alert color="warning">حدّد الشركة</Alert> }
            </Row>
            <Card style={{marginTop:"10px"}}>
                
                <Row className="textCenter ">
                    <Col md={2} xs={2}>الشركه</Col>
                    <Col md={2} xs={2}>صاحب الدين</Col>
                    <Col md={2} xs={2}>تفاصيل</Col>
                    <Col md={2} xs={2}>كم ؟</Col>
                    <Col md={2} xs={2}>الباقي</Col>
                </Row>
            <CardHeader></CardHeader>
            {debts.map(debt => 
                <Row className="textCenter">
                    {shops.map(shop => (debt.shopID === shop._id ) ? <Col md={2}  xs={2}>{shop.name}</Col> : null )}
                    <Col md={2} xs={2}>{debt.who}</Col>
                    <Col md={2} xs={2}>{debt.note}</Col>
                    <Col md={2} xs={2}>{debt.amount}</Col>
                    <Col md={2} xs={2}>{debt.rest}</Col>
                    <Col md={2} xs={2}> 
                        <Row>
                            <Col><DebtPromise debtPromise={debtPromise} id={debt._id}/></Col>
                            <Col> <NewInstallment newInstallment={newInstallment} id={debt._id}/></Col>
                        </Row>
                    </Col>
                   
                </Row>
            )}
            <CardHeader></CardHeader>
            </Card>
            
        </Container>
    )
}

export default Losses
