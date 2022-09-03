class UserInfo {

    constructor(data) {
        this._userName = data.name;
        this._userDescription = data.description;
    }

    getUserInfo() {
        const userInfo = {
            name: this._userName.textContent,
            description: this._userDescription.textContent,
        }
        return(userInfo)
    }

    setUserInfo(formData) {
        this._userName.textContent = formData.name;
        this._userDescription.textContent = formData.description;
    }
}

export default UserInfo;