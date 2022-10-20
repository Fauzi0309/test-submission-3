import FavoriteRestaurantIDB from '../../data/favorite-restaurant-idb';
import {
    createRestaurantsItemTemplate,
} from '../templates/template-creator';

const FavoriteRestaurants = {
    async render() {
      return `
      <section class="content">
      <div class="latest">
          <h1 tabindex="0">Pilihan Restaurant Favorite</h1>
          <div class="list" id="explore-restaurant"></div>
      </div>
  </section>
      `;
    },

    async afterRender() {
      const restaurants = await FavoriteRestaurantIDB.getAllResto();
        const restaurantsContainer = document.querySelector('#explore-restaurant');

        if (restaurants.length === 0) {
          restaurantsContainer.innerHTML = `
            Tidak ada restaurant untuk ditampilkan
          `;
        }
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantsItemTemplate(restaurant);
        });
    },
  };

  export default FavoriteRestaurants;