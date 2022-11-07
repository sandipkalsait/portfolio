
import useSWR from 'swr';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import edu from "../styles/Comman.module.css"
import home from "../styles/Home.module.css"
// import data from "./../Data/education.json";


const fetcher = (url) => fetch(url).then((res) => res.json());

function json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result;
}


function eduction() {
    var rec={};
    //Set up SWR to run the fetcher function when calling "/api/staticdata"
    //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
    const { data, error } = useSWR('/api/educationdata', fetcher);
  
    //Handle the error state
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div>Loading...</div>;
    rec=JSON.parse(data);
    console.log(rec.education);
    // for (const property in rec.eduction) {
    //     console.log(`${property}: ${rec[property]}`);
    //   }
    

    return (
        <>

                        {/* {record.map((postData) => {
								console.log(postData);
								return(
                                <Card  key={postData.id}>

                                    <Card.Body>
                                        <Card.Title className={style.tile}>
                                            {postData.class}
                                        </Card.Title>
                                        <Card.Subtitle className={style.tag}>
                                            {postData.school + " "}
                                        </Card.Subtitle>

                                        <Card.Text className={style.para}>
                                            {postData.year}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                                );
                            })} */}




            <div className={edu.container}>
                <h1 className={home.animate}>Education</h1>

                <div className={edu.card}>
                    <div className={edu.heading}>Primary</div>
                    <div className={edu.face}>
                        <div className={edu.content}>
                            <h2 className={edu.Text}>


                                <Row>
                                    <Col className={edu.colSmall}>Class &nbsp;&nbsp;:</Col>
                                    <Col className={edu.colBig}><span className={edu.subText}>10-th</span></Col>
                                </Row>
                                <Row>
                                    <Col className={edu.colSmall}>School-Name &nbsp;&nbsp;:</Col>
                                    <Col className={edu.colBig}><p className={edu.subText}>Late.Vittaravji Shinde High school Ambad-413208</p>

                                    </Col>
                                </Row>

                                <Row>
                                    <Col className={edu.colSmall}> Board &nbsp;&nbsp;:</Col>
                                    <Col className={edu.colBig}><span className={edu.subText}>SSC</span></Col>
                                </Row>

                                <Row>
                                    <Col className={edu.colSmall}>Percentage &nbsp;&nbsp;:</Col>
                                    <Col className={edu.colBig}><span className={edu.subText}>85.40%</span></Col>
                                </Row>

                                <Row>
                                    <Col className={edu.colSmall}>Year of Passing &nbsp;&nbsp;:</Col>
                                    <Col className={edu.colBig}> <span className={edu.subText}>2016</span></Col>
                                </Row>

                            </h2>


                        </div>
                    </div>



                </div>
                <div className={edu.card1}>
                    <div className={edu.heading}>Secondary</div>
                    <div className={edu.face}>
                        <div className={edu.content}>
                            <h2 className={edu.Text}>




                                <Row>


                                    <Col className={edu.colSmall}>
                                        Class &nbsp;&nbsp;:
                                    </Col>
                                    <Col className={edu.colBig}>
                                        <span className={edu.subText}>12-th</span>
                                    </Col>

                                </Row>



                                <Row>
                                    <Col className={edu.colSmall}>College-Name &nbsp;&nbsp;:</Col>
                                    <Col className={edu.colBig}><p className={edu.subText}>Late.Vittaravji Shinde Art and Science College Ambad-413208</p>

                                    </Col>
                                </Row>

                                <Row>
                                    <Col className={edu.colSmall}> Board &nbsp;&nbsp;:</Col>
                                    <Col className={edu.colBig}><span className={edu.subText}>HSC</span></Col>
                                </Row>

                                <Row>
                                    <Col className={edu.colSmall}>Percentage &nbsp;&nbsp;:</Col>
                                    <Col className={edu.colBig}><span className={edu.subText}>69.690%</span></Col>
                                </Row>

                                <Row>
                                    <Col className={edu.colSmall}>Year of Passing &nbsp;&nbsp;:</Col>
                                    <Col className={edu.colBig}> <span className={edu.subText}>2019</span></Col>
                                </Row>

                            </h2>


                        </div>
                    </div>



                </div>


                <div className={edu.card2}>
                    <div className={edu.heading}>Graduation</div>
                    <div className={edu.face}>
                        <div className={edu.content}>
                            <h2 className={edu.Text}>



                                <Row>


                                    <Col className={edu.colSmall}>
                                        Class &nbsp;&nbsp;:
                                    </Col>
                                    <Col className={edu.colBig}>
                                        <span className={edu.subText}>Bsc Computer Science</span>
                                    </Col>

                                </Row>



                                <Row>
                                    <Col className={edu.colSmall}>College-Name &nbsp;&nbsp;:</Col>
                                    <Col className={edu.colBig}><p className={edu.subText}>PE's Modern College of Art,Science and Commerce Ganeshkhind,Pune-16</p>

                                    </Col>
                                </Row>

                                <Row>
                                    <Col className={edu.colSmall}> University &nbsp;&nbsp;:</Col>
                                    <Col className={edu.colBig}><span className={edu.subText}>Savitribai Phule Pune University</span></Col>
                                </Row>

                                <Row>
                                    <Col className={edu.colSmall}>Percentage &nbsp;&nbsp;:</Col>
                                    <Col className={edu.colBig}><span className={edu.subText}>64.40%</span></Col>
                                </Row>

                                <Row>
                                    <Col className={edu.colSmall}>Year of Passing &nbsp;&nbsp;:</Col>
                                    <Col className={edu.colBig}> <span className={edu.subText}>2021</span></Col>
                                </Row>
                            </h2>


                        </div>
                    </div>



                </div>




            </div>

        </>
    );
}

export default eduction;



