/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-movies/favorite-restaurant-search-presenter';
import FavoriteRestaurantIDB from '../src/scripts/data/favorite-restaurant-idb';

describe('Searching restaurants', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div id="restaurant-search-container">
          <input id="query" type="text">
          <div class="restaurant-result-container">
            <ul class="restaurants">
            </ul>
          </div>
        </div>
      `;
    });

    it('should be able to capture the query typed by the user', () => {
        const presenter = new FavoriteRestaurantSearchPresenter();
        const queryElement = document.getElementById('query');
        queryElement.value = 'resto a';
        queryElement.dispatchEvent(new Event('change'));

        expect(presenter.latestQuery).toEqual('resto a');
    });

    fit('should ask the model to search for liked Restaurant', () => {
        spyOn(FavoriteRestaurantIDB, 'searchResto');
        const presenter = new FavoriteRestaurantSearchPresenter({ favoriteRestaurant: FavoriteRestaurantIDB });

        const queryElement = document.getElementById('query');
        queryElement.value = 'resto a';
        queryElement.dispatchEvent(new Event('change'));

        expect(FavoriteRestaurantIDB.searchResto)
        .toHaveBeenCalledWith('resto a');
      });
  });