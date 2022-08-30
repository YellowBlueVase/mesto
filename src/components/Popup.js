class Popup {

    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
     }
    
    open() {
        this._popupSelector.classList.add('popup_opened');
        window.addEventListener('keydown', this._handleEscClose);  
    }

    close() {
        document.querySelector('.popup_opened').classList.remove('popup_opened');
        window.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close()
        }
    }

    setEventListeners() {    
        this._popupSelector.addEventListener('click', (evt) => {
            const target = evt.target;
            if (target.classList.contains('popup')) {
                this.close()}
            else if (evt.target.classList.contains('popup__close-button')) {
                this.close()}
        });
    }
}

export default Popup;