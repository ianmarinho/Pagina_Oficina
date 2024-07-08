import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaCar } from 'react-icons/fa';
import './ServicesList.module.css'; // Importa o arquivo CSS com os estilos customizados

const ServiceList = () => {
    return (
        <div className="container">

            <h1 style={{color:'white', paddingTop:'80px', paddingBottom:'40px'}}> Serviços </h1>

            <div className="row">
                <div className="col-md-4">
                    <Card className="service-card" style={{ backgroundColor: '#212529', color: 'white', border: 'none' }}>
                        <Card.Header><FaCar className="text-danger" style={{ fontSize: '24px' }} /> TRANSMISSÃO</Card.Header>
                        <Card.Body>
                            <ul>
                                <li>Checagem da embreagem</li>
                                <li>Checagem da transmissão</li>
                                <li>Checagem do suporte e coxins</li>
                                <li>Checagem dos tirantes de casa e trambulador</li>
                                <li>Checagem do nível e condições do óleo da transmissão</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card className="service-card" style={{ backgroundColor: '#212529', color: 'white', border: 'none' }}>
                        <Card.Header><FaCar className="text-danger" style={{ fontSize: '24px' }} /> FREIOS</Card.Header>
                        <Card.Body>
                            <ul>
                                <li>Checagem dos flexíveis de freio</li>
                                <li>Checagem de sapatas e lonas de freio</li>
                                <li>Checagem dos tambores de freio</li>
                                <li>Checagem de pastilhas e dos sensores de desgaste</li>
                                <li>Checagem dos cilindros de roda</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card className="service-card" style={{ backgroundColor: '#212529', color: 'white', border: 'none' }}>
                        <Card.Header><FaCar className="text-danger" style={{ fontSize: '24px' }} /> DIREÇÃO</Card.Header>
                        <Card.Body>
                            <ul>
                                <li>Checagem da caixa de direção</li>
                                <li>Checagem das coifas e homocinéticas</li>
                                <li>Checagem dos rolamentos e cubos de roda</li>
                                <li>Checagem de terminais e tensores de direção</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <Card className="service-card" style={{ backgroundColor: '#212529', color: 'white', border: 'none' }}>
                        <Card.Header><FaCar className="text-danger" style={{ fontSize: '24px' }} /> FLUIDOS E FILTROS</Card.Header>
                        <Card.Body>
                            <ul>
                                <li>Checagem do nível e condições do óleo do motor e filtro</li>
                                <li>Checagem do nível e condições do fluido de freio</li>
                                <li>Checagem do nível e condições do fluido da direção hidráulica</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card className="service-card" style={{ backgroundColor: '#212529', color: 'white', border: 'none' }}>
                        <Card.Header><FaCar className="text-danger" style={{ fontSize: '24px' }} /> SUSPENSÃO</Card.Header>
                        <Card.Body>
                            <ul>
                                <li>Checagem da situação dos amortecedores</li>
                                <li>Checagem da situação das molas</li>
                                <li>Checagem dos coxins, batentes, suportes e buchas da suspensão</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card className="service-card" style={{ backgroundColor: '#212529', color: 'white', border: 'none' }}>
                        <Card.Header><FaCar className="text-danger" style={{ fontSize: '24px' }} /> ELÉTRICA</Card.Header>
                        <Card.Body>
                            <ul>
                                <li>Teste ou substituição da bateria</li>
                                <li>Teste do sistema de carga e partida (alternador e arranque)</li>
                                <li>Checagem de cabos e terminais elétricos</li>
                                <li>Checagem da necessidade de substituição de lâmpadas</li>
                                <li>Checagem de fusíveis e relés</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default ServiceList;
