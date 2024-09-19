import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    await sequelize.authenticate()
    console.log("Conectou certin")
} catch(erro) {
    console.error("Não conectou essa bosta", erro)
}