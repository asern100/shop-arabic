/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import axios from "axios"
import { Button, Modal, ModalBody, ModalFooter, Label, Input,InputGroup, InputGroupAddon, FormGroup, Form } from 'reactstrap';

const ModalFocusAfterClose = (props) => {
    const {postData } = props
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
       
        postData(values)
    }

    return (
        <div>
           
            <Button color="danger" onClick={toggle}  style={{ marginTop:"20px", float:"right" , }}>إضافة شركة جديده</Button>
            
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open} style={{ marginTop:"100px" }} className={"cairo"}>
                <ModalBody>
                    <Form inline onSubmit={(e) => e.preventDefault()}>
                        
                        <FormGroup>
                        <Label  >الإسم</Label>
                        <Input placeholder="إسم الشركة" className="mx-4" type="text" name="name" onChange={(e) => handleChange(e)} />
                        </FormGroup>
                    <br /><br /><br />
                        <FormGroup>
                            <Label for="focusAfterClose" >رأس المال</Label>
                            <InputGroup className="mx-3">
                            <InputGroupAddon addonType="append">00.</InputGroupAddon>
                            <Input placeholder="   المبلغ" min={0} max={100000} type="number" step="1" name="achat" onChange={(e) => handleChange(e)} />
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

export default ModalFocusAfterClose;