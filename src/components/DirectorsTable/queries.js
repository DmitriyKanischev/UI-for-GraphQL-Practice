import {gql} from "@apollo/client"

export const directorsQuery = gql`
    query moviesQuery{
        directors{
            id
            name
            age
            movies{
                id
                name
            }
        }
    }
`