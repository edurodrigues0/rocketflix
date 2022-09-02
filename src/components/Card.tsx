import { Container, Information } from './styles';

interface CardProps {
  id?: string;
  title?: string;
  overview?: string;
  imageUrl?: string;
}

const codeImage = 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'

export function Card({ title, overview, imageUrl }: CardProps) {
  const image = imageUrl === 'estudar' ? codeImage : `https://image.tmdb.org/t/p/w500${imageUrl}`;
  
  return (
    <Container>
      <img src={image} />
      <Information>
        <h2>{title}</h2>
        <p>
          {overview}
        </p>
      </Information>
    </Container>
  )
}