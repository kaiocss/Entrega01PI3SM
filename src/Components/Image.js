import React from 'react';
import styled from 'styled-components';

// Componente estilizado para a imagem
const StyledImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    border-color: black;
`;

function Image({ src, alt }) {
    return <StyledImage src={src} alt={alt} />;
}

export default Image;