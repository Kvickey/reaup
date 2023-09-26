import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import "./pages.css"

function Login() {

    const [formData, setFormData] = useState({
        userName: "",
        password: ""
    })
    
    const [data, setData] = useState([])

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    const handleClick = (e) => {
        e.preventDefault();
        setData([...data,{formData}])
        setFormData({
            userName: "",
            password: ""
        })
    }

    return (
        <>
            <div className='container'>
                <div className='row col-sm-5 mt-5 mx-auto '>
                    <div className='card card-body shadow customSpac ' >
                        <h2 className='mx-auto'>Login</h2>
                        <Form>
                            <Form.Group className='mt-3' >
                                <Form.Label className='h5'>Username</Form.Label>
                                <Form.Control type="text" onChange={handleChange} value={formData.userName} name='userName' />
                            </Form.Group>
                            <Form.Group className='mt-3 mb-3'>
                                <Form.Label className='h5'>Password</Form.Label>
                                <Form.Control type="password" onChange={handleChange} value={formData.password} name='password' />
                            </Form.Group>
                            <Form.Group className='mt-4 mb-3 text-center'>
                                <Button onClick={handleClick} className=' btn-lg px-5'>Login</Button>
                            </Form.Group>
                            <p className='text-center'> Not Registered Yet <a href="/register" class="text-decoration-none"> Register</a></p>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login