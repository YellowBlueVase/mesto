class UserInfo {

    constructor(data) {
        this._userName = data.name;
        this._userDescription = data.about;
        this._avatarImage = data.avatar;
        this._id = data._id
    }

    getUserInfo() {
        const userInfo = {
            name: this._userName.textContent,
            about: this._userDescription.textContent,
            avatar: this._avatarImage.src,
            _id: this._id
        }
        return userInfo
    }

    setUserInfo(formData) {
        this._userName.textContent = formData.name;
        this._userDescription.textContent = formData.about;
        if (formData.avatar) {
            this._avatarImage.src = formData.avatar;
        }
        if (formData._id) {
            this._id = formData._id;
        }
    }
}

export default UserInfo;