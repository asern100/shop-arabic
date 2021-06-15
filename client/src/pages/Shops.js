import React , {useState,useEffect} from 'react';
import axios from 'axios'
import { Container, Row, Col, CardHeader, CardBody, Card } from 'reactstrap';
import AddShop from '../components/AddShop'
function Shops() {
    const [shops,setShops] = useState([]);
 
    
    
    useEffect(() => {
        axios.get("http://localhost:3000/api/shops/").then(response => {
            setShops(response.data)
            console.log(response.data)
        })
    }, [])
    const postData =(body) => {
        axios.post("http://localhost:3000/api/shops/" , body).then(response => response.status)
        .then((status) => {   
            if (status === 200) {
                alert(JSON.stringify({"Mrigel" : "jawwik behi", "status ": status}))
                
                setShops([ ...shops, body])
            }
        }).catch(err => alert(err))
      }



    return (
       
        
        <Container className={"cairo"}>
            <AddShop  postData={postData}/>
            <br /><br /><br />
            <Row>
                
                {shops.map(shop => 
                    <Col xs="12" sm="12" md={"6"} lg={4} >
                        <Card body style={{textAlign:"right"}}>
                            <CardHeader>{shop.name}</CardHeader>
                            <CardBody>
                            المصاريف :  <span style={{fontWeight:"bold"}}> {shop.achat} </span > 
                            <br/> 
                            المبيعات : <span style={{fontWeight:"bold"}}>{shop.vente} </span > 
                            <br />
                            الديون : <span style={{fontWeight:"bold"}}>{shop.debts} </span > 
                            <br />
                            الأرباح : <span style={{fontWeight:"bold"}}>  {shop.gain} </span >  
                            </CardBody>
                        </Card>
                        <br />
                    </Col>
                )}
               
                
            </Row>
        </Container>
        
    )
}

export default Shops
