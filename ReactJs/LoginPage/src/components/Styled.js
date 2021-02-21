import styled from 'styled-components';

// aqui escolhi usar Glassmorphism no CSS no CARD, por achar visualmente bonito.

export const Card = styled.div` 
  position: relative;
  width: 400px;
  height: 700px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  margin: auto;
  background-color: #F2F2F2;
  max-width: 1200px;
`

export const ImagemLogo = styled.img`
    margin: auto;
    width: 200px;
    height: 100px;
    object-fit: cover;
`


export const DivMain = styled.div`
    text-align: center;
    width: 100%;
    cursor: pointer;
`

export const ImagemOlho = styled.img`
    width: 50px;
    height: 50px;
`
