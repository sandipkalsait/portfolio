
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import pro from "../styles/Comman.module.css"
import home from "../styles/Home.module.css"


function projects() {



    return (
        <>

            <div className={pro.container}>
                <h1 className={home.animate}>Projects</h1>



                    {/* Card of Projects */}
                    
                        <div className={pro.card}>
                            <div className={pro.heading}>Project-Name</div>
                            <div className={pro.face}>
                                <div className={pro.content}>
                                    <h2 className={pro.Text}>


                                        <Row>
                                            <Col className={pro.colSmall}>Introduction &nbsp;&nbsp;:</Col>
                                            <Col className={pro.colBig}><span className={pro.subText}>Project-Name</span></Col>
                                        </Row>
                                        <Row>
                                            <Col className={pro.colSmall}>Duration &nbsp;&nbsp;:</Col>
                                            <Col className={pro.colBig}><p className={pro.subText}>Project-Duration </p></Col>
                                        </Row>
                                        <Row>
                                            <Col className={pro.colSmall}>Used technologies &nbsp;&nbsp;:</Col>
                                            <Col className={pro.colBig}><p className={pro.subText}>Project-Technology</p></Col>
                                        </Row>

                                        <Row>
                                            <Col className={pro.colSmall}>Description &nbsp;&nbsp;:</Col>
                                            <span className={pro.subText} >
                                                Project-detailed Description
                                            </span>

                                        </Row>



                                    </h2>


                                </div>
                            </div>



                        </div>




                {/*                 
                <div className={pro.card1}>
                    <div className={pro.heading}>Medyoasis(Intership Project)</div>
                    <div className={pro.face}>
                        <div className={pro.content}>
                            <h2 className={pro.Text}>


                                <Row>
                                    <Col className={pro.colSmall}>Introduction &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><span className={pro.subText}>Smart Bus System</span></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Duration &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>3-Months</p></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Used technologies &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>PHP,HTML,CSS,JavaScript,Mysql</p></Col>
                                </Row>

                                <Row>
                                    <Col className={pro.colSmall}>Description &nbsp;&nbsp;:</Col>
                                    <span className={pro.subText}>Magna enim voluptate sit proident nostrud deserunt deserunt velit amet ex. Eu officia tempor amet do et ipsum adipisicing. Qui exercitation nulla aliquip et pariatur sint.

                                        Cillum et ex ut consectetur dolor incididunt dolor irure. Duis ipsum velit proident cillum. Id eu ullamco aute anim. Eiusmod id excepteur ut velit tempor excepteur dolor enim.

                                        Voluptate exercitation pariatur laboris officia quis commodo. Fugiat sint eu laboris do cillum aliqua nostrud nulla sunt aliquip ex ut culpa cupidatat. Do consequat dolore laboris voluptate exercitation sit enim id pariatur deserunt amet ex sunt. Nulla irure voluptate laboris elit duis sunt ad enim amet enim labore. Nostrud dolor fugiat qui quis proident non eiusmod consectetur culpa anim eiusmod. Voluptate ullamco dolore nulla do ad nisi ea excepteur labore non.

                                        Eu mollit minim ullamco dolor tempor proident mollit minim nulla aliquip aliquip. Pariatur velit amet deserunt consequat sit nostrud aliqua est in laborum amet occaecat. Dolor voluptate voluptate non mollit et exercitation laborum dolor pariatur cupidatat Lorem enim reprehenderit tempor. Cupidatat aute voluptate fugiat voluptate aliqua occaecat est et qui duis fugiat mollit laboris anim. Lorem proident consectetur commodo excepteur sint proident pariatur in esse excepteur incididunt veniam minim deserunt.

                                        Tempor dolor laborum fugiat tempor tempor nulla reprehenderit pariatur anim mollit dolore. Exercitation occaecat minim fugiat ea aliquip aliqua Lorem sunt. Do officia fugiat adipisicing excepteur anim quis proident. Eu dolor esse adipisicing labore est consequat anim dolore magna labore amet ad. Cillum occaecat eu Lorem enim officia cupidatat Lorem commodo incididunt. Proident et est elit nisi mollit voluptate aute.  </span>
                                </Row>



                            </h2>


                        </div>
                    </div>



                </div>
                <div className={pro.card2}>
                    <div className={pro.heading}>Recipe-Book</div>
                    <div className={pro.face}>
                        <div className={pro.content}>
                            <h2 className={pro.Text}>


                                <Row>
                                    <Col className={pro.colSmall}>Introduction &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><span className={pro.subText}>Smart Bus System</span></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Duration &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>1-Months</p></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Used technologies &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>Next Js,MongoDB</p></Col>
                                </Row>

                                <Row>
                                    <Col className={pro.colSmall}>Description &nbsp;&nbsp;:</Col>
                                    <span className={pro.subText}>Magna enim voluptate sit proident nostrud deserunt deserunt velit amet ex. Eu officia tempor amet do et ipsum adipisicing. Qui exercitation nulla aliquip et pariatur sint.

                                        Cillum et ex ut consectetur dolor incididunt dolor irure. Duis ipsum velit proident cillum. Id eu ullamco aute anim. Eiusmod id excepteur ut velit tempor excepteur dolor enim.

                                        Voluptate exercitation pariatur laboris officia quis commodo. Fugiat sint eu laboris do cillum aliqua nostrud nulla sunt aliquip ex ut culpa cupidatat. Do consequat dolore laboris voluptate exercitation sit enim id pariatur deserunt amet ex sunt. Nulla irure voluptate laboris elit duis sunt ad enim amet enim labore. Nostrud dolor fugiat qui quis proident non eiusmod consectetur culpa anim eiusmod. Voluptate ullamco dolore nulla do ad nisi ea excepteur labore non.

                                        Eu mollit minim ullamco dolor tempor proident mollit minim nulla aliquip aliquip. Pariatur velit amet deserunt consequat sit nostrud aliqua est in laborum amet occaecat. Dolor voluptate voluptate non mollit et exercitation laborum dolor pariatur cupidatat Lorem enim reprehenderit tempor. Cupidatat aute voluptate fugiat voluptate aliqua occaecat est et qui duis fugiat mollit laboris anim. Lorem proident consectetur commodo excepteur sint proident pariatur in esse excepteur incididunt veniam minim deserunt.

                                        Tempor dolor laborum fugiat tempor tempor nulla reprehenderit pariatur anim mollit dolore. Exercitation occaecat minim fugiat ea aliquip aliqua Lorem sunt. Do officia fugiat adipisicing excepteur anim quis proident. Eu dolor esse adipisicing labore est consequat anim dolore magna labore amet ad. Cillum occaecat eu Lorem enim officia cupidatat Lorem commodo incididunt. Proident et est elit nisi mollit voluptate aute.  </span>
                                </Row>



                            </h2>


                        </div>
                    </div>



                </div>
                <div className={pro.card}>
                    <div className={pro.heading}>Tea-Corner</div>
                    <div className={pro.face}>
                        <div className={pro.content}>
                            <h2 className={pro.Text}>


                                <Row>
                                    <Col className={pro.colSmall}>Introduction &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><span className={pro.subText}>Smart Bus System</span></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Duration &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>3-Months</p></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Used technologies &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>Next JS,MongoDB</p></Col>
                                </Row>

                                <Row>
                                    <Col className={pro.colSmall}>Description &nbsp;&nbsp;:</Col>
                                    <span className={pro.subText}>Magna enim voluptate sit proident nostrud deserunt deserunt velit amet ex. Eu officia tempor amet do et ipsum adipisicing. Qui exercitation nulla aliquip et pariatur sint.

                                        Cillum et ex ut consectetur dolor incididunt dolor irure. Duis ipsum velit proident cillum. Id eu ullamco aute anim. Eiusmod id excepteur ut velit tempor excepteur dolor enim.

                                        Voluptate exercitation pariatur laboris officia quis commodo. Fugiat sint eu laboris do cillum aliqua nostrud nulla sunt aliquip ex ut culpa cupidatat. Do consequat dolore laboris voluptate exercitation sit enim id pariatur deserunt amet ex sunt. Nulla irure voluptate laboris elit duis sunt ad enim amet enim labore. Nostrud dolor fugiat qui quis proident non eiusmod consectetur culpa anim eiusmod. Voluptate ullamco dolore nulla do ad nisi ea excepteur labore non.

                                        Eu mollit minim ullamco dolor tempor proident mollit minim nulla aliquip aliquip. Pariatur velit amet deserunt consequat sit nostrud aliqua est in laborum amet occaecat. Dolor voluptate voluptate non mollit et exercitation laborum dolor pariatur cupidatat Lorem enim reprehenderit tempor. Cupidatat aute voluptate fugiat voluptate aliqua occaecat est et qui duis fugiat mollit laboris anim. Lorem proident consectetur commodo excepteur sint proident pariatur in esse excepteur incididunt veniam minim deserunt.

                                        Tempor dolor laborum fugiat tempor tempor nulla reprehenderit pariatur anim mollit dolore. Exercitation occaecat minim fugiat ea aliquip aliqua Lorem sunt. Do officia fugiat adipisicing excepteur anim quis proident. Eu dolor esse adipisicing labore est consequat anim dolore magna labore amet ad. Cillum occaecat eu Lorem enim officia cupidatat Lorem commodo incididunt. Proident et est elit nisi mollit voluptate aute.  </span>
                                </Row>



                            </h2>


                        </div>
                    </div>



                </div>
                <div className={pro.card1}>
                    <div className={pro.heading}>Workflow</div>
                    <div className={pro.face}>
                        <div className={pro.content}>
                            <h2 className={pro.Text}>


                                <Row>
                                    <Col className={pro.colSmall}>Introduction &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><span className={pro.subText}>Smart Bus System</span></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Duration &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>3-Months</p></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Used technologies &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>React,Java(Spring boot),Postgresql</p></Col>
                                </Row>

                                <Row>
                                    <Col className={pro.colSmall}>Description &nbsp;&nbsp;:</Col>
                                    <span className={pro.subText}>Magna enim voluptate sit proident nostrud deserunt deserunt velit amet ex. Eu officia tempor amet do et ipsum adipisicing. Qui exercitation nulla aliquip et pariatur sint.

                                        Cillum et ex ut consectetur dolor incididunt dolor irure. Duis ipsum velit proident cillum. Id eu ullamco aute anim. Eiusmod id excepteur ut velit tempor excepteur dolor enim.

                                        Voluptate exercitation pariatur laboris officia quis commodo. Fugiat sint eu laboris do cillum aliqua nostrud nulla sunt aliquip ex ut culpa cupidatat. Do consequat dolore laboris voluptate exercitation sit enim id pariatur deserunt amet ex sunt. Nulla irure voluptate laboris elit duis sunt ad enim amet enim labore. Nostrud dolor fugiat qui quis proident non eiusmod consectetur culpa anim eiusmod. Voluptate ullamco dolore nulla do ad nisi ea excepteur labore non.

                                        Eu mollit minim ullamco dolor tempor proident mollit minim nulla aliquip aliquip. Pariatur velit amet deserunt consequat sit nostrud aliqua est in laborum amet occaecat. Dolor voluptate voluptate non mollit et exercitation laborum dolor pariatur cupidatat Lorem enim reprehenderit tempor. Cupidatat aute voluptate fugiat voluptate aliqua occaecat est et qui duis fugiat mollit laboris anim. Lorem proident consectetur commodo excepteur sint proident pariatur in esse excepteur incididunt veniam minim deserunt.

                                        Tempor dolor laborum fugiat tempor tempor nulla reprehenderit pariatur anim mollit dolore. Exercitation occaecat minim fugiat ea aliquip aliqua Lorem sunt. Do officia fugiat adipisicing excepteur anim quis proident. Eu dolor esse adipisicing labore est consequat anim dolore magna labore amet ad. Cillum occaecat eu Lorem enim officia cupidatat Lorem commodo incididunt. Proident et est elit nisi mollit voluptate aute.  </span>
                                </Row>



                            </h2>


                        </div>
                    </div>



                </div>
                <div className={pro.card2}>
                    <div className={pro.heading}>Forts</div>
                    <div className={pro.face}>
                        <div className={pro.content}>
                            <h2 className={pro.Text}>


                                <Row>
                                    <Col className={pro.colSmall}>Introduction &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><span className={pro.subText}>Smart Bus System</span></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Duration &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>3-Months</p></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Used technologies &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>Next JS,Postgresql</p></Col>
                                </Row>

                                <Row>
                                    <Col className={pro.colSmall}>Description &nbsp;&nbsp;:</Col>
                                    <span className={pro.subText}>Magna enim voluptate sit proident nostrud deserunt deserunt velit amet ex. Eu officia tempor amet do et ipsum adipisicing. Qui exercitation nulla aliquip et pariatur sint.

                                        Cillum et ex ut consectetur dolor incididunt dolor irure. Duis ipsum velit proident cillum. Id eu ullamco aute anim. Eiusmod id excepteur ut velit tempor excepteur dolor enim.

                                        Voluptate exercitation pariatur laboris officia quis commodo. Fugiat sint eu laboris do cillum aliqua nostrud nulla sunt aliquip ex ut culpa cupidatat. Do consequat dolore laboris voluptate exercitation sit enim id pariatur deserunt amet ex sunt. Nulla irure voluptate laboris elit duis sunt ad enim amet enim labore. Nostrud dolor fugiat qui quis proident non eiusmod consectetur culpa anim eiusmod. Voluptate ullamco dolore nulla do ad nisi ea excepteur labore non.

                                        Eu mollit minim ullamco dolor tempor proident mollit minim nulla aliquip aliquip. Pariatur velit amet deserunt consequat sit nostrud aliqua est in laborum amet occaecat. Dolor voluptate voluptate non mollit et exercitation laborum dolor pariatur cupidatat Lorem enim reprehenderit tempor. Cupidatat aute voluptate fugiat voluptate aliqua occaecat est et qui duis fugiat mollit laboris anim. Lorem proident consectetur commodo excepteur sint proident pariatur in esse excepteur incididunt veniam minim deserunt.

                                        Tempor dolor laborum fugiat tempor tempor nulla reprehenderit pariatur anim mollit dolore. Exercitation occaecat minim fugiat ea aliquip aliqua Lorem sunt. Do officia fugiat adipisicing excepteur anim quis proident. Eu dolor esse adipisicing labore est consequat anim dolore magna labore amet ad. Cillum occaecat eu Lorem enim officia cupidatat Lorem commodo incididunt. Proident et est elit nisi mollit voluptate aute.  </span>
                                </Row>



                            </h2>


                        </div>
                    </div>



                </div>
                <div className={pro.card}>
                    <div className={pro.heading}>true-Servey(College Project)</div>
                    <div className={pro.face}>
                        <div className={pro.content}>
                            <h2 className={pro.Text}>


                                <Row>
                                    <Col className={pro.colSmall}>Introduction &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><span className={pro.subText}>Smart Bus System</span></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Duration &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>3-Months</p></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Used technologies &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>Next JS,Postgresql</p></Col>
                                </Row>

                                <Row>
                                    <Col className={pro.colSmall}>Description &nbsp;&nbsp;:</Col>
                                    <span className={pro.subText}>Magna enim voluptate sit proident nostrud deserunt deserunt velit amet ex. Eu officia tempor amet do et ipsum adipisicing. Qui exercitation nulla aliquip et pariatur sint.

                                        Cillum et ex ut consectetur dolor incididunt dolor irure. Duis ipsum velit proident cillum. Id eu ullamco aute anim. Eiusmod id excepteur ut velit tempor excepteur dolor enim.

                                        Voluptate exercitation pariatur laboris officia quis commodo. Fugiat sint eu laboris do cillum aliqua nostrud nulla sunt aliquip ex ut culpa cupidatat. Do consequat dolore laboris voluptate exercitation sit enim id pariatur deserunt amet ex sunt. Nulla irure voluptate laboris elit duis sunt ad enim amet enim labore. Nostrud dolor fugiat qui quis proident non eiusmod consectetur culpa anim eiusmod. Voluptate ullamco dolore nulla do ad nisi ea excepteur labore non.

                                        Eu mollit minim ullamco dolor tempor proident mollit minim nulla aliquip aliquip. Pariatur velit amet deserunt consequat sit nostrud aliqua est in laborum amet occaecat. Dolor voluptate voluptate non mollit et exercitation laborum dolor pariatur cupidatat Lorem enim reprehenderit tempor. Cupidatat aute voluptate fugiat voluptate aliqua occaecat est et qui duis fugiat mollit laboris anim. Lorem proident consectetur commodo excepteur sint proident pariatur in esse excepteur incididunt veniam minim deserunt.

                                        Tempor dolor laborum fugiat tempor tempor nulla reprehenderit pariatur anim mollit dolore. Exercitation occaecat minim fugiat ea aliquip aliqua Lorem sunt. Do officia fugiat adipisicing excepteur anim quis proident. Eu dolor esse adipisicing labore est consequat anim dolore magna labore amet ad. Cillum occaecat eu Lorem enim officia cupidatat Lorem commodo incididunt. Proident et est elit nisi mollit voluptate aute.  </span>
                                </Row>



                            </h2>


                        </div>
                    </div>



                </div>
                <div className={pro.card1}>
                    <div className={pro.heading}>Chit-Chat</div>
                    <div className={pro.face}>
                        <div className={pro.content}>
                            <h2 className={pro.Text}>


                                <Row>
                                    <Col className={pro.colSmall}>Introduction &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><span className={pro.subText}>Smart Bus System</span></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Duration &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>3-Months</p></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Used technologies &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>(Flutter,Firebase)/(Kotlin,firebase)/(Java,firebase)</p></Col>
                                </Row>

                                <Row>
                                    <Col className={pro.colSmall}>Description &nbsp;&nbsp;:</Col>
                                    <span className={pro.subText}>Magna enim voluptate sit proident nostrud deserunt deserunt velit amet ex. Eu officia tempor amet do et ipsum adipisicing. Qui exercitation nulla aliquip et pariatur sint.

                                        Cillum et ex ut consectetur dolor incididunt dolor irure. Duis ipsum velit proident cillum. Id eu ullamco aute anim. Eiusmod id excepteur ut velit tempor excepteur dolor enim.

                                        Voluptate exercitation pariatur laboris officia quis commodo. Fugiat sint eu laboris do cillum aliqua nostrud nulla sunt aliquip ex ut culpa cupidatat. Do consequat dolore laboris voluptate exercitation sit enim id pariatur deserunt amet ex sunt. Nulla irure voluptate laboris elit duis sunt ad enim amet enim labore. Nostrud dolor fugiat qui quis proident non eiusmod consectetur culpa anim eiusmod. Voluptate ullamco dolore nulla do ad nisi ea excepteur labore non.

                                        Eu mollit minim ullamco dolor tempor proident mollit minim nulla aliquip aliquip. Pariatur velit amet deserunt consequat sit nostrud aliqua est in laborum amet occaecat. Dolor voluptate voluptate non mollit et exercitation laborum dolor pariatur cupidatat Lorem enim reprehenderit tempor. Cupidatat aute voluptate fugiat voluptate aliqua occaecat est et qui duis fugiat mollit laboris anim. Lorem proident consectetur commodo excepteur sint proident pariatur in esse excepteur incididunt veniam minim deserunt.

                                        Tempor dolor laborum fugiat tempor tempor nulla reprehenderit pariatur anim mollit dolore. Exercitation occaecat minim fugiat ea aliquip aliqua Lorem sunt. Do officia fugiat adipisicing excepteur anim quis proident. Eu dolor esse adipisicing labore est consequat anim dolore magna labore amet ad. Cillum occaecat eu Lorem enim officia cupidatat Lorem commodo incididunt. Proident et est elit nisi mollit voluptate aute.  </span>
                                </Row>



                            </h2>


                        </div>
                    </div>



                </div>
                <div className={pro.card2}>
                    <div className={pro.heading}>Book-shop</div>
                    <div className={pro.face}>
                        <div className={pro.content}>
                            <h2 className={pro.Text}>


                                <Row>
                                    <Col className={pro.colSmall}>Introduction &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><span className={pro.subText}>Smart Bus System</span></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Duration &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>3-Months</p></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Used technologies &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>React JS,Expres JS,Mysql</p></Col>
                                </Row>

                                <Row>
                                    <Col className={pro.colSmall}>Description &nbsp;&nbsp;:</Col>
                                    <span className={pro.subText}>Magna enim voluptate sit proident nostrud deserunt deserunt velit amet ex. Eu officia tempor amet do et ipsum adipisicing. Qui exercitation nulla aliquip et pariatur sint.

                                        Cillum et ex ut consectetur dolor incididunt dolor irure. Duis ipsum velit proident cillum. Id eu ullamco aute anim. Eiusmod id excepteur ut velit tempor excepteur dolor enim.

                                        Voluptate exercitation pariatur laboris officia quis commodo. Fugiat sint eu laboris do cillum aliqua nostrud nulla sunt aliquip ex ut culpa cupidatat. Do consequat dolore laboris voluptate exercitation sit enim id pariatur deserunt amet ex sunt. Nulla irure voluptate laboris elit duis sunt ad enim amet enim labore. Nostrud dolor fugiat qui quis proident non eiusmod consectetur culpa anim eiusmod. Voluptate ullamco dolore nulla do ad nisi ea excepteur labore non.

                                        Eu mollit minim ullamco dolor tempor proident mollit minim nulla aliquip aliquip. Pariatur velit amet deserunt consequat sit nostrud aliqua est in laborum amet occaecat. Dolor voluptate voluptate non mollit et exercitation laborum dolor pariatur cupidatat Lorem enim reprehenderit tempor. Cupidatat aute voluptate fugiat voluptate aliqua occaecat est et qui duis fugiat mollit laboris anim. Lorem proident consectetur commodo excepteur sint proident pariatur in esse excepteur incididunt veniam minim deserunt.

                                        Tempor dolor laborum fugiat tempor tempor nulla reprehenderit pariatur anim mollit dolore. Exercitation occaecat minim fugiat ea aliquip aliqua Lorem sunt. Do officia fugiat adipisicing excepteur anim quis proident. Eu dolor esse adipisicing labore est consequat anim dolore magna labore amet ad. Cillum occaecat eu Lorem enim officia cupidatat Lorem commodo incididunt. Proident et est elit nisi mollit voluptate aute.  </span>
                                </Row>



                            </h2>


                        </div>
                    </div>



                </div>
                <div className={pro.card}>
                    <div className={pro.heading}>Live-Movies</div>
                    <div className={pro.face}>
                        <div className={pro.content}>
                            <h2 className={pro.Text}>


                                <Row>
                                    <Col className={pro.colSmall}>Introduction &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><span className={pro.subText}>Smart Bus System</span></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Duration &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>3-Months</p></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Used technologies &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>Next JS,Mysql</p></Col>
                                </Row>

                                <Row>
                                    <Col className={pro.colSmall}>Description &nbsp;&nbsp;:</Col>
                                    <span className={pro.subText}>Magna enim voluptate sit proident nostrud deserunt deserunt velit amet ex. Eu officia tempor amet do et ipsum adipisicing. Qui exercitation nulla aliquip et pariatur sint.

                                        Cillum et ex ut consectetur dolor incididunt dolor irure. Duis ipsum velit proident cillum. Id eu ullamco aute anim. Eiusmod id excepteur ut velit tempor excepteur dolor enim.

                                        Voluptate exercitation pariatur laboris officia quis commodo. Fugiat sint eu laboris do cillum aliqua nostrud nulla sunt aliquip ex ut culpa cupidatat. Do consequat dolore laboris voluptate exercitation sit enim id pariatur deserunt amet ex sunt. Nulla irure voluptate laboris elit duis sunt ad enim amet enim labore. Nostrud dolor fugiat qui quis proident non eiusmod consectetur culpa anim eiusmod. Voluptate ullamco dolore nulla do ad nisi ea excepteur labore non.

                                        Eu mollit minim ullamco dolor tempor proident mollit minim nulla aliquip aliquip. Pariatur velit amet deserunt consequat sit nostrud aliqua est in laborum amet occaecat. Dolor voluptate voluptate non mollit et exercitation laborum dolor pariatur cupidatat Lorem enim reprehenderit tempor. Cupidatat aute voluptate fugiat voluptate aliqua occaecat est et qui duis fugiat mollit laboris anim. Lorem proident consectetur commodo excepteur sint proident pariatur in esse excepteur incididunt veniam minim deserunt.

                                        Tempor dolor laborum fugiat tempor tempor nulla reprehenderit pariatur anim mollit dolore. Exercitation occaecat minim fugiat ea aliquip aliqua Lorem sunt. Do officia fugiat adipisicing excepteur anim quis proident. Eu dolor esse adipisicing labore est consequat anim dolore magna labore amet ad. Cillum occaecat eu Lorem enim officia cupidatat Lorem commodo incididunt. Proident et est elit nisi mollit voluptate aute.  </span>
                                </Row>



                            </h2>


                        </div>
                    </div>



                </div>
                <div className={pro.card1}>
                    <div className={pro.heading}>My-Match</div>
                    <div className={pro.face}>
                        <div className={pro.content}>
                            <h2 className={pro.Text}>


                                <Row>
                                    <Col className={pro.colSmall}>Introduction &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><span className={pro.subText}>Smart Bus System</span></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Duration &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>3-Months</p></Col>
                                </Row>
                                <Row>
                                    <Col className={pro.colSmall}>Used technologies &nbsp;&nbsp;:</Col>
                                    <Col className={pro.colBig}><p className={pro.subText}>(flutter,firebase)/(Next JS ,Mongo)</p></Col>
                                </Row>

                                <Row>
                                    <Col className={pro.colSmall}>Description &nbsp;&nbsp;:</Col>
                                    <span className={pro.subText}>Magna enim voluptate sit proident nostrud deserunt deserunt velit amet ex. Eu officia tempor amet do et ipsum adipisicing. Qui exercitation nulla aliquip et pariatur sint.

                                        Cillum et ex ut consectetur dolor incididunt dolor irure. Duis ipsum velit proident cillum. Id eu ullamco aute anim. Eiusmod id excepteur ut velit tempor excepteur dolor enim.

                                        Voluptate exercitation pariatur laboris officia quis commodo. Fugiat sint eu laboris do cillum aliqua nostrud nulla sunt aliquip ex ut culpa cupidatat. Do consequat dolore laboris voluptate exercitation sit enim id pariatur deserunt amet ex sunt. Nulla irure voluptate laboris elit duis sunt ad enim amet enim labore. Nostrud dolor fugiat qui quis proident non eiusmod consectetur culpa anim eiusmod. Voluptate ullamco dolore nulla do ad nisi ea excepteur labore non.

                                        Eu mollit minim ullamco dolor tempor proident mollit minim nulla aliquip aliquip. Pariatur velit amet deserunt consequat sit nostrud aliqua est in laborum amet occaecat. Dolor voluptate voluptate non mollit et exercitation laborum dolor pariatur cupidatat Lorem enim reprehenderit tempor. Cupidatat aute voluptate fugiat voluptate aliqua occaecat est et qui duis fugiat mollit laboris anim. Lorem proident consectetur commodo excepteur sint proident pariatur in esse excepteur incididunt veniam minim deserunt.

                                        Tempor dolor laborum fugiat tempor tempor nulla reprehenderit pariatur anim mollit dolore. Exercitation occaecat minim fugiat ea aliquip aliqua Lorem sunt. Do officia fugiat adipisicing excepteur anim quis proident. Eu dolor esse adipisicing labore est consequat anim dolore magna labore amet ad. Cillum occaecat eu Lorem enim officia cupidatat Lorem commodo incididunt. Proident et est elit nisi mollit voluptate aute.  </span>
                                </Row>



                            </h2>


                        </div>
                    </div>



                </div> */}


            </div>

        </>
    );
}

export default projects;



