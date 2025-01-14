import styled from 'styled-components';

export const Container = styled.div`
  
    width: 100%;
    height: 180px;
    display: flex;
    background-color: #3333;
    padding: 0 5px;
    align-items: center;

    a{
        color: none;
        text-decoration: none;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    height: 170px;
    width: 100%;
    padding: 0px 6px;
    border-bottom: 1px solid #80808055;
`
export const Image = styled.img`
    width: 100%;
    border-radius: 3px;
`
export const ImageContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`


export const Title = styled.div`
    height: 30%;
    padding: 0px 5px;
    color: #ccc;
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`
export const Text = styled.div`
    height: 70%; 
    color: #ccca;
    padding: 10px 5px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
`
