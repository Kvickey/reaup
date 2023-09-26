import React from 'react'
import "./pages.css"
import imgFile from "../images/img4.png"
import construction from "../images/construction1.jpg"
import corporate from "../images/corporate1.jpg"
import employment from "../images/employment1.jpg"
import matrimonial from "../images/matrimonial1.jpg"
import pharma from "../images/pharma1.jpg"
import legal from "../images/legal1.png"
import technology from "../images/technology1.jpg"
import { Button } from 'react-bootstrap'

function Home() {
    return (
        <>
            <section className='mainSection commonSection'>
                <div className='container mt-5'>
                    <div className='row '>
                        <div className='col-sm-8 align-items-center animate__animated animate__fadeInLeft animate__slow'>
                            <h1 className='bigFont customMargin'>Legal Access Anytime, Anywhere</h1>
                            <p className='mt-4 customText'>Our mission at Resolution Experts Alliance is to modernize  dispute <br /> resolution,offering a bridge to amicable  resolutions <br /> based on fairness, transparency, and innovation.</p>
                            <Button className='mt-4 px-3 py-2'>Get Started</Button>
                        </div>
                        <div className='col-sm-4 ms-auto animate__animated animate__fadeInRight'>
                            <img src={legal} className='img-fluid animated ' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='firstSection commonSection'>
                <div className='margTop backgrey'>
                    <div className='container reveal'>
                        <div className='row'>
                            <div className='col-sm-12 text-center mx-auto'>
                                <h1 className='custom-expert custom-margin'>Our Expertise</h1>
                                <p className='customP'>At Resolution Experts Alliance, our mission is to revolutionize the way disputes are resolved, empowering individuals, businesses, and organizations <br /> to navigate complex legal challenges with confidence and clarity.  We believe that in a rapidly evolving world, traditional litigation  can often fall short of meeting the dynamic needs of modern society. Our commitment is to provide a bridge to amicable resolutions,guided by principles of fairness, transparency, and innovation.</p>
                            </div>
                        </div>
                        <div className='row justify-content-around'>
                            <div className="card col-sm-2 shadow customCard me-4 mt-3">
                                <div className="card-body">
                                    <h5 className="card-title">Mediation</h5>
                                    <p className="card-text">Our seasoned mediators create an inclusive environment where
                                        parties can openly communicate and collaboratively seek resolutions. We guide
                                        discussions with empathy and finesse, fostering an atmosphere of trust and
                                        understanding.</p>
                                    <a href="#" className="btn btn-primary mx-auto">Read More</a>
                                </div>
                            </div>
                            <div className="card col-sm-2 shadow customCard me-4 mt-3">
                                <div className="card-body">
                                    <h5 className="card-title">Arbitration</h5>
                                    <p className="card-text">Our arbitrators, renowned for their integrity and impartiality,
                                        deliver swift and binding decisions that meet the highest standards of legality.
                                        This method offers parties a private and streamlined alternative to courtroom
                                        proceedings.</p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                            <div className="card col-sm-2 shadow customCard me-4 mt-3">
                                <div className="card-body">
                                    <h5 className="card-title">Online Dispute Resolution (ODR)</h5>
                                    <p className="card-text">Embracing the digital era, our firm pioneers
                                        cutting-edge ODR solutions. Our secure online platform offers parties the
                                        convenience of resolving disputes remotely, promoting accessibility, and
                                        reducing barriers to justice.
                                    </p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                            <div className="card col-sm-2 shadow customCard me-4 mt-3">
                                <div className="card-body">
                                    <h5 className="card-title">Negotiation Support</h5>
                                    <p className="card-text">Our skilled negotiators craft strategies that balance
                                        assertiveness with compromise, ensuring our clients are well-represented at the
                                        negotiation table. We advocate for favorable outcomes while prioritizing
                                        relationship preservation.</p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                            <div className="card col-sm-2 customCard shadow me-4 mt-3">
                                <div className="card-body">
                                    <h5 className="card-title">Training and Workshops</h5>
                                    <p className="card-text">We offer educational programs that empower clients
                                        to proactively manage disputes. Our workshops equip individuals and
                                        organizations with essential conflict resolution skills, fostering a culture of
                                        collaboration and understanding.</p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='secondSection commonSection'>
                <div className='container customSpacing reveal'>
                    <div className='row'>
                        <div className='col-sm-12 text-center mx-auto'>
                            <h1 className='custom-expert'>Industries We Serve</h1>
                            <p className='customP'>Our expertise extends across a diverse range of industries, including but not limited to: </p>
                        </div>
                    </div>
                    <div className='row justify-content-around'>
                        <div className="card mt-5 shadow custom-card">
                            <img src={corporate} className="card-img-top mt-3 img-dim" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Commercial and Business</h5>
                                <a href="#" className="btn btn-primary btnHover">Get Details</a>
                            </div>
                        </div>
                        <div className="card mt-5 shadow custom-card">
                            <img src={technology} className="card-img-top mt-3 img-dim" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Technology and Intellectual Property</h5>
                                <a href="#" className="btn btn-primary btnHover">Get Details</a>
                            </div>
                        </div>
                        <div className="card mt-5 shadow custom-card">
                            <img src={employment} className="card-img-top mt-3 img-dim" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Employment and Labor</h5>
                                <a href="#" className="btn btn-primary btnHover">Get Details</a>
                            </div>
                        </div>
                        <div className="card mt-5 shadow custom-card">
                            <img src={construction} className="card-img-top mt-3 img-dim" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Real Estate and Construction</h5>
                                <a href="#" className="btn btn-primary btnHover">Get Details</a>
                            </div>
                        </div>
                        <div className="card mt-5 shadow custom-card">
                            <img src={matrimonial} className="card-img-top mt-3 img-dim" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Family and Matrimonial
                                </h5>
                                <a href="#" className="btn btn-primary btnHover">Get Details</a>
                            </div>
                        </div>
                        <div className="card mt-5 shadow custom-card">
                            <img src={pharma} className="card-img-top mt-3 img-dim" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Healthcare and Pharmaceuticals</h5>
                                <a href="#" className="btn btn-primary btnHover">Get Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='thirdSection commonSection'>
                <div className='margTop  backgrey'>
                    <div className='container reveal '>
                        <div className='row'>
                            <div className='col-sm-12 text-center mx-auto'>
                                <h1 className='custom-margin'>Our Differentiators</h1>
                            </div>
                        </div>
                        <div className='row col-sm-12 mt-5'>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button accordTitle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Unparalleled Expertise
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div className="accordion-body accordBody">
                                            Resolution Experts Alliance boasts a team of
                                            accomplished legal professionals who are recognized leaders in the field of
                                            Alternative Dispute Resolution (ADR) and Online Dispute Resolution (ODR).
                                            With years of experience and a proven track record, our attorneys possess the
                                            depth of knowledge and skill necessary to guide you through even the most
                                            intricate disputes.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed accordTitle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Innovative Approach
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body accordBody">
                                            We are at the forefront of innovative dispute resolution
                                            techniques, seamlessly blending traditional legal practices with cutting-edge
                                            technology. Our forward-looking approach ensures that you benefit from the
                                            latest advancements in ADR and ODR, setting the stage for efficient and
                                            effective resolutions.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed accordTitle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Tailored Strategies
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body accordBody">
                                            Recognizing that no two disputes are alike, we create
                                            bespoke resolution strategies that are tailored to your unique circumstances.
                                            Our personalized approach means that your case receives the individual
                                            attention it deserves, resulting in solutions that align with your goals.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed accordTitle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Efficiency and Cost-effectiveness
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body accordBody">
                                            Litigation can be time-consuming and
                                            financially burdensome. By choosing Resolution Experts Alliance, you opt for a
                                            streamlined process that saves you both time and money. Our ADR and ODR
                                            methods prioritize swift resolutions, allowing you to move forward without the
                                            protracted delays and expenses often associated with traditional courtroom
                                            battles.

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed accordTitle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Preservation of Relationships
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body accordBody">
                                            Our emphasis on collaborative resolution
                                            means that we prioritize maintaining positive relationships, even in the midst of
                                            disputes. We understand that maintaining a working relationship can be
                                            crucial, especially in business contexts, and our methods reflect this
                                            understanding.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home

