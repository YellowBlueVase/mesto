class UserInfo {

    constructor({name, description}) {
        this._name = name;
        this._description = description
    }

    getUserInfo() {
        const user = [{
            name: this._name.textContent, 
            description: this._description.textContent
        }];
        return user;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._description.textContent = data.description;
    }
}

export default UserInfo;