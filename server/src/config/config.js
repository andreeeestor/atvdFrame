import { Sequelize } from "sequelize"

// aq só muda esse 'teste' para o nome do banco que você criou no MySQL Workbench
export const sequelize = new Sequelize('teste', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    await sequelize.authenticate()
    console.log("Conectado!")
} catch(erro) {
    console.error("Não conectou essa bosta", erro)
}