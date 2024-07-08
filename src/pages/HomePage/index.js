import React from 'react';
import Header from '../../componentes/Header';
import CarouselComponent from '../../componentes/Carrosel'; // Corrigido o nome do componente CarouselComponent
import QuemSomos from '../../componentes/QuemSomos';
import GarantiasComponent from '../../componentes/Garantia';
import ServiceList from '../../componentes/ServicesList'; // Corrigido o nome do componente ServiceList
import Footer from '../../componentes/Footer';
import Localizacao from '../../componentes/Localizacao';

const HomePage = () => {

  // Estilo CSS para o body da página
  document.body.style.backgroundColor = '#212529'; // Cor mais escura que o dark do Bootstrap 

  return (
    <div>
      <Header />

      <CarouselComponent />

      <QuemSomos />

      <ServiceList />

      <GarantiasComponent />

      ReactDOM.render(<Localizacao
        endereco="Setor Caraja"
        cidade="Araguaina"
        estado="To" cep="77809-130" />, document.getElementById('root'));

      <Footer />
    </div>
  );
};

export default HomePage;
