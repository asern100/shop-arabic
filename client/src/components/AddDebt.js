/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import axios from "axios"
import { Button,Card, Row, Col, Label, Input, } from 'reactstrap';

const AddDebt = (props) => {
    const { idSelected ,postData} = props
    let shopID = idSelected
    const [values, setValues] = useState({});
    const handleChange = event => {
        
        setValues({
            ...values,
            [event.target.name]: event.target.value,
            
        });

    };
    const submitValue = async () => {
        alert(JSON.stringify({ shopID ,...values}))
       
            
         let body= { shopID ,...values, }
          postData(body)
    }

    return (
        <Card style={{marginTop:"10px",padding :"10px"}}>
        <Row   >
            
            <Col sm={12} md={2}>
                
                <Input placeholder="من ؟" className="mx-4" type="text" name="who" onChange={(e) => handleChange(e)} />
            </Col>
            <Col sm={12} md={6}>
                
                <Input placeholder="وصف" className="mx-4" type="text" name="note" onChange={(e) => handleChange(e)} />
            </Col>
             <Col sm={12} md={2}>
                
                <Input placeholder="كم ؟" className="mx-4" type="number" name="amount" onChange={(e) => handleChange(e)} />
            </Col>
             
             <Col sm={12} md={2} >
                <Button color="primary" onClick={submitValue}>إضافة</Button>
            </Col>
        </Row>
        </Card>
       
    )
}

export default AddDebt;