const conn = require("../config/db")
const Sequelize = require("sequelize")

const LoginUsers = conn.define('LoginUsers', {
    loginUser: {
        type: Sequelize.STRING,
        allowNull: false
    },
    emailUser: {
        type: Sequelize.STRING,
        allowNull: false
    },
    passwordUser: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// conn.sync({force:true})

module.exports = LoginUsers