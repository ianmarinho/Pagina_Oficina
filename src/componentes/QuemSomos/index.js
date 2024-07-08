import React from 'react';
import styles from './QuemSomos.module.css'; // Importa o arquivo CSS com os estilos customizados
import { FaWrench, FaCar, FaTools } from 'react-icons/fa'; // Importa ícones do FontAwesome

const QuemSomos = () => {
    return (
        <div className="container">

            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="blog-post" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '', padding: '20px', marginBottom: '20px' }}>
                        <div className="d-flex justify-content-center">
                            <img src="https://www.hightorque.com.br/wp-content/uploads/2019/02/high_torque_brasilia_2-1099x625.jpg" alt="Descrição da imagem" className="img-fluid" style={{ borderRadius: '10px' }} />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                    <div className={`text-container ${styles.texto}`} style={{ padding: '20px' }}>
                        <h1 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}> Quem Somos ?</h1>
                        <p style={{ color: 'white', textAlign: 'justify', fontSize: '16px' }}>
                            Fundada por apaixonados por automóveis com um objetivo claro em mente: oferecer um serviço de qualidade superior com um toque pessoal. A Oficina Mecânica "Velocidade & Confiabilidade" nasceu da visão de preencher uma lacuna no mercado local, onde a confiança e a qualidade muitas vezes se perdiam no fluxo de serviços mecânicos genéricos.

                            Nossa fundadora, Carla Martins, após anos trabalhando na indústria automobilística e percebendo a necessidade de um serviço que combinasse conhecimento técnico especializado com um atendimento próximo ao cliente, decidiu montar uma oficina onde cada veículo é tratado com o mesmo cuidado e atenção que ela daria ao seu próprio carro.

                            Na Oficina Mecânica "RevisaCar", não se trata apenas de consertar veículos; é sobre construir relacionamentos duradouros com nossos clientes, entendendo suas necessidades individuais e garantindo que cada serviço realizado seja feito com integridade e profissionalismo. Desde a troca de óleo até reparos complexos, cada etapa é realizada com o compromisso de excelência que nos diferencia.

                        </p>
                    </div>
                </div>

                <div className={styles.fotos} style={{marginTop:'100px',marginBottom:'50px'}}>
                    <img src="https://centersystem.com.br/wp-content/uploads/2021/02/happy-mechanic-standing-by-car-1200x675.jpg" alt="Descrição da imagem 1" className={styles.imagem} />
                    <img src="https://www.revvi.com.br/wp-content/uploads/2021/07/Auto-center-x-oficina-mecanica-qual-e-a-diferenca-entre-eles.jpg" alt="Descrição da imagem 1" className={styles.imagem} />
                    <img src="https://media.istockphoto.com/id/1347150429/pt/foto/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.jpg?s=612x612&w=0&k=20&c=41g7boJaSdIX-3EQm6iSR3U801XqI27TRTLvpPL6bu4=" alt="Descrição da imagem 2" className={styles.imagem} />
                    <img src="https://static.ferramentaskennedy.com.br/storage/assets/conheca-os-5-melhores-equipamentos-para-oficina-mecanica638968dd071ffac046d49d1a2d130507.jpg" alt="Descrição da imagem 3" className={styles.imagem} />
                </div>
            </div>

        </div>
    );
};

export default QuemSomos;
