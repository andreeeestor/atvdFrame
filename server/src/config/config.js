import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// isso aq so pra testar a conexao dps
try {
    await sequelize.authenticate()
    console.log("Conectou certin")
} catch(erro) {
    console.error("Não conectou essa bosta", erro)
}