import { gql } from '@apollo/client';

export const MOVIES = gql`
    query GetMovies($filter: MoviesFilterInput) {
        movies(filter: $filter) {
            page
            totalPages
            totalResults
            results {
                id
                posterPath
                releaseDate
                title
            }
        }
    }
`;

export const MOVIES_BY_IDS = gql`
    query GetMoviesByIds($ids: [Int]) {
        moviesByIds(ids: $ids) {
            id
            posterPath
            releaseDate
            title
        }
    }
`;
