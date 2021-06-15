import React, {useState,useEffect} from 'react'
import axios from "axios"
import { Card,CardHeader,Container,Alert, Row, Col ,FormGroup, Input, Label} from 'reactstrap';
import AddDeposit from '../components/AddDeposit'
require('./pages.css')
function Sales() {

    const [points,setPoints] = useState([]);
    const [deposits,setDeposits] = useState([]);
    const [idSelected,setIdSelected] = useState();
    useEffect(() => {
        axios.get("http://localhost:3000/api/sellpoints/").then(response => {
            setPoints(response.data)
            console.log(response.data)
        })
        axios.get("http://localhost:3000/api/deposits/").then(response => {
            setDeposits(response.data)
            console.log(response.data)
        })
    }, [])

    const handleChange = event => {
       setIdSelected(event.target.value)
       alert(event.target.value)
    };

      const postData =(body) => {
        axios.put("http://localhost:3000/api/deposits/" , body).then(response => response.status)
        .then((status) => {   
            if (status === 200) {
                alert(JSON.stringify({"Mrigel" : "jawwik behi", "status ": status}))
                setIdSelected(false)
                setDeposits([ ...deposits, body])
            }
        }).catch(err => alert(err))
      }


    return (
        <Container className="cairo">
            <Row style={{marginTop:"10px"}}>
                <FormGroup>
            
                <Input className="" type="select" onChange={(e) => handleChange(e)} >
                <option value={""}>إختر </option>    
                {points.map(point => 
                        
                    <>
                        
                        <option value={point._id}>{point.name}</option>
                        
                      </>  
                    )}
                </Input>
                </FormGroup>
            </Row>
            <Row>
             {(idSelected) ? <AddDeposit idSelected={idSelected} postData={postData} /> : <Alert color="warning">حدّد نقطة البيع</Alert> }
            </Row>
            

            <Card>
                
            <CardHeader></CardHeader>
        <Row className="textCenter "  style={{'fontSize':10}}>
            <Col xs={1}>نقطة البيع</Col>
            <Col  xs={1}>الزبون</Col>
            <Col  xs={1}>الهاتف</Col>
            <Col  xs={1}>الكميه</Col>
            <Col  xs={1}>إشترى</Col>
            <Col  xs={1}>التكلفة</Col>
            <Col  xs={1}>المبلغ</Col>
            <Col  xs={1}>العربون</Col>
            <Col  xs={1}>الباقي</Col>
            <Col  xs={1}>تاريخ التسبقه</Col>
            <Col  xs={1}>تاريخ التسليم</Col>
        </Row>
        <CardHeader></CardHeader>
        {deposits.map(deposit => 
            <Row className="textCenter" style={{'fontSize':10}}>
                {points.map(point => (deposit.sellPointID === point._id ) ? <Col xs={1}>{point.name}</Col> : null )}
                <Col  xs={1}>{deposit.client}</Col>
                <Col  xs={1}>{deposit.phone}</Col>
                <Col  xs={1}>{deposit.quantity}</Col>
                <Col  xs={1}>{deposit.product}</Col>
                <Col  xs={1}>{deposit.whatCost}</Col>
                <Col  xs={1}>{deposit.amount}</Col>
                <Col  xs={1}>{deposit.asDeposit}</Col>
                <Col  xs={1}>{deposit.rest}</Col>
                <Col  xs={1}>{deposit.date.split("T")[0]}</Col>
                <Col  xs={1}>{deposit.dateFor.split("T")[0]}</Col>
            </Row>
            )}
            <CardHeader></CardHeader>
</Card>
        </Container>
    )
}

export default Sales
