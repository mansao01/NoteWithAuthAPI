import {DataTypes} from "sequelize";
import db from "../config/Database.js";
import UserModel from "./UserModel.js";


const NoteModel = db.define("note", {
    title: {
        type: DataTypes.STRING,
        allowNull: false

    },
    description: {
        type: DataTypes.STRING,
        allowNull: false

    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false

    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false

    }
}, {
    freezeTableName: true
})
UserModel.hasMany(NoteModel)
NoteModel.belongsTo(UserModel)

export default NoteModel

