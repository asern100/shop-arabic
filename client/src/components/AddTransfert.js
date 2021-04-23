/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import axios from "axios"
import { Button,Card, Row, Col, Label, Input, } from 'reactstrap';

const AddTransfert = (props) => {
    const {employees, sellpoints ,postData} = props
    
    const [values, setValues] = useState({});
    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
            
        });
    };
    const submitValue = async () => {
        //alert(JSON.stringify({ sellPointID ,...values}))
       
        
         
          postData(values)
    }

    return (
        <Card style={{marginTop:"10px",padding :"10px"}}>
        <Row   >
            <Col sm={12} md={2}>
                    
                <Input placeholder="ماذا ؟"  type="text" name="what" onChange={(e) => handleChange(e)} />
            </Col>
            <Col sm={12} md={2}>
                
                <Input placeholder="بكم ؟"  type="number" name="amount" onChange={(e) => handleChange(e)} />
                
            </Col>
            <Col sm={12} md={2}>
                
                <Input placeholder="من أين ؟"  type="select" name="from" onChange={(e) => handleChange(e)} >
                <option value={""}>إختر </option>    
                {sellpoints.map(point => 
                        <option value={point._id}>{point.name}</option>
                    )}
                </Input>
            </Col>
            <Col sm={12} md={2}>
                
                <Input placeholder="إلى أين ؟"  type="select" name="to" onChange={(e) => handleChange(e)} >
                <option value={""}>إختر </option> 
                {sellpoints.map(point => 
                        <option value={point._id}>{point.name}</option>
                    )}
                </Input>
             </Col>
             <Col sm={12} md={2}>
                
                <Input placeholder="العامل"  type="select" name="employee" onChange={(e) => handleChange(e)} >
                <option value={""}>إختر </option>
                {employees.map(employee => 
                    <option value={employee._id}>{employee.name}</option>
                    )}
                </Input>
            </Col>
           
             <Col sm={12} md={2} >
                <Button color="primary" onClick={submitValue}>إضافة</Button>
            </Col>
        </Row>
        </Card>
       
    )
}

export default AddTransfert;