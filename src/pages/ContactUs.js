import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { FaMobile, FaAddressBook, FaEnvelope } from "react-icons/fa";

function ContactUs() {

const [formData, setFormData] = useState({
  name:"",
  email:"",
  phone:"",
  subject:"",
  message:""
})

const [data, setData] = useState([])

const handleChange=(e)=>{
  setFormData((prev) => ({
    ...prev, [e.target.name]: e.target.value
}))
}
console.log(formData);
const handleClick=(e)=>{
  e.preventDefault();
  setData([...data,{formData}])
  setFormData({
    name:"",
    email:"",
    phone:"",
    subject:"",
    message:""
  })
}

console.log(data);

  return (
    <>
      <div className='margTop '>
        <div className='container '>
          <div className='row '>
            <div className='col-sm-12 text-center mx-auto'>
              <h1 className='custom-expert custom-margin animate__animated animate__fadeInDown'>Always Happy To Help</h1>
              <p className='customP animate__animated animate__fadeInUp'>We appreciate your interest in getting in touch with us and we’re eager to assist you in any way we can</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 d-flex justify-content-center animate__animated animate__fadeInUp'>
              <p className='mt-3 me-5 ms-5 custContact'><FaMobile size={40} /> <strong className='ms-3'>1234567890</strong></p>
              <p className='mt-3 me-5 ms-5 custContact'><FaEnvelope size={40} /><strong className='ms-3'>rea@gmail.com</strong></p>
              <p className='mt-3 ms-5 me-5 custContact'><FaAddressBook size={40} /><strong className='ms-3'>www.rea.com</strong></p>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 mt-5 mx-auto animate__animated animate__fadeInUp'>
              <div className='row'>
                <div className='col-sm-6 text-center'>
                  <h2 className=''> Corporate Office </h2>
                  <p className='h5'>H-2,Ranjit Studio,Dadasaheb Falke Road,<br />Dadar-East,Mumbai - 400014 ,<br />Maharshtra ,India.</p>
                </div>
                <div className='col-sm-6 text-center'>
                  <h2 className=''> Regional Office </h2>
                  <p className='h5'>H-2,Ranjit Studio,Dadasaheb Falke Road,<br />Dadar-East,Mumbai - 400014 ,<br />Maharshtra ,India.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='margTop backgrey reveal'>
        <div className='row'>
          <div className='col-sm-4 text-center mx-auto'>
            <h1 className='custom-expert custom-margin'>Send us a message </h1>
            <Form className='mt-5'>
              <Form.Group className='mt-3' >
                <Form.Control className='textSize' type="text" placeholder='Name' onChange={handleChange} value={formData.name} name='name' />
              </Form.Group>
              <Form.Group className='mt-3 mb-3'>
                <Form.Control type="email" className='textSize' placeholder='Email' onChange={handleChange} value={formData.email} name='email' />
              </Form.Group>
              <Form.Group className='mt-3' >
                <Form.Control type="phone" className='textSize' placeholder='Phone' onChange={handleChange} value={formData.phone} name='phone' />
              </Form.Group>
              <Form.Group className='mt-3' >
                <Form.Control type="text" className='textSize' placeholder='Subject' onChange={handleChange} value={formData.subject} name='subject' />
              </Form.Group>
              <Form.Group className='mt-3' >
                <Form.Control type="textarea" className='textSize' placeholder='Message' onChange={handleChange} value={formData.message} name='message' />
              </Form.Group>
              <Form.Group className='mt-4 mb-3 text-center'>
                <a class="px-5 btn btn-primary custMessage textSize" onClick={handleClick} aria-current="page" href="">Send Us a message</a>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs