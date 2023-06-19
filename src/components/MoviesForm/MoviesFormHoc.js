import { withStyles } from '@mui/styles';
import { compose } from 'recompose';
import { graphql } from '@apollo/client/react/hoc';

import { addMovieMutation } from './mutations';
import { moviesQuery } from '../MoviesTable/queries';  //For refetch movies data
import { directorsQuery } from './queries';

import { styles } from './styles';

const withGraphqlAdd = graphql(addMovieMutation, {
    props: ({mutate}) => ({
        addMovie: movie => mutate({
            variables: movie,
            refetchQueries: [{query: moviesQuery}]
        })
    })
})

export default compose(withStyles(styles), withGraphqlAdd, graphql(directorsQuery));
