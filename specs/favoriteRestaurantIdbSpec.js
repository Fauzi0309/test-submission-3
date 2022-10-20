/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestaurantIDB from '../src/scripts/data/favorite-restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIDB.getAllResto()).forEach(async (Resto) => {
      await FavoriteRestaurantIDB.deleteResto(Resto.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIDB);
});