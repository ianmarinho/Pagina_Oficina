import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import Icone from '../../assets/Icon_RevisaCar.png';

const Header = () => {
    return (
        <Navbar bg="black" variant="dark">
            <Container fluid>
                <Row className="w-100">

                    {/* Logo à esquerda em telas maiores */}
                    <Col xs="auto" className="d-none d-lg-flex align-items-center">
                        <Navbar.Brand href="/" className="d-flex align-items-center">
                            <img src={Icone} alt="Logo" width="140" height="140" className="me-3" />
                        </Navbar.Brand>
                    </Col>

                    {/* Logo centralizada em telas menores */}
                    <Col xs="12" className="d-flex d-lg-none justify-content-center align-items-center" style={{paddingLeft:'50px'}}>
                        <Navbar.Brand href="/" className="d-flex align-items-center">
                            <img src={Icone} alt="Logo" width="140" height="140" className="me-3"/>
                        </Navbar.Brand>
                    </Col>

                    {/* Frase ao lado da logo em telas maiores */}
                    <Col className="d-none d-lg-flex align-items-center justify-content-center">
                        <p className="text-white mb-0 fs-5" style={{ whiteSpace: 'nowrap' }}>
                            Venha para a RevisaCar e Sinta a Diferença no Cuidado Com o Seu Veículo!
                        </p>
                    </Col>

                </Row>
            </Container>
        </Navbar>
    );
};

export default Header;
