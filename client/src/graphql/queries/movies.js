import { gql } from '@apollo/client';


export const MOVIES = gql`
    query GetMovies($page: Int) {
        movies(page: $page) {
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
