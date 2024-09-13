import { sequelize } from "./config/config";
import { User } from "./models/User"

sequelize.sync({force: true}).then(() => {
    console.log("Banco está sincronizado.")
}).catch((error) => {
    console.error(`Deu esse erro ao sincronizar: ${error}`)
})