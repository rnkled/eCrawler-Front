import React from 'react';
import { Container, Row, Column, Image, Title, Text, ImageContainer } from './styles';

function Noticia({ noticia }) {
    return <Container>
        <a href={noticia.link}>
            <Row>
                <ImageContainer>
                    <Image src={noticia.imagem} />
                </ImageContainer>
                <Column>
                    <Title>{noticia.titulo}</Title>
                    {noticia.descricao && <Text>{noticia.descricao}</Text>}
                </Column>
            </Row>
        </a>
    </Container>;
}

export default Noticia;