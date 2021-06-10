import React, {useState,useEffect} from 'react'
import axios from "axios"
import { Card,CardHeader,Container,Alert, Row, Col ,FormGroup, Input, Label} from 'reactstrap';
import AddOutlay from '../components/AddOutlay';
require('./pages.css')
function Outlays() {

    const [points,setPoints] = useState([]);
    const [employees,setEmployees] = useState([]);
    const [outlays,setOutlays] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3000/api/sellpoints/").then(response => {
            setPoints(response.data)
            
           
        })
        axios.get("http://localhost:3000/api/employees/").then(response => {
            setEmployees(response.data)
            
        })
        axios.get("http://localhost:3000/api/outlays/").then(response => {
            setOutlays(response.data)
            
        })
      

    }, [])

      const postData =(body) => {
        let date = new Date().toISOString()
        
        axios.post("http://localhost:3000/api/outlays/" ,{date , ...body}).then(response => response.status)
        .then((status) => {   
            if (status === 200) {
                alert(JSON.stringify({"Mrigel" : "jawwik behi", "status ": status}))
                
                setOutlays([ ...outlays, {date , ...body}])
            }
        }).catch(err => alert(err))
      }


    return (
        <Container className="cairo">
            <AddOutlay sellpoints={points} employees={employees} postData={postData} />
            <Card style={{marginTop:"10px"}}>
                
                        <CardHeader></CardHeader>
                    <Row className="textCenter ">
                         <Col xs={2}>أين ؟</Col>
                        <Col xs={2}>ماذا ؟</Col>
                        <Col xs={1}>القيمة</Col>
                        <Col xs={2}>العامل</Col>
                        <Col xs={3}>متى ؟</Col>
                    </Row>
                    <CardHeader></CardHeader>
                   {
                       outlays.map(outlay => 
                        <Row className="textCenter ">
                            {points.map(sp => (outlay.sellPointID === sp._id ) ? <Col xs={2}>{sp.name}</Col> : null )}
                            <Col xs={2}>{outlay.thing}</Col>
                            <Col xs={1}>{outlay.amount}</Col>
                            
                            
                            {employees.map(emp => (outlay.employeeID === emp._id ) ? <Col xs={2}>{emp.name}</Col> : null )}
                            
                            <Col xs={3}>{outlay.date.split("T")[0]  } {outlay.date.split("T")[1].split(".")[0]}</Col>
                        </Row>
                        )
                   }
                
            </Card>
            
        </Container>
    )
}

export default Outlays
