import {DataTypes} from "sequelize";
import db from "../config/Database.js";


const UserModel = db.define("user", {
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false

    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true,
})

export default UserModel