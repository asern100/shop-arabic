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
                
            
            </Card>
            
        </Container>
    )
}

export default Sales
