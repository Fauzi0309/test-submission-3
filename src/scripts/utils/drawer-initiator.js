const DrawerInitiator = {
    Init() {
        this._menu.addEventListener('click', (event) => {
            this._drawer.classList.toggle('open');
            event.stopPropagation();
        });
        this._main.addEventListener('click', () => {
            this._drawer.classList.remove('open');
        });
    },
  };

  export default DrawerInitiator;