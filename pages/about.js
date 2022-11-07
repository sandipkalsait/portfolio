
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ab from "../styles/About.module.css";
import Image from 'next/image';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai"
function about() {

    return (
        <>
            <Container className={ab.container}>
                <div className={ab.profile}>


                    <Row>
                        <Col sm="3">
                            <div className={ab.profileLogo}>
                                <Image src="/profile.jpg" width="100" height="100" />
                            </div>
                        </Col>

                        <Col sm="6">
                            <div className={ab.smallinfo}>
                                <h3>
                                    Sandip kalsait
                                </h3>

                                <div className={ab.icons}>
                                    <a className={ab.icon1} href='https://github.com/sandipkalsait'><AiOutlineGithub className={ab.github} size={40} /></a>
                                    <a className={ab.icon2} href='https://www.linkedin.com/in/sandipkalsait'><AiFillLinkedin className={ab.Linkedin} size={40} /></a>
                                    <a className={ab.icon3} href='https://www.instagram.com/sk_10_2'><AiOutlineInstagram className={ab.instagram} size={40} /></a>


                                </div>


                               

                            </div>
                        </Col>

                    </Row>
                    <Row className={ab.details}>
                        <span>DOB : 10-02-2000</span>
                        <span>Contact : +91-9158713568</span>
                        <span>Email : kalsaitsandip91@gmail.com</span>
                        <span>Address : Pune,Maharashtra</span>
                       

                       


                    </Row>







                </div>

            </Container>

        </>
    );
}

export default about;

