/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import axios from "axios"
import { Button,Modal, ModalBody, ModalFooter, Card, Row, Col, Label, Input, } from 'reactstrap';
import * as FaIcons from 'react-icons/fa';
import DatePicker from 'react-date-picker';

const DebtPromise = (props) => {
    const {debtPromise ,id } = props
    const [open, setOpen] = useState(false);
    const [promiseDate, setpromiseDate] = useState()
    const [focusAfterClose, setFocusAfterClose] = useState(true);
    
    const toggle = () => setOpen(!open);


    const [values, setValues] = useState({});
    const handleChange = event => {
        setValues({
            date: promiseDate,
            ...values,
            [event.target.name]: event.target.value,
            
        });
    };
    const submitValue = async () => {
        alert(JSON.stringify(values))
       
        debtPromise(values, id)
    }

    return (
        
        <>
            <Row>
                <Col style={{"color":"gray"}} >
                    <FaIcons.FaHistory onClick={toggle}  style={{ cursor:"pointer" }} />
                </Col>
            </Row>
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open} style={{ marginTop:"100px" , }} className={"cairo"}>
                <ModalBody style={{'direction':'rtl', 'textAlign': 'right'}}>
               <Row>
                <Col>
                حدد الموعد 
                </Col>
                <Col>
                <DatePicker
                    onChange={setpromiseDate}
                    value={promiseDate}
                />
                </Col>
               </Row>
               <br></br>
               <Row>
                <Col>
                المبلغ المتفق عليه
                </Col>
                <Col>
                <Input placeholder="كم ؟"  type="number" name="amount" onChange={(e) => handleChange(e)} />
                </Col>
               </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={submitValue}>إضافة</Button>
                    <Button color="danger" onClick={toggle}>إلغاء</Button>
                </ModalFooter>
            </Modal>
        </>
       
    )
}

export default DebtPromise;