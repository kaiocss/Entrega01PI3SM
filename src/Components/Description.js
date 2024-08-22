import React from 'react';
import styled  from 'styled-components';

const StyledDescription = styled.p`
    font-size: 1.2rem;
    text-align: center;
    margin: 10px 0;
    color: #555;


`

function Description() {
    return (
        <>

            <StyledDescription> "Explore nossa seleção exclusiva de produtos, escolhidos para atender às suas necessidades.  </StyledDescription>

        </>
    );
}

export default Description;
