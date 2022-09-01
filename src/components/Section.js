class Section {

    constructor({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    renderItems() {
        console.log('renderItems Section: ', this._items)
        this._items.forEach(item => {
            this._renderer(item);
        })
    }

    addItem(element) {
       this._container.prepend(element); 
    }
}

export default Section;