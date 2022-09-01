class UserInfo {

    constructor({firstText, secondText, firstInput, secondInput}) {
        this._firstText = firstText;
        this._secondText = secondText;
        this._firstInput = firstInput;
        this._secondInput = secondInput;
    }

    getUserInfo() {
        console.log('getUserInfo FIRST TEXT: ', this._firstText.textContent)
        console.log('getUserInfo SECOND TEXT: ', this._secondText)
        console.log('getUserInfo FIRST INPUT: ', this._firstInput)
        console.log('getUserInfo SECOND INPUT: ', this._secondInput)
        this._firstInput.value = this._firstText.textContent;
        this._secondInput.value = this._secondText.textContent
    }

    setUserInfo(formData) {
        console.log('setUserInfo FIRST TEXT: ', this._firstText)
        console.log('setUserInfo SECOND TEXT: ', this._secondText)
        console.log('setUserInfo FIRST INPUT: ', this._firstInput)
        console.log('setUserInfo SECOND INPUT: ', this._secondInput)
        this._firstText.textContent = formData['person-name'];
        this._secondText.textContent = formData['job-description'];
    }
}

export default UserInfo;