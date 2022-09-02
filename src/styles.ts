import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7.68rem;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    margin-top: 10px;
  }
`

export const Button = styled.button`
  padding: 11px 17px 10px 13px;
  border: 2px solid: #1a1a1a;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.825rem;
  margin: 30px 0 26px 0;
  transition: opacity 0.1s ease;

  img {
    height: 1.5rem;
    margin-right: 1rem;
  }

  &:hover {
    opacity: 0.8;
  }
`

export const Footer = styled.footer`
  p {
    text-align: center;
  }
`