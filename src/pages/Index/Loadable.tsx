import { lazyLoad } from 'utils/loadable';

export const IndexPage = lazyLoad(
  () => import('./index'),
  module => module.IndexPage,
);
