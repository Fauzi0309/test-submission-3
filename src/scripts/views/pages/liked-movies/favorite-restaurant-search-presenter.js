class FavoriteRestaurantSearchPresenter {
    constructor(favoriteRestaurant) {
        this._listenToSearchRequestByUser();
        this._favoriteRestaurant = favoriteRestaurant;
      }

      _listenToSearchRequestByUser() {
        this._queryElement = document.getElementById('query');
        this._queryElement.addEventListener('change', (event) => {
          this._latestQuery = event.target.value;
          this._favoriteRestaurant.searchResto(this._latestQuery);
        });
      }

      get latestQuery() {
        return this._latestQuery;
      }
    }

  export default FavoriteRestaurantSearchPresenter;