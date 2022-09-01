class Popup {

    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
     }
    
    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);  
    }

    close() {
        console.log('Close сработала', true)
        console.log(this._popupSelector)
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
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