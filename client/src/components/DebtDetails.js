/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import axios from "axios"
import { Button,Modal, ModalBody, ModalFooter, Card, Row, Col, Label, Input, } from 'reactstrap';
import * as FaIcons from 'react-icons/fa';
import DatePicker from 'react-date-picker';

const DebtDetails = (props) => {
    const {id } = props
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);
    
    const toggle = () => setOpen(!open);


 

    return (
        
        <>
            <Row>
                <Col style={{"color":"gray"}} >
                    <FaIcons.FaEye onClick={toggle}  style={{ cursor:"pointer" }} />
                </Col>
            </Row>
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open} style={{ marginTop:"100px" , }} className={"cairo"}>
                <ModalBody style={{'direction':'rtl', 'textAlign': 'right'}}>
                Details
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" >طباعه</Button>
                    <Button color="danger" onClick={toggle}>إغلاق</Button>
                </ModalFooter>
            </Modal>
        </>
       
    )
}

export default DebtDetails;