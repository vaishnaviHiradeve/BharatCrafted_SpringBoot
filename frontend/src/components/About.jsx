import {Card, Container, Row } from "react-bootstrap";
import pic from "./pictures/sakshi.jpg"
import pic1 from "./pictures/saurabh.jpg"
import pic2 from "./pictures/archit.jpg"
import pic3 from "./pictures/vaishnavi.jpg"
import pic4 from "./pictures/manish.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function About() {
    return (
        <Container>
           
                <h3 className="mt-5 text-center" style={{color:"white"}}>Our Members</h3>
                <hr />
            
            <Row className="text-center" style={{display:"flex" ,justifyContent:"center"}}>
            <Card style={{ width: '18rem',margin:'45px', border:'none', boxShadow:" 0 0 8px 0 rgba(0, 0, 0, 0.4)"}}  >
                    <Card.Img variant="top" src={pic1} style={{ height:200, width:175, borderRadius:200,alignSelf:"center"}} className="mt-3" />
                    <Card.Body>
                        <Card.Title>Saurabh Patil</Card.Title>
                        <Card.Text>
                        Developer
                        </Card.Text>
                        <a href="https://www.linkedin.com/in/saurabh-patil-b67471283/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
            </svg>
          </a> 
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem',margin:'45px', border:'none', boxShadow:" 0 0 8px 0 rgba(0, 0, 0, 0.4)"}} >
                    <Card.Img  variant="top" src={pic} style={{ height:200, width:175, borderRadius:200,alignSelf:"center"}} className="mt-3"/>
                    <Card.Body>
                        <Card.Title>Sakshi Korgaonkar</Card.Title>
                        <Card.Text>
                        Developer
                        </Card.Text>
                        <a href="https://www.linkedin.com/in/sakshi-korgaonkar/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
            </svg>
          </a> 
                        </Card.Body>

                </Card>
                <Card style={{ width: '18rem',margin:'45px', border:'none', boxShadow:" 0 0 8px 0 rgba(0, 0, 0, 0.4)"}} >
                    <Card.Img variant="top" src={pic2} style={{ height:200, width:175, borderRadius:200,alignSelf:"center"}} className="mt-3" />
                    <Card.Body>
                        <Card.Title>Archit Dobriyal</Card.Title>
                        <Card.Text>
                        Developer
                        </Card.Text>
                        <a href="https://www.linkedin.com/in/archit-d-915093170/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
            </svg>
          </a>    
                    </Card.Body>
                </Card>
            </Row>
            <Row className="text-center" style={{display:"flex" ,justifyContent:"center"}}>
            <Card style={{ width: '18rem',margin:'45px', border:'none', boxShadow:" 0 0 8px 0 rgba(0, 0, 0, 0.4)"}}  >
                    <Card.Img variant="top" src={pic3} style={{ height:200, width:175, borderRadius:200,alignSelf:"center"}} className="mt-3" />
                    <Card.Body>
                        <Card.Title>Vaishnavi Hiradave</Card.Title>
                        <Card.Text>
                        Developer
                        </Card.Text>
                        <a href="https://www.linkedin.com/in/vaishnavi-hiradeve-3ba383289/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
            </svg>
          </a>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem',margin:'45px', border:'none', boxShadow:" 0 0 8px 0 rgba(0, 0, 0, 0.4)"}} >
                    <Card.Img  variant="top" src={pic4} style={{ height:200, width:175, borderRadius:200,alignSelf:"center"}} className="mt-3"/>
                    <Card.Body>
                        <Card.Title>Manish Kumar</Card.Title>
                        <Card.Text>
                            Developer
                        </Card.Text>
                        <a href="https://www.linkedin.com/in/manish-kumar/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
            </svg>
          </a>
                        </Card.Body>

                </Card>
                
            </Row>
            <br /><br />
        </Container>

    )
}