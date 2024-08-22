import React from 'react';
import styled from 'styled-components';

// Componente estilizado para a imagem
const StyledImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
`;

function Image({ src, alt }) {
    return  (               
        <img src="p1.png" alt="Imagem" />
    );

}

export default Image;