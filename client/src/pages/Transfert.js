import React, {useState,useEffect} from 'react'
import axios from "axios"
import { Card,CardHeader,Container,Alert, Row, Col ,FormGroup, Input, Label} from 'reactstrap';
import AddTransfert from '../components/AddTransfert';
require('./pages.css')
function Transfert() {

    const [points,setPoints] = useState([]);
    const [employees,setEmployees] = useState([]);
    const [transferts,setTransferts] = useState([]);
    const [sp ,setSP] = useState({})
    useEffect(() => {
        axios.get("http://localhost:3000/api/sellpoints/").then(response => {
            setPoints(response.data)
            
           
        })
        axios.get("http://localhost:3000/api/employees/").then(response => {
            setEmployees(response.data)
            
        })
        axios.get("http://localhost:3000/api/transferts/").then(response => {
            setTransferts(response.data)
            
        })
      

    }, [])

      const postData =(body) => {
        let date = new Date().toISOString()
        
        axios.post("http://localhost:3000/api/transferts/" ,{date , ...body}).then(response => response.status)
        .then((status) => {   
            if (status === 200) {
                alert(JSON.stringify({"Mrigel" : "jawwik behi", "status ": status}))
                
                setTransferts([ ...transferts, body])
            }
        }).catch(err => alert(err))
      }


    return (
        <Container className="cairo">
            <AddTransfert sellpoints={points} employees={employees} postData={postData} />
            <Card style={{marginTop:"10px"}}>
                
                        <CardHeader></CardHeader>
                    <Row className="textCenter ">
                        <Col xs={2}>ماذا ؟</Col>
                        <Col xs={1}>القيمة</Col>
                        <Col xs={2}>من أين ؟</Col>
                        <Col xs={2}>إلى أين ؟</Col>
                        <Col xs={2}>العامل</Col>
                        <Col xs={3}>متى ؟</Col>
                    </Row>
                    <CardHeader></CardHeader>
                   {
                       transferts.map(trans => 
                        <Row className="textCenter ">
                            <Col xs={2}>{trans.what}</Col>
                            <Col xs={1}>{trans.amount}</Col>
                            {points.map(sp => (trans.from === sp._id ) ? <Col xs={2}>{sp.name}</Col> : null )}
                            {points.map(sp => (trans.to === sp._id ) ? <Col xs={2}>{sp.name}</Col> : null )}
                            {employees.map(emp => (trans.employee === emp._id ) ? <Col xs={2}>{emp.name}</Col> : null )}
                            
                            <Col xs={3}>{trans.date}</Col>
                        </Row>
                        )
                   }
                
            </Card>
            
        </Container>
    )
}

export default Transfert
