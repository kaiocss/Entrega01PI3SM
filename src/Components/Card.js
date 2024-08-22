import React from 'react';
import Image from './Image';
import styled from 'styled-components';


const StyledCards = styled.div`
font-size: 28px

`


function Card() {

    return (
        <>
            <StyledCards> Produto 1 <br />
                <a>Descrição do item 1</a>
<Image/>
            </StyledCards>

            <br />
            <br />

            <StyledCards> Produto 1 <br />
                <a>Descrição do item 1</a>
                <div> <img src="p1.png" alt="Imagem" /></div>
            </StyledCards>

            <br />
            <br />

            <StyledCards> Produto 1 <br />
                <a>Descrição do item 1</a>
                <div> <img src="p1.png" alt="Imagem" /></div>
            </StyledCards>

            <br />
            <br />

            <StyledCards> Produto 1 <br />
                <a>Descrição do item 1</a>
                <div> <img src="p1.png" alt="Imagem" /></div>
            </StyledCards>

            <br />
            <br />

            <StyledCards> Produto 1 <br />
                <a>Descrição do item 1</a>
                <div> <img src="p1.png" alt="Imagem" /></div>
            </StyledCards>

            <br />
            <br />

            <StyledCards> Produto 1 <br />
                <a>Descrição do item 1</a>
                <div> <img src="p1.png" alt="Imagem" /></div>
            </StyledCards>

            <br />
            <br />


        </>
    );
}

export default Card;

