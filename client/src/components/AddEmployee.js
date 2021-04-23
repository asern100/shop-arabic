/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import axios from "axios"
import { Button, Modal, ModalBody, ModalFooter, Label, Input,InputGroup, InputGroupAddon, FormGroup, Form } from 'reactstrap';

const AddEmployee = (props) => {
    const {shops, sellpoints} = props
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);
    
    const toggle = () => setOpen(!open);


    const [values, setValues] = useState({});
    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
            
        });
    };
    const submitValue = async () => {
        alert(JSON.stringify(values))
       
        axios.post("http://localhost:3000/api/employees/" , values).then(response => response.status)
            .then((status) => {
                alert(JSON.stringify({"Mrigel" : "jawwik behi", "status ": status}))
                if (status === 200) setOpen(false)
            }).catch(err => alert(err))
    }

    return (
        <div   >
           
            <Button color="danger" onClick={toggle}  style={{ marginTop:"20px", float:"right" , }}>إضافة عامل جديد</Button>
            
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open} style={{ marginTop:"100px" }} className={"cairo"}>
                <ModalBody>
                    <Form inline onSubmit={(e) => e.preventDefault()}>
                        <FormGroup>
                            <Label for="focusAfterClose" >عامل لدى شركة</Label>
                            <Input className="mx-4" type="select" id="focusAfterClose"  onChange={(e) => handleChange(e)}  name="shopID">
                            <option value={""}>إختر </option>   
                            {shops.map(shop => 
                                    <option value={shop._id}>{shop.name}</option>
                                )}
                            </Input>
                    
                        </FormGroup>
                        <br /><br />
                        <FormGroup>
                            <Label for="focusAfterClose" >بنقطة البيع</Label>
                            <Input className="mx-4" type="select" id="focusAfterClose"  onChange={(e) => handleChange(e)}  name="sellPointID">
                            <option value={""}>إختر </option>   
                            {sellpoints.map(points => 
                                    <option value={points._id}>{points.name}</option>
                                )}
                            </Input>
                    
                        </FormGroup>
                        <br /><br />
                        <FormGroup>
                        <Label  >الإسم</Label>
                        <Input placeholder="إسم العامل" className="mx-4" type="text" name="name" onChange={(e) => handleChange(e)} />
                        </FormGroup>
                    <br /><br /><br />
                        <FormGroup>
                            <Label for="focusAfterClose" >الراتب الشهري</Label>
                            <InputGroup className="mx-3">
                            <InputGroupAddon addonType="append">00.</InputGroupAddon>
                            <Input placeholder="   المبلغ" min={0} max={100000} type="number" step="1" name="salary" onChange={(e) => handleChange(e)} />
                            <InputGroupAddon addonType="prepend">دينار</InputGroupAddon>
                            </InputGroup>
                        </FormGroup>

                    </Form>
                 </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={submitValue}>إضافة</Button>
                    <Button color="danger" onClick={toggle}>إلغاء</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default AddEmployee;