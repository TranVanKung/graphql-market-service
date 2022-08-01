import _ from 'lodash';
import marketResolver from './market';

const rootResolver = _.merge(marketResolver);

export default rootResolver;
