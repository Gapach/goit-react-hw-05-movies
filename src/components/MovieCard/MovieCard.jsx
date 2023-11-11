import { useLocation } from 'react-router-dom';
import {
  Img,
  List,
  ListItem,
  MoreInfoHeader,
  MoreInfoWrapper,
  MovieCardContainer,
  MovieInfo,
  MovieInfoText,
  MovieInfoTextBold,
  MovieName,
  StyledLink,
} from './MovieCard.styled';
import { Loader } from '../Loader/Loader';

const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } =
    movie;
  const location = useLocation();
  const releaseDate = new Date(release_date);

  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  if (!title) {
    return <Loader />;
  }

  return (
    <>
      <MovieCardContainer>
        <Img src={posterUrl} alt={`${title} poster`} />

        <MovieInfo>
          <MovieName>
            {title ?? 'Unknown'} ({releaseYear})
          </MovieName>
          <MovieInfoText>User Score: {userScore}</MovieInfoText>
          <MovieInfoText>
            <MovieInfoTextBold>Overview:</MovieInfoTextBold> {overview}
          </MovieInfoText>

          {genres && genres.length > 0 && (
            <MovieInfoText>
              <MovieInfoTextBold>Genres:</MovieInfoTextBold>
              {genres.map(genre => genre.name).join(', ')}
            </MovieInfoText>
          )}
        </MovieInfo>
      </MovieCardContainer>

      <MoreInfoWrapper>
        <MoreInfoHeader>Additional information</MoreInfoHeader>

        <List>
          <ListItem>
            <StyledLink
              to="cast"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Cast
            </StyledLink>
          </ListItem>

          <ListItem>
            <StyledLink
              to="reviews"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Reviews
            </StyledLink>
          </ListItem>
        </List>
      </MoreInfoWrapper>
    </>
  );
};

export default MovieCard;
