import { compose } from 'recompose';
import { graphql } from '@apollo/client/react/hoc';

import { deleteMovieMutation } from './mutations';
import { moviesQuery } from '../MoviesTable/queries';  //For refetch movies data


const withGraphqlDelete = graphql(deleteMovieMutation, {
    props: ({mutate}) => ({
        deleteMovie: id => mutate({
            variables: id,
            refetchQueries: [{query: moviesQuery}]
        })
    })
})

export default compose(withGraphqlDelete);
