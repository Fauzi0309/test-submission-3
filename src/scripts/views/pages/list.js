/* eslint-disable no-undef */
import RestaurantsSource from '../../data/restaurants-source';
import {
    createRestaurantsItemTemplate,
} from '../templates/template-creator';

const ListRestaurants = {
    async render() {
      return `
      <section class="content">
      <div class="latest">
          <h1 tabindex="0">Pilihan Restaurant yang tersedia</h1>
          <div class="list" id="explore-restaurant"></div>
      </div>
  </section>
      `;
    },

    async afterRender() {
        const restaurants = await RestaurantsSource.listResto();
        const restaurantsContainer = document.querySelector('#explore-restaurant');

        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantsItemTemplate(restaurant);
        });
    },
  };

  export default ListRestaurants;