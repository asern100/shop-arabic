/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState , useEffect} from 'react';
import axios from "axios"
import { Button,Modal, ModalBody, ModalFooter, Card, Row, Col, Label, Input, } from 'reactstrap';
import * as FaIcons from 'react-icons/fa';
import DatePicker from 'react-date-picker';

const DebtDetails = (props) => {
    const {id } = props
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);
    const [installments, setInstallments] = useState([])
    const [promises, setPromises] = useState([])
    
    const toggle = () => setOpen(!open);

    useEffect(() => {

        axios.get("http://localhost:3000/api/debts/" + `${id}`).then(response => {
            setInstallments(response.data.installments)   
            setPromises(response.data.promises)   
        })

    }, [])

 

    return (
        
        <>
            <Row>
                <Col style={{"color":"gray"}} >
                    <FaIcons.FaEye onClick={toggle}  style={{ cursor:"pointer" }} />
                </Col>
            </Row>
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open} style={{ marginTop:"100px" , }} className={"cairo"}>
                <ModalBody style={{'direction':'rtl', 'textAlign': 'right'}}>
                الأقساط المدفوعه :
                {installments.map(i => <Row>
                    <Col>{i.amount}</Col>
                    <Col>{i.date.split("T")[0]}</Col>
                    </Row>)}
                الوعود بالدفع :
                {promises.map(i => <Row>
                    <Col>{i.amount}</Col>
                    <Col>{i.date.split("T")[0]}</Col>
                    </Row>)}
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