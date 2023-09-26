import React from 'react'
import "./style.css"
import { FaFacebook, FaTwitter, FaInstagramSquare, FaLinkedinIn, FaGithub, FaPinterestSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <section className=''>
        <div className='topFooter'>
          <div className='container text-center'>
            <div className='row'>
              <div className='col-sm-12'>
                <FaFacebook size={50} className='customIcons' />
                <FaTwitter size={50} className='customIcons' />
                <FaInstagramSquare size={50} className='customIcons' />
                <FaLinkedinIn size={50} className='customIcons' />
                <FaGithub size={50} className='customIcons' />
                <FaPinterestSquare size={50} className='customIcons' />
              </div>
            </div>
          </div>
        </div>
        <div className='footerSection cust-spacing'>
          <div className='container'>
            <div className='row col-sm-12'>
              <div className='col-sm-3'>
                <h3> Corporate Office </h3>
                <p>H-2,Ranjit Studio,Dadasaheb Falke Road,Dadar-East,Mumbai - 400014</p>
                <h3> Regional Office:</h3>
                <p>Plot No.14, Rajiv Gandhi Chandigarh Technology Park, Adjoining Infosys, Chandigarh, India – 160101</p>
              </div>
              <div className='col-sm-3'>
                <h4 className='ms-4'>Company</h4>
                <ul>
                  <li>About us</li>
                  <li>Founder</li>
                  <li>Co-Founder</li>
                  <li>Events</li>
                  <li>Careers</li>
                </ul>
                <h4 className='ms-4'>Our Support</h4>
                <ul>
                  <li>FAQs</li>
                  <li>Customer Service</li>
                  <li>Request a Demo</li>
                </ul>
              </div>
              <div className='col-sm-3'>
                <h4 className='ms-4'>Impact</h4>
                <ul>
                  <li>Social</li>
                  <li>Economic</li>
                  <li>Environmental</li>
                </ul>
                <h4 className='ms-4'>Our Support</h4>
                <ul>
                  <li>FAQs</li>
                  <li>Customer Service</li>
                  <li>Request a Demo</li>
                </ul>
              </div>
              <div className='col-sm-3'>
                <h4 className='ms-4'>Information</h4>
                <ul>
                  <li>Our Partners</li>
                  <li>Carrer</li>
                  <li>Employees</li>
                  <li>Events</li>
                  <li>Future Plans</li>
                  <li>Our Team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='finalFooter'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12 mt-3 d-flex'>
                <p>@2023 REA</p>
                <p className='ms-auto '>Terms of services</p>
              </div>
              {/* <div className='col-sm-4 ms-auto'>
              
            </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer