
const model = {
    users: {
        admin: {
            id: "admin",
            name: "Administrador",
            email: "admin@admin.com",
            password: "123"
        },
        admin: {
            id: "admin",
            name: "Administrador",
            email: "admin@admin.com",
            password: "123"
        }
    },

    init() {
        let data = localStorage.getItem("usersAula")
        if(data == null) {
            let objStr = JSON.stringify(model.users)
            localStorage.setItem("usersAula",objStr)
        } else {
            model.users = JSON.parse(data)
        }
        console.log("model.users",model.users);
    },

    checkLogin(email,password) {
        for(let key in model.users) {
            let user = model.users[key]
            if(user.email == email && user.password == password) {
                return user
            }
        }
        return null
    }
}

export default model