import React , {useState,useEffect} from 'react';
import axios from 'axios'
import { Container, Row, Col, CardHeader, CardBody, Card } from 'reactstrap';
import AddEmployee from '../components/AddEmployee';
function Empolyees() {
    const [shops,setShops] = useState([]);
    const [points,setPoints] = useState([]);
    const [employees,setEmployees] = useState([]);
    
    
    useEffect(() => {
        axios.get("http://localhost:3000/api/sellpoints/").then(response => {
            setPoints(response.data)
            console.log(response.data)
        })
        axios.get("http://localhost:3000/api/shops/").then(response => {
            setShops(response.data)
            console.log(response.data)
        })
        axios.get("http://localhost:3000/api/employees/").then(response => {
            setEmployees(response.data)
            console.log(response.data)
        })
    }, [])



    return (
       
        
        <Container className={"cairo"}>
            <AddEmployee shops={shops} sellpoints={points} />
            <br /><br /><br />
            <Card style={{marginTop:"10px"}}>
                
                        <CardHeader></CardHeader>
                    <Row className="textCenter ">
                        <Col xs={2}>إسم العامل</Col>
                        <Col xs={3}>الشركة</Col>
                        <Col xs={3}>نقطة البيع</Col>
                        <Col xs={2}>الراتب الشهري</Col>
                        <Col xs={2}>بداية العقد</Col>
                    </Row>
                    <CardHeader></CardHeader>
                   {
                    employees.map(employee => 
                        <Row className="textCenter ">
                            <Col xs={2}>{employee.name}</Col>
                            {shops.map(shop => (employee.shopID === shop._id ) ? <Col xs={3}>{shop.name}</Col> : null )}
                            {points.map(sp => (employee.sellPointID === sp._id ) ? <Col xs={3}>{sp.name}</Col> : null )}
                            
                            <Col xs={2}>{employee.salary}</Col>
                            <Col xs={2}>{employee.start.split("T")[0]}</Col>
                        </Row>)
                   }
                   <CardHeader></CardHeader>
            </Card>
        </Container>
        
    )
}

export default Empolyees
