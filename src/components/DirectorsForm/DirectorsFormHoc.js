import { withStyles } from '@mui/styles';
import { compose } from 'recompose';
import { graphql } from '@apollo/client/react/hoc';

import { addDirectorMutation, updateDirectorMutation } from './mutations';
import {directorsQuery} from '../DirectorsTable/queries'

import { styles } from './styles';

const withGraphqlAdd = graphql(addDirectorMutation, {
    props: ({mutate}) => ({
        addDirector: director => mutate({
            variables: director,
            refetchQueries: [{query: directorsQuery}]           //For reload data
        })
    })
})
const withGraphqlUpdate = graphql(updateDirectorMutation, {
    props: ({mutate}) => ({
        updateDirector: director => mutate({
            variables: director,
            refetchQueries: [{query: directorsQuery}]           //For reload data
        })
    })
})

export default compose(withStyles(styles), withGraphqlAdd, withGraphqlUpdate);
