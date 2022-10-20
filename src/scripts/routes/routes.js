/* eslint-disable no-unused-vars */
import ListRestaurants from '../views/pages/list';
import FavoriteRestaurants from '../views/pages/favorite';
import DetailRestaurants from '../views/pages/detail';

const routes = {
    '/': ListRestaurants, // default page
    '/list': ListRestaurants,
    '/favorite': FavoriteRestaurants,
    '/detail/:id': DetailRestaurants,

};
  export default routes;