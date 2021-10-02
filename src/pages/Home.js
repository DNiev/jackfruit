import React from 'react';
import {Card, Container, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../Components/Styles/home.css';

const Home = () => {
    return (
        <div>
            <Container>
                <Image src="https://imgur.com/9MkXjsU.png" fluid/>                
            </Container> 
            <Container className='Main-page-cards'>
                <Card style={{width:'18rem'}}>
                    <Link to ='/aboutus'>
                        <Card.Body>
                            <Card.Title>About Us</Card.Title>
                            <Card.Text>Info about the About Us page</Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{width:'18rem'}}>
                    <Link to ='/team'>
                        <Card.Body>
                            <Card.Title>The Team</Card.Title>
                            <Card.Text>Info about the The Team page</Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{width:'18rem'}}>
                    <Link to='/photos'>
                        <Card.Body>
                            <Card.Title>Activity Photos</Card.Title>
                            <Card.Text>Info about the Photos page</Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{width:'18rem'}}>
                    <Link to='/donate'>
                        <Card.Body>
                            <Card.Title>Donate</Card.Title>
                            <Card.Text>Info about the Donate page</Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
                <Card style={{width:'18rem'}}>
                    <Link to='/ContactUs'>
                        <Card.Body>
                            <Card.Title>Contact Us</Card.Title>
                            <Card.Text>Info about the Contact page</Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
                <Card>

                </Card>
            </Container>
        </div>
    )
};

export default Home;
