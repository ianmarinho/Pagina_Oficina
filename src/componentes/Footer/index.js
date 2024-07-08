import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import styles from './Footer.module.css';  // Importando estilos do módulo CSS
import visaLogo from '../../assets/Visa-Logo.png';
import mastercardLogo from '../../assets/mastercard-icon.png';
import pixLogo from '../../assets/pix.png';

const Footer = () => {
    return (
        <footer className={styles.footer}> {/* Aplicando a classe do módulo CSS */}
            <div className="container">
                <div className="row mt-0"> {/* Removendo a margem superior aqui */}
                    <div className="col-md-3 col-12 mb-4 mb-md-0">
                        <h5>Redes Sociais</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://api.whatsapp.com/send?phone=seu_numero"><FontAwesomeIcon icon={faWhatsapp} /> (63) 99279-1987</a></li>
                            <li><a href="mailto:seu_email@example.com"><FontAwesomeIcon icon={faEnvelope} /> iansilvamarinho593@gmail.com</a></li>
                            <li><a href="https://www.instagram.com/ianmarinho__/"><FontAwesomeIcon icon={faInstagram} /> @ianmarinho</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-12 mb-4 mb-md-0">
                        <h5>Endereço</h5>
                        <ul className="list-unstyled">
                            <li>Bairro: Setor Urbano</li>
                            <li>Rua: 3, 30</li>
                            <li>CEP: 77809-130</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-12 mb-4 mb-md-0">
                        <h5>Horário de Funcionamento</h5>
                        <ul className="list-unstyled">
                            <li>Segunda-Sexta</li>
                            <li>8:00 - 18:00</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-12 mb-4 mb-md-0">
                        <h5>Formas de Pagamento</h5>
                        <ul className="list-unstyled">
                            <li className="d-inline-block mr-3"><img src={visaLogo} alt="Visa" style={{ width: '60px', height: 'auto', paddingRight: '2px' }} /></li>
                            <li className="d-inline-block mr-3"><img src={mastercardLogo} alt="Mastercard" style={{ width: '60px', height: 'auto', paddingRight: '2px' }} /></li>
                            <li className="d-inline-block"><img src={pixLogo} alt="Pix" style={{ width: '40px', height: 'auto', marginBottom: '5px', paddingRight: '2px' }} /></li>
                        </ul>
                    </div>
                </div>

                <div className="row mt-5"> {/* Adicionando margem superior */}
                    <div className="col-12 text-center">
                        <p>@Desenvolvido por IanMarinho</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
