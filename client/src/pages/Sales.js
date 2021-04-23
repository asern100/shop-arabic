import React, {useState,useEffect} from 'react'
import axios from "axios"
import { Card,CardHeader,Container,Alert, Row, Col ,FormGroup, Input, Label} from 'reactstrap';
import AddSale from '../components/AddSale'
require('./pages.css')
function Sales() {

    const [points,setPoints] = useState([]);
    const [sales,setsales] = useState([]);
    const [idSelected,setIdSelected] = useState();
    useEffect(() => {
        axios.get("http://localhost:3000/api/sellpoints/").then(response => {
            setPoints(response.data)
            console.log(response.data)
        })
        axios.get("http://localhost:3000/api/sales/").then(response => {
            setsales(response.data)
            console.log(response.data)
        })
    }, [])

    const handleChange = event => {
       setIdSelected(event.target.value)
       alert(event.target.value)
    };

      const postData =(body) => {
        axios.put("http://localhost:3000/api/sales/" , body).then(response => response.status)
        .then((status) => {   
            if (status === 200) {
                alert(JSON.stringify({"Mrigel" : "jawwik behi", "status ": status}))
                setIdSelected(false)
                setsales([ ...sales, body])
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
             {(idSelected) ? <AddSale idSelected={idSelected} postData={postData} /> : <Alert color="warning">حدّد نقطة البيع</Alert> }
            </Row>
            <Card>
                
                        <CardHeader></CardHeader>
                    <Row className="textCenter ">
                        <Col xs={2}>أين ؟</Col>
                        <Col xs={2}>بكم ؟</Col>
                        <Col xs={3}>ماذا ؟</Col>
                        <Col xs={3}>التكلفة</Col>
                        <Col xs={2}>بكم ؟</Col>
                    </Row>
                    <CardHeader></CardHeader>
                    {sales.map(sale => 
                        <Row className="textCenter">
                            {points.map(point => (sale.sellPointID === point._id ) ? <Col xs={2}>{point.name}</Col> : null )}
                            <Col  xs={2}>{sale.quantity}</Col>
                            <Col  xs={3}>{sale.product}</Col>
                            <Col  xs={3}>{sale.whatCost}</Col>
                            <Col  xs={2}>{sale.amount}</Col>
                        </Row>
                        )}
                        <CardHeader></CardHeader>
            </Card>
            
        </Container>
    )
}

export default Sales
