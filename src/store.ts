import {useProxy} from '@tylerlong/use-proxy';

import {Store} from './models';

const store = useProxy(new Store());

export default store;
