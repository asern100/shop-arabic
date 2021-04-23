import React , {useState,useEffect} from 'react';
import axios from 'axios'
import { Container, Row, Col, CardHeader, CardBody, Card } from 'reactstrap';
import AddSellPoint from '../components/AddSellPoint'
function SellPoints() {
    const [shops,setShops] = useState([]);
    const [points,setPoints] = useState([]);
    
    
    useEffect(() => {
        axios.get("http://localhost:3000/api/sellpoints/").then(response => {
            setPoints(response.data)
            console.log(response.data)
        })
        axios.get("http://localhost:3000/api/shops/").then(response => {
            setShops(response.data)
            
        })
    }, [])
    const postData =(body) => {
        axios.put("http://localhost:3000/api/sellpoints/" , body).then(response => response.status)
        .then((status) => {   
            if (status === 200) {
                alert(JSON.stringify({"Mrigel" : "jawwik behi", "status ": status}))
                
                setPoints([ ...points, body])
            }
        }).catch(err => alert(err))
      }


    return (
       
        
        <Container className={"cairo"}>
            <AddSellPoint shops={shops} postData={postData}  />
            <br /><br /><br />
            <Row>
                
                {points.map(point => 
                    <Col xs="12" sm="12" md={"6"} lg={4} >
                        <Card body style={{textAlign:"right"}}>
                            <CardHeader>{point.name}</CardHeader>
                            <CardBody>
                            المصاريف :  <span style={{fontWeight:"bold"}}> {point.achat} </span > 
                            <br/> 
                            المبيعات : <span style={{fontWeight:"bold"}}>{point.vente} </span > 
                            <br />
                            الأرباح : <span style={{fontWeight:"bold"}}>  {point.gain} </span >  
                            </CardBody>
                        </Card>
                        <br />
                    </Col>
                )}
               
                
            </Row>
        </Container>
        
    )
}

export default SellPoints
