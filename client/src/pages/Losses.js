import React, {useState,useEffect} from 'react'
import axios from "axios"
import { Card,CardHeader,Container,Alert, Row, Col ,FormGroup, Input, Label} from 'reactstrap';
import AddLoss from '../components/AddLoss';
require('./pages.css')
function Losses() {

    const [points,setPoints] = useState([]);
    const [employees,setEmployees] = useState([]);
    const [losses,setLosses] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3000/api/sellpoints/").then(response => {
            setPoints(response.data)
            
           
        })
        axios.get("http://localhost:3000/api/employees/").then(response => {
            setEmployees(response.data)
            
        })
        axios.get("http://localhost:3000/api/losses/").then(response => {
            setLosses(response.data)
            
        })
      

    }, [])

      const postData =(body) => {
        let date = new Date().toISOString()
        
        axios.post("http://localhost:3000/api/losses/" ,{date , ...body}).then(response => response.status)
        .then((status) => {   
            if (status === 200) {
                alert(JSON.stringify({"Mrigel" : "jawwik behi", "status ": status}))
                
                setLosses([ ...losses, {date , ...body}])
            }
        }).catch(err => alert(err))
      }


    return (
        <Container className="cairo">
            <AddLoss sellpoints={points} employees={employees} postData={postData} />
            <Card style={{marginTop:"10px"}}>
                
                        <CardHeader></CardHeader>
                    <Row className="textCenter ">
                         
                         
                        <Col xs={2}>ماذا ؟</Col>
                        <Col xs={3}>التفاصيل</Col>
                        <Col xs={1}>القيمة</Col>
                        <Col xs={2}>العامل المسؤول</Col>
                        <Col xs={1}>أين ؟</Col>
                        <Col xs={3}>متى ؟</Col>
                    </Row>
                    <CardHeader></CardHeader>
                   {
                       losses.map(loss => 
                        <Row className="textCenter ">
                            
                            <Col xs={2}>{loss.thing}</Col>
                            <Col xs={3}>{loss.note}</Col>
                            <Col xs={1}>{loss.amount}</Col>
                            {employees.map(emp => (loss.employeeID === emp._id ) ? <Col xs={2}>{emp.name}</Col> : null )}
                            {points.map(sp => (loss.sellPointID === sp._id ) ? <Col xs={1}>{sp.name}</Col> : null )}
                            <Col xs={3}>{loss.date.split("T")[0]  } {loss.date.split("T")[1].split(".")[0]}</Col>
                        </Row>
                        )
                   }
                
            </Card>
            
        </Container>
    )
}

export default Losses
