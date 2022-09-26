import React, { useState, useRef, useEffect } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Input from "@material-tailwind/react/Input";
import DownloadCard from "./DownloadCard"
import html2canvas from 'html2canvas';
import $ from 'jquery';

function DownloadHelloSign(props) {
    const [showModal, setShowModal] = React.useState(false);
    const buttonRef = useRef();

    const handleClick = (e) => {


    }

    let items=[
        {
        signature_request_id: 'b6e2788447facf0154cd797e9540f632f12da12d',
        title: 'My CV',
        subject: 'Plz approve and sign the cv',
        is_complete: false,
        files_url: 'https://api.hellosign.com/v3/signature_request/files/b6e2788447facf0154cd797e9540f632f12da12d'
      },
      {
        signature_request_id: 'b6e2788447facf0154cd797e9540f632f12dv12d',
        title: 'My doc',
        subject: 'We Req you to sign the doc',
        is_complete: true,
        files_url: 'https://api.hellosign.com/v3/signature_request/files/b6e2788447facf0154cd797e9540f632f12da12d'
      }
      ];
let itemList=[];
items.forEach((item,index)=>{
  itemList.push( <DownloadCard Name={item.title} Title={item.subject} Url = {item.files_url}/>)
})

    return (
        <>
            <Button
                color="lightBlue"
                buttonType="filled"
                size="regular"
                className="md:inline-flex h-10 mx-12"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                onClick={(e) => setShowModal(true)}
            >
                <Icon name="people" size="md" />
                {props.text}
            </Button>

            <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>

                <ModalHeader
                    toggler={() => setShowModal(false)}
                    className="text-sm m-10"
                >
                    Previous Sign Request
                </ModalHeader>

                <ModalBody>

                {itemList}
                    
                </ModalBody>
            </Modal>
        </>
    );
}

export default DownloadHelloSign;
