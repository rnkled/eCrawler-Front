import React from 'react';
import { Container, Row, Column, Image, Title, Text, ImageContainer } from './styles';

function Noticia({ noticia }) {
    return <Container>

        <Row>

            <ImageContainer>
                <a href={noticia.link}>
                    <Image src={noticia.imagem} />
                </a>
            </ImageContainer>

            <Column>
                <a href={noticia.link}>
                    <Title>{noticia.titulo}</Title>
                </a>

            </Column>
        </Row>

    </Container>;
}

export default Noticia;