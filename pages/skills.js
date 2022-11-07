
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import skill from "../styles/skills.module.css";

function skills() {
    const now = 60;
    return (
        <>
            <Container className={skill.container}>
                <Card style={{background:"rgba(14, 28, 51, 0.425)",height:"600px"}} >
                    <h1 className={skill.animate}>Skills</h1>

                    <Card.Body className={skill.card} >

                        <div className="meter  nostripes">
                            <span className={skill.name} style={{width: "93.5%"}}>Java</span>
                        </div>
                        <div className="meter  nostripes">
                            <span className={skill.name} style={{width: "95.5%"}}>C-Programming</span>
                        </div>
                       
                        <div className="meter  nostripes">
                            <span className={skill.name} style={{width: "90.5%"}}>C++</span>
                        </div>
                        <div className="meter  nostripes">
                            <span className={skill.name} style={{width: "70.3%"}}>C#</span>
                        </div>
                       
                        <div className="meter  nostripes">
                            <span className={skill.name} style={{width: "70%"}}>Python</span>
                        </div>
                       
                        <div className="meter  nostripes">
                            <span className={skill.name} style={{width: "90.3%"}}>PHP</span>
                        </div>
                        <div className="meter  nostripes">
                            <span className={skill.name} style={{width: "80.3%"}}>HTML</span>
                        </div>
                       
                        <div className="meter  nostripes">
                            <span className={skill.name} style={{width: "80%"}}>CSS</span>
                        </div>
                       
                        <div className="meter  nostripes">
                            <span className={skill.name} style={{width: "70.3%"}}>Javascript</span>
                        </div>
                        <div className="meter  nostripes">
                            <span className={skill.name} style={{width: "80.3%"}}>React JS</span>
                        </div>
                        <div className="meter  nostripes">
                            <span className={skill.name} style={{width: "70.3%"}}>Next JS</span>
                        </div>
                        <div className="meter  nostripes">
                            <span className={skill.name} style={{width: "70.3%"}}>Express JS</span>
                        </div>
                        <div className="meter  nostripes">
                            <span className={skill.name} style={{width: "75.3%"}}>Android Java</span>
                        </div>
                        
                        <div className="meter  nostripes">
                            <span className={skill.name} style={{width: "70.3%"}}>Kotlin</span>
                        </div>
                        <div className="meter  nostripes">
                            <span className={skill.name} style={{width: "70.3%"}}>Flutter</span>
                        </div>
                        
                        

                       
                       


                    </Card.Body>
                </Card>
            </Container>

        </>
    );
}

export default skills;


