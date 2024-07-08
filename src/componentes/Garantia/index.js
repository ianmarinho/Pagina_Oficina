import React from 'react';
import { FaWrench, FaCheckCircle, FaClock } from 'react-icons/fa'; // Importando ícones do FontAwesome
import styles from './Garantia.module.css'; // Importando estilos do módulo CSS
import { Card } from 'react-bootstrap'; // Importando o componente Card do Bootstrap

const GarantiasComponent = () => {
    const iconSize = 24; // Tamanho dos ícones em pixels

    return (
        <div className="container">

            <h1 style={{ color: 'white', paddingTop: '80px', paddingBottom: '40px' }}>Garantias</h1>

            <div className="row">
                <div className="col-md-4">
                    <Card className="service-card" style={{ backgroundColor: '#212529', color: 'white', border: 'none' }}>
                        <Card.Header className="d-flex align-items-center"><FaWrench className="text-danger me-3" size={iconSize} /> Garantia nos Serviços</Card.Header>
                        <Card.Body>
                            <p className="mb-0">Nós garantimos a qualidade e precisão de todos os serviços realizados.</p>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card className="service-card" style={{ backgroundColor: '#212529', color: 'white', border: 'none' }}>
                        <Card.Header className="d-flex align-items-center"><FaCheckCircle className="text-danger me-3" size={iconSize} /> Garantia nas Peças</Card.Header>
                        <Card.Body>
                            <p className="mb-0">Oferecemos garantia nas peças novas instaladas conforme os termos especificados.</p>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card className="service-card" style={{ backgroundColor: '#212529', color: 'white', border: 'none' }}>
                        <Card.Header className="d-flex align-items-center"><FaClock className="text-danger me-3" size={iconSize} /> Tempo de Garantia</Card.Header>
                        <Card.Body>
                            <p className="mb-0">A garantia varia conforme o serviço e a peça. Consulte nossos técnicos para mais detalhes.</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    );
};

export default GarantiasComponent;
