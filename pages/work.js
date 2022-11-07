
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import wor from "../styles/Comman.module.css"
import home from "../styles/Home.module.css"


function work() {

   

    return (
        <>

            <div className={wor.container}>
                <h1 className={home.animate}>Work</h1>

                <div className={wor.card} style={{width:"70%",height:"300px",margin:"50px"}}>
                    <div className={wor.heading}>Full-time Job</div>
                    <div className={wor.face}>
                        <div className={wor.content}>
                            <h2 className={wor.Text}>


                                <Row>
                                    <Col className={wor.colSmall}>Company &nbsp;&nbsp;:</Col>
                                    <Col className={wor.colBig}><span className={wor.subText}>Tata Consultancy Services</span></Col>
                                </Row>
                                <Row>
                                    <Col className={wor.colSmall}>Job Role &nbsp;&nbsp;:</Col>
                                    <Col className={wor.colBig}><p className={wor.subText}>Gradutee Trainne </p>

                                    </Col>
                                </Row>

                                 <Row>
                                    <Col className={wor.colSmall}>Date of joining &nbsp;&nbsp;:</Col>
                                    <Col className={wor.colBig}><span className={wor.subText}>06-12-2021</span></Col>
                                </Row>

                                

                            </h2>


                        </div>
                    </div>



                </div>
                <div className={wor.card2} style={{width:"70%",height:"300px",margin:"50px"}}>
                    <div className={wor.heading}>Intership</div>
                    <div className={wor.face}>
                        <div className={wor.content}>
                            <h2 className={wor.Text}>


                                <Row>
                                    <Col className={wor.colSmall}>Company &nbsp;&nbsp;:</Col>
                                    <Col className={wor.colBig}><span className={wor.subText}>Techsyneric technologies</span></Col>
                                </Row>
                                <Row>
                                    <Col className={wor.colSmall}>Job Role &nbsp;&nbsp;:</Col>
                                    <Col className={wor.colBig}><p className={wor.subText}>Full-Stack Developer</p>

                                    </Col>
                                </Row>

                                <Row>
                                    <Col className={wor.colSmall}>Duration &nbsp;&nbsp;:</Col>
                                    <Col className={wor.colBig}><span className={wor.subText}>3months</span></Col>
                                </Row>

                                <Row>
                                    <Col className={wor.colSmall}>Date of joining &nbsp;&nbsp;:</Col>
                                    <Col className={wor.colBig}><span className={wor.subText}>24-08-2021</span></Col>
                                </Row>

                                

                            </h2>


                        </div>
                    </div>



                </div>
                
            </div>

        </>
    );
}

export default work;



