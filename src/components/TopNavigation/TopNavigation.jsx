import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">LEARN WITH PROFESSIONALS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">Home</Nav.Link>
                    <Nav.Link href="#deets">About</Nav.Link>
                    <Nav.Link href="#deets">Services</Nav.Link>
                    <Nav.Link href="#deets">Courses</Nav.Link>
                    <Nav.Link href="#deets">Protfolio</Nav.Link>
                    <Nav.Link href="#deets">Get in Touch</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;