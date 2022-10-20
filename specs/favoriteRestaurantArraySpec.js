/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

let favoriteResto = [];

const FavoriteRestaurantArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteResto.find((Resto) => Resto.id == id);
  },

  getAllResto() {
    return favoriteResto;
  },

  putResto(Resto) {
    if (!Resto.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurant
    if (this.getResto(Resto.id)) {
      return;
    }

    favoriteResto.push(Resto);
  },

  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteResto = favoriteResto.filter((Resto) => Resto.id != id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteResto = []);

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});