import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, StreetViewPanorama } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: -7.1907,
    lng: -48.2083,
};

const Localizacao = ({ endereco, cidade, estado, cep }) => {
    const [error, setError] = useState(null);

    useEffect(() => {
        // Verificação inicial ou qualquer inicialização necessária
    }, []);

    const openGoogleMaps = () => {
        const url = `https://www.google.com/maps/search/?api=1&query=${endereco},${cidade},${estado},${cep}`;
        window.open(url, '_blank');
    };

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <LoadScript googleMapsApiKey="AIzaSyB5N5qkjCzU6qeuewYks0hypSeeDQ6mDWs">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
                onClick={openGoogleMaps} // Abrir Google Maps ao clicar no mapa
            >
                <StreetViewPanorama
                    position={center}
                    visible={true}
                    options={{
                        pov: { heading: 0, pitch: 0 },
                        enableCloseButton: true,
                        showRoadLabels: true,
                    }}
                />
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Localizacao;
