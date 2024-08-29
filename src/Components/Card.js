import React from 'react';
import Image from './Image';
import styled from 'styled-components';


const StyledCards = styled.div`
font-size: 28px

`
const ProductContainer = styled.div`
    display: flex;
    flex-wrap: wrap; /* Permite que os itens quebrem para a próxima linha se não couberem */
    gap: 35px; /* Espaço entre os itens */
`;


function Card() {

    return (
        <>
        <ProductContainer>
            <StyledCards> Desinfetante Urca <br />
                <Image src="p1.png" alt="Imagem" />
                <br />
                <a>Descrição do item 1</a>
            </StyledCards>
          

            <br />
            <br />

            <StyledCards> Produto 1 <br />
                <Image src="p2.webp" alt="Imagem2" />
                <br />
                <a>Descrição do item 1</a>
            </StyledCards>

            <br />
            <br /> <StyledCards> Produto 1 <br />
                <Image src="p3.jpeg" alt="Imagem3" />
                <br />
                <a>Descrição do item 1</a>
            </StyledCards>

            <br />
            <br /> <StyledCards> Produto 1 <br />
                <Image src="p4.jpeg" alt="Imagem4" />
                <br />
                <a>Descrição do item 1</a>
            </StyledCards>

            <br />
            <br /> <StyledCards> Produto 1 <br />
                <Image src="p5.jpeg" alt="Imagem5" />
                <br />
                <a>Descrição do item 1</a>
            </StyledCards>

            <br />
            <br /> <StyledCards> Produto 1 <br />
                <Image src="p6.png" alt="Imagem6" />
                <br />
                <a>Descrição do item 1</a>
            </StyledCards>

            <br />
            <br /> <StyledCards> Produto 1 <br />
                <Image src="p7.jpg" alt="Imagem7" />
                <br />
                <a>Descrição do item 1</a>
            </StyledCards>

            <br />
            <br /> <StyledCards> Produto 1 <br />
                <Image src="p8.jpeg" alt="Imagem8" />
                <br />
                <a>Descrição do item 1</a>
            </StyledCards>

            <br />
            <br /> <StyledCards> Produto 1 <br />
                <Image src="p9.jpeg" alt="Imagem9" />
                <br />
                <a>Descrição do item 1</a>
            </StyledCards>

            <br />
            <br /> <StyledCards> Produto 1 <br />
                <Image src="p10.webp" alt="Imagem10" />
                <br />
                <a>Descrição do item 1</a>
            </StyledCards>
        

            <br />
            <br />

            </ProductContainer>

        </>
    );
}

export default Card;