import app from './app.js'
import {sequelize} from './database/database.js'

const PORT = process.env.PORT || 3000;

//import './models/Bill.js'

async function main() {
    try {
        await sequelize.sync({force: false});
        console.log('Connection has been established sucessfully.');
        app.set("token", process.env.TOKEN || "recipeT0k3n");
        app.listen(PORT, () => console.log(`Escuchando en puerto", ${PORT}`));
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
}

main();