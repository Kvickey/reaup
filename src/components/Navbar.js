import React from 'react'
import "./style.css"
import { Button } from 'react-bootstrap'
import { FaMobile, FaAddressBook, FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/login");
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='row topHeader'>
                    <div className='col-xs-12 custMarg d-flex justify-content-center '>
                        <p className='mt-3 ms-5'><strong>Resolution Experts Alliance</strong></p>
                        <p className='mt-3 ms-5'><FaMobile size={15} /> 1234567890</p>
                        <p className='mt-3 ms-5'><FaEnvelope size={15} /> <span className=''>rea@gmail.com</span></p>
                        {/* <p className='mt-3 ms-5'><FaAddressBook size={15} /> <span className=''>www.rea.com</span></p> */}
                    </div>
                </div>
                <div className='row'>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand customBrand ms-5" href="/">REA</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-5  ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link customA pe-5" aria-current="page" href="/about">About us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link customA pe-5" aria-current="page" href="/services">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link customA pe-5" aria-current="page" href="/contactus">Contact us</a>
                                    </li>
                                    <li class="nav-item">
                                        {/* <a class="nav-link customA pe-5 btn btn-primary text-center" aria-current="page" href="/login">Login</a> */}
                                        <Button class="btn btn-primary pe-5 custbtn" type="" onClick={handleClick}>Login</Button>
                                    </li>
                                    {/* <form >
                                        <button class="btn btn-primary" type="" onClick={handleClick}>Login</button>
                                    </form> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar