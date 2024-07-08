import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Carrosel.module.css'; // Certifique-se de ter criado esse arquivo

const CarouselComponent = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isMobile) {
        return null;
    }

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000" data-bs-pause="hover" style={{ marginBottom: '50px' }}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.hightorque.com.br/wp-content/uploads/2019/02/adg_high_torque_banner4.jpg" className="d-block w-100" alt="Imagem 1" />
                </div>
                <div className="carousel-item">
                    <img src="https://www.hightorque.com.br/wp-content/uploads/2019/02/adg_high_torque_banner4.jpg" className="d-block w-100" alt="Imagem 2" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default CarouselComponent;
