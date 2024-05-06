import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';



function Add() {
    const [show, setShow] = useState(false);
    const [project, SetProject] = useState({
        "title": "", "overview": "", "language": "", "github": "", "demo": "", "image": ""
    })
    const [imageStatus ,setImageStatus] = useState(true)
    const [imagePreview ,setImagePreview] = useState("")
    //  console.log(project);
    useEffect(() => {
        if (project.image) {
            if (project.image.type == "image/jpg" || project.image.type == "image/jpeg" || project.image.type == "image/png") {
                setImageStatus(true)
                setImagePreview(URL.createObjectURL(project.image))
            } else {
               setImageStatus(false)
               setImagePreview("")
            }
        }
    }, [project.image])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className='btn btn-info m-3' onClick={handleShow}>
                Add Projects
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col className='mb-3'>
                            <label htmlFor="img">
                                <input type="file" name="" id="img" style={{ display: "none" }} onChange={e => SetProject({ ...project, image: e.target.files[0] })} />
                                <img src={imagePreview?imagePreview:"https://t4.ftcdn.net/jpg/05/65/22/41/360_F_565224180_QNRiRQkf9Fw0dKRoZGwUknmmfk51SuSS.jpg"} alt="" srcset="" height={"200px"} width={"200px"}/>
                            </label>
                            {
                                !imageStatus &&
                                <p className='text-danger'>Invalid format,image format should be jpg,jpeg,png</p>
                            }
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingPassword" label="Project Title" className='mb-2'>
                                <Form.Control type="text" placeholder="Project Title" onChange={e => SetProject({ ...project, title: e.target.value })} />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Project Overview" className='mb-2'>
                                <Form.Control type="text" placeholder="Project Overview" onChange={e => SetProject({ ...project, overview: e.target.value })} />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Languages Used" className='mb-2'>
                                <Form.Control type="text" placeholder="Languages Used" onChange={e => SetProject({ ...project, language: e.target.value })} />
                            </FloatingLabel>
                        </Col>
                        <FloatingLabel controlId="floatingPassword" label="Github Url" className='mb-3'>
                            <Form.Control type="text" placeholder="Github Url" onChange={e => SetProject({ ...project, github: e.target.value })} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Demo Url" className='mb-3'>
                            <Form.Control type="text" placeholder="Demo url" onChange={e => SetProject({ ...project, demo: e.target.value })} />
                        </FloatingLabel>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Add