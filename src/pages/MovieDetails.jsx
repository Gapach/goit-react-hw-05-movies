import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation} from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { fetchMovieById } from '../api';
import MovieCard from '../components/MovieCard/MovieCard';
import { Button, Container, StyledLink } from './MovieDelails.styled';
import { Loader } from '../components/Loader/Loader';

const MovieDelails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
    <main>
      <Container>
        <StyledLink to={location?.state?.from ?? '/'} width='100px'>
          <Button type="button">
            <BsArrowLeftShort
              style={{ width: '25px', height: '25px' }}
            />
            Go back
          </Button>
        </StyledLink>
        <MovieCard movie={selectedMovie} />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDelails;
