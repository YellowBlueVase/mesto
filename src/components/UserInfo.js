class UserInfo {

    constructor(data) {
        this._userName = data.name;
        this._userDescription = data.about;
        this._avatarImage = data.avatar;
    }

    getUserInfo() {
        const userInfo = {
            name: this._userName.textContent,
            about: this._userDescription.textContent,
        }
        return userInfo
    }

    setUserInfo(formData) {
        this._userName.textContent = formData.name;
        this._userDescription.textContent = formData.about;
        if (formData.avatar) {
            this._avatarImage.src = formData.avatar;
        }
    }
}

export default UserInfo;