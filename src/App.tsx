import { Button, Container, Footer, Title } from "./styles";
import { useEffect, useState } from "react";

import { Card } from "./components/Card";
import { api } from "./services/api";
import logo from "./assets/logo.svg";

interface Movies {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export function App() {
  const [page, setPage] = useState(Math.floor(Math.random() * (1 + 500) + 1));
  const [movies, setMovies] = useState<Movies[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movies>();
  
  useEffect(() => {
    api.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR&page=${page}`
    ).then((response) => {
      setMovies(response.data.results);
   })
   console.log('sim')
  }, [selectedMovie]);

  function selectedMovies() {
    const selected = Math.floor(Math.random() * movies.length);
    movies.map((movie, index) => {
      if(selected === index) {
        setSelectedMovie(movie);
      }
    })
    
    return setPage(Math.floor(Math.random() * (1 + 500) + 1));
  }

  return (
    <Container>
      <Title>
        <img src={logo} alt="logo" />
        <h1>Não sabe o que assistir?</h1>
      </Title>
      
      {selectedMovie && 
        <Card 
          title={selectedMovie?.title}
          overview={selectedMovie?.overview}
          imageUrl={selectedMovie?.poster_path}
        />
      }
      
      <Button onClick={selectedMovies}>
        <img src={logo} alt="icone no botão" />
        Encontrar filme
      </Button>
      <Footer>
        <p>
          Clique em "Encontrar filme" que traremos informações <br /> de algum filme para
          você assitir hoje.
        </p>
      </Footer>
    </Container>
  );
}
