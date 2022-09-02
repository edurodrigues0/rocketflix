import styled from "styled-components";

export const Container = styled.div`
  max-width: 638px;
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
  
  img {
    width: 10.5rem;
    height: 15rem;
    margin-right: 2rem;
  }

  @media (max-width: 420px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 1.25rem 0;
  }
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h2 {
    font-size: 1.25rem;
  }

  p {
    text-align: left;
  }

  @media(max-width: 420px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      margin-top: 20px;
    }
    
    p {
      margin-top: 20px;
      text-align: center;
    }
  }
`