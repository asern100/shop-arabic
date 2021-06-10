/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import axios from "axios"
import { Button,Modal, ModalBody, ModalFooter, Card, Row, Col, Label, Input, } from 'reactstrap';
import * as FaIcons from 'react-icons/fa';

const NewInstallment = (props) => {
    const {newInstallment , id } = props
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
       
        newInstallment(values , id)
    }

    return (
        
        <>
            <Row>
                <Col style={{"color":"green"}} >
                    <FaIcons.FaEdit onClick={toggle}  style={{ cursor:"pointer" }} />
                </Col>
            </Row>
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open} style={{ marginTop:"100px" }} className={"cairo"}>
                <ModalBody>
                 <Input placeholder="كم ؟"  type="number" name="amount" onChange={(e) => handleChange(e)} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={submitValue}>إضافة</Button>
                    <Button color="danger" onClick={toggle}>إلغاء</Button>
                </ModalFooter>
            </Modal>
        </>
       
    )
}

export default NewInstallment;