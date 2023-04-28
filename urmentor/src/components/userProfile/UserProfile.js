// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './userProfile.css';
// import Avatar from '../Avatar/Avatar';
// function KitchenSinkExample() {
//     return (
//         <div className="profile-container profile-page" >
//             <Card style={{ width: '40%' }} >
//                 {/* <Card.Img  src="holder.js/10px18?text=Image cap" /> */}
//                 {/* <div> */}

//                 <Card.Body className="profile-Avatar" >
//                     <Avatar alt="" src="" />
//                     <Card.Title className='profile-name'>Shiva</Card.Title>
//                     {/* <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text> */}

//                     <ListGroup className="list-group-flush">
//                         <ListGroup.Item><b>Class : </b> 12th</ListGroup.Item>
//                         <ListGroup.Item><b>Target : </b> JEE </ListGroup.Item>
//                         <ListGroup.Item><b>Phone No : </b>123456789</ListGroup.Item>
//                     </ListGroup>

//                     <Card.Body  >
//                         <Card.Link href="#" variant="primary">Favorite Mentor</Card.Link>
//                         {/* <Card.Link href="#" variant="primary">Another Link</Card.Link> */}
//                     </Card.Body>

//                 </Card.Body>

//             </Card>
//             <Card style={{ width: '60%' }}>
//                 <Card.Body>

//                     <Card.Title className='profile-name'>HISTORY</Card.Title>
//                 </Card.Body>
//             </Card>

//         </div>
//     );
// }

// export default KitchenSinkExample;

import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

function UserProfile() {
  return (
    <>
    <div className='profile-container mx-auto' >
      <Container  fluid>
        <Row className='edit-profile-div justify-content-center mt-3 mb-3'>

          <Col class='text-dark'md="8">
            <Card >
              <Card.Header>
                <Card.Title className='edit-title  text-dark' as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>  
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label className='edit-title text-dark'>Username</label>
                        <Form.Control
                          defaultValue="shiva"
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6" pd='7'>
                      <Form.Group>
                        <label className='edit-title text-dark' htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label className='edit-title text-dark' >Full Name</label>
                        <Form.Control
                          defaultValue="SHiva"
                          placeholder="Full Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label className='edit-title text-dark' >Exam-Target</label>
                        <Form.Control
                          defaultValue="Y"
                          placeholder="Target"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label className='edit-title text-dark'>Class</label>
                        <Form.Control
                          defaultValue="12th"
                          placeholder="Class"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label className='edit-title text-dark'>Phone number</label>
                        <Form.Control
                          defaultValue="99999 99999"
                          placeholder="Phone number"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label className='edit-title text-dark' >Address</label>
                        <Form.Control
                          defaultValue="NITT INDIA "
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label className='edit-title text-dark' >City</label>
                        <Form.Control
                          defaultValue="Trichy"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label className='edit-title text-dark' >Country</label>
                        <Form.Control
                          defaultValue="India"

                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label className='edit-title text-dark'>Postal Code</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label className='edit-title text-dark'>About Me</label>
                        <Form.Control
                          cols="80"
                          defaultValue="coder devloper nothing dont exist."
                          placeholder="Here can be your description"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
         
        </Row>
      </Container>
      </div>
    </>
  );
}
export default UserProfile;