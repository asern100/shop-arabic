/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import axios from "axios"
import { Button, Modal, ModalBody, ModalFooter, Label, Input,InputGroup, InputGroupAddon, FormGroup, Form } from 'reactstrap';

const ModalFocusAfterClose = (props) => {
    const {shops ,postData } = props
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);
    const [shopAchat, setShopAchat] = useState(0);
    const [shopRestAchat, setShopRestAchat] = useState(0);
    let IDs = shops.map(shop =>  shop._id,  )
    let achats = [shops.map(shop =>   shop.achat, )]
    let restachats = [shops.map(shop =>   shop.restachat, )]
    const toggle = () => setOpen(!open);
    

    const [values, setValues] = useState({});
    const handleChange = event => {
        //alert(JSON.stringify(IDs))
        if (event.target.name === "shopID"){
            setShopAchat(achats[IDs.indexOf(event.target.value)]);
            setShopRestAchat(restachats[IDs.indexOf(event.target.value)])
        }
        setValues({
            ...values,
            [event.target.name]: event.target.value,
            
        });
    };
    const submitValue = async () => {
        alert(JSON.stringify(values))

        postData({
            ...values,
            "vente":0,
            "gain":0
        }) 

        setOpen(false)
        
    }

    return (
        <div   >
           
            <Button color="danger" onClick={toggle}  style={{ marginTop:"20px", float:"right" , }}>إضافة نقطة جديده</Button>
            
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open} style={{ marginTop:"100px" }} className={"cairo"}>
                <ModalBody>
                    <Form inline onSubmit={(e) => e.preventDefault()}>
                        <FormGroup>
                            <Label for="focusAfterClose" >الشركة الأم</Label>
                            <Input className="mx-4" type="select" id="focusAfterClose"  onClick={(e) => handleChange(e)}  name="shopID">
                                <option value={""}>إختر </option>    
                            {shops.map(shop => 
                                   <>
                                   
                                   <option value={shop._id}>{shop.name} </option>
                                   </>
                                   
                                )}s
                            </Input>
                            
                            
                           
                                    
                                    
                        </FormGroup>
                        <FormGroup>
                        <span style={{fontSize: 13}}> { "رأس مالها " } {shopAchat} {" بقي منه "} {shopRestAchat} </span>
                        </FormGroup>
                        
                        <br /><br /><br />
                        <FormGroup>
                        <Label  >الإسم</Label>
                        <Input placeholder="إسم نقطة البيع" className="mx-4" type="text" name="name" onChange={(e) => handleChange(e)} />
                    </FormGroup>
                    <br /><br /><br />
                        <FormGroup>
                            <Label for="focusAfterClose" >رأس المال</Label>
                            <InputGroup className="mx-3">
                            <InputGroupAddon addonType="append">00.</InputGroupAddon>
                            <Input placeholder="   المبلغ" min={0} max={shopRestAchat} type="number" step="1" name="achat" onChange={(e) => handleChange(e)} />
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