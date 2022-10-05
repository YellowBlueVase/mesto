class Section {

    constructor(renderer, containerSelector) {
        this._renderer = renderer;
        this._container = containerSelector;
    }

    renderItems(data, profile) {
        data.forEach(item => {
            this._renderer(item, profile);
        })
    }

    addItem(element) {
       this._container.prepend(element); 
    }

    addItems(elements) {
        this._container.append(elements); 
     }
}

export default Section;