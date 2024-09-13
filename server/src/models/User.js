import { DataTypes } from "sequelize"
import { sequelize } from "../config/config"

// esse "User" indica o nome da tabela e as {} e os atributos dessa tabela
const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})