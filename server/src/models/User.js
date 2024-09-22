import { DataTypes } from "sequelize"
import { sequelize } from "../config/config.js"

// esse "User" indica o nome da tabela e as {} e os atributos dessa tabela
export const User = sequelize.define("Usuario", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,  
        allowNull: false
    }
}, {
    timestamps: false           
});



