/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import axios from "axios"
import { Button,Card, Row, Col, Label, Input, } from 'reactstrap';
import DatePicker from 'react-date-picker';

const AddDeposit = (props) => {
    const { idSelected ,postData} = props
    let sellPointID = idSelected
    const [values, setValues] = useState({});
    const [dateFor, setDateFor] = useState();
    
    const handleChange = event => {
        
        setValues({
            
            ...values,
            [event.target.name]: event.target.value,
            
        });

    };
    const submitValue = async () => {
        alert(JSON.stringify({ sellPointID ,...values}))
       
            
         let body= { 
            sellPointID ,
            dateFor,
            ...values}
          postData(body)
    }

    return (
        <Card style={{marginTop:"10px",padding :"10px"}}>
        <Row>
            <Col sm={12} md={2}>  
                <Input placeholder="إسم الحريف" className="mx-4" type="text" name="client" onChange={(e) => handleChange(e)} />
            </Col>
            <Col sm={12} md={2}> 
                <Input placeholder="رقم الهاتف" className="mx-4" type="number" name="phone" onChange={(e) => handleChange(e)} />
            </Col>
        </Row>
        <br></br>
        <Row>
            <Col sm={12} md={2}> 
                <Input placeholder="كم ؟" className="mx-4" type="number" name="quantity" onChange={(e) => handleChange(e)} />
            </Col>
            <Col sm={12} md={2}>  
                <Input placeholder="ماذا ؟" className="mx-4" type="text" name="product" onChange={(e) => handleChange(e)} />
            </Col>
             <Col sm={12} md={2}>
                <Input placeholder="التكلفة" className="mx-4" type="number" name="whatCost" onChange={(e) => handleChange(e)} />
            </Col>
             <Col sm={12} md={2}>
                <Input placeholder="بكم ؟" className="mx-4" type="number" name="amount" onChange={(e) => handleChange(e)} />
            </Col>
            <Col sm={12} md={2}>
                <Input placeholder="دفع كعربون" className="mx-4" type="number" name="asDeposit" onChange={(e) => handleChange(e)} />
            </Col>
            </Row>
            <br></br>
            <Row>
            <Col sm={12} md={6}>
                <Row>
                    <Col style={{"fontSize":10}}>
                    موعد التسليم
                    </Col>
                    <Col>
                    <DatePicker
                        onChange={setDateFor}
                        value={dateFor}
                    />
                    </Col>
                </Row>
            </Col>
            
            <Col sm={12} md={6} >
            
                <Button color="primary" onClick={submitValue}>إضافة</Button>
            </Col>
        </Row>
        </Card>
       
    )
}

export default AddDeposit;