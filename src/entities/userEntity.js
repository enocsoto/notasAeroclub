
class userEnity {

    constructor(id, name, lastname, address, email, password){
        this.id = id ? id : null;
        this.name = name ? name : null;
        this.lastname = lastname ? lastname : null;
        this.address = address ? address : null;
        this.email = email ? email : null;
        this.password = password ? password : null;
    }
}
export default userEnity;