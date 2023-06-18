import { withStyles } from '@mui/styles';
import { compose } from 'recompose';
import { graphql } from '@apollo/client/react/hoc';

import { directorsQuery } from './queries';

import { styles } from './styles';

export default compose(withStyles(styles), graphql(directorsQuery));
