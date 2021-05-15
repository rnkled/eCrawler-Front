import styled from 'styled-components';

export const Container = styled.div`
  
    width: 100%;
    height: 65px;
    display: flex;
    background-color: #3333;
    padding: 10 5px;
    align-items: center;

    
    border-bottom: 1px solid #80808055;
    border-top: 1px solid #80808055;

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
    width: 100%;
    padding: 0px 6px;
`
export const Image = styled.img`
    width: 90%;
    border-radius: 3px;
`
export const ImageContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
export const Title = styled.div`
    padding: 0px 5px;
    color: #ccc;
    font-size: 15px;
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
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 15px;
`
