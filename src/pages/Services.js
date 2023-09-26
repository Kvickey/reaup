import React from 'react'
import mediation from "../images/mediationCompr.jpg"
import arbitration from "../images/arbitrationCompr.jpg"
import odr from "../images/odrCompr.jpg"
import negotiation from "../images/negotiationCompr.jpg"
import training from "../images/trainingCompr.jpg"
import conciliation from "../images/conciliationCompr.jpg"

function Services() {
  return (
    <>
      <div className=''>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 text-center mx-auto'>
              <h1 className='custom-expert custom-margin animate__animated animate__fadeInDown'>Our Expertise</h1>
              <p className='customP animate__animated animate__fadeInUp'>At Resolution Experts Alliance, our mission is to revolutionize the way disputes are resolved, empowering individuals, businesses, and organizations <br /> to navigate complex legal challenges with confidence and clarity.  We believe that in a rapidly evolving world, traditional litigation  can often fall short of meeting the dynamic needs of modern society. Our commitment is to provide a bridge to amicable resolutions,guided by principles of fairness, transparency, and innovation.</p>
              <p className='customP animate__animated animate__fadeInUp'>At Resolution Experts Alliance, our mission is to revolutionize the way disputes are resolved, empowering individuals, businesses, and organizations <br /> to navigate complex legal challenges with confidence and clarity.  We believe that in a rapidly evolving world, traditional litigation  can often fall short of meeting the dynamic needs of modern society. Our commitment is to provide a bridge to amicable resolutions,guided by principles of fairness, transparency, and innovation.At Resolution Experts Alliance, our mission is to revolutionize the way disputes are resolved, empowering individuals, businesses, and organizations to navigate complex legal challenges with confidence and clarity.  We believe that in a rapidly evolving world, traditional litigation  can often fall short of meeting the dynamic needs of modern society. Our commitment is to provide a bridge to amicable resolutions,guided by principles of fairness, transparency, and innovation.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='margTop backgrey'>
        <div className='container reveal'>
          <div className='row'>
            <div className='col-sm-6'>
              <div className="card  mt-5 shadow cardStyle mx-auto" >
                <div className="row">
                  <div className="col-sm-6">
                    <img src={mediation} class="img-fluid rounded-start m-2 custImg " alt="..." />
                  </div>
                  <div className="col-sm-6">
                    <div className="card-body">
                      <h3 className="custTitle">Mediation</h3>
                      <p className="custPara">Our seasoned Mediators create an inclusive environment where parties can openly communicate and collaboratively seek resolutions. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className="card mt-5 shadow cardStyle mx-auto" >
                <div className="row">
                  <div className="col-sm-6">
                    <img src={arbitration} class="img-fluid rounded-start m-2 custImg " alt="..." />
                  </div>
                  <div className="col-sm-6">
                    <div className="card-body">
                      <h3 className="custTitle">Arbitration</h3>
                      <p className="custPara"> Our Arbitrators ,renowned for their integrity and impartiality, deliver swift and binding decisions that meets the heighest standards of legality. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>
              <div className="card  mt-5 shadow cardStyle mx-auto" >
                <div className="row">
                  <div className="col-sm-6">
                    <img src={odr} class="img-fluid rounded-start m-2 custImg " alt="..." />
                  </div>
                  <div className="col-sm-6">
                    <div className="card-body">
                      <h3 className="custTitle">Online Dispute Resolution (ODR)</h3>
                      <p className="custPara">Embracing the Digital era,our firm pioneers cutting-edge ODR solutions. Our secure platform offers parties the convenience of resolving dispute remotely. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className="card mt-5 shadow cardStyle mx-auto" >
                <div className="row">
                  <div className="col-sm-6">
                    <img src={negotiation} class="img-fluid rounded-start m-2 custImg " alt="..." />
                  </div>
                  <div className="col-sm-6">
                    <div className="card-body">
                      <h3 className="custTitle">Negotiation Support</h3>
                      <p className="custPara"> Our skilled Negotiators craft stratergies that balance assertivness with compromise ensure our clientsare well represented at the negotiation table. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>
              <div className="card  mt-5 shadow cardStyle mx-auto" >
                <div className="row">
                  <div className="col-sm-6">
                    <img src={training} class="img-fluid rounded-start m-2 custImg " alt="..." />
                  </div>
                  <div className="col-sm-6">
                    <div className="card-body">
                      <h3 className="custTitle">Training And Workshops</h3>
                      <p className="custPara">We offer educational programs that empowers client to proactively manage disputes. Our workshops equip individual and organisations with conflict resolution skills </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className="card mt-5 shadow cardStyle mx-auto" >
                <div className="row">
                  <div className="col-sm-6">
                    <img src={conciliation} class="img-fluid rounded-start m-2 custImg " alt="..." />
                  </div>
                  <div className="col-sm-6">
                    <div className="card-body">
                      <h3 className="custTitle">Conciliation</h3>
                      <p className="custPara">Our conciliation service brings peace and resolution to even the most contentious disputes, fostering understanding and harmony.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Services