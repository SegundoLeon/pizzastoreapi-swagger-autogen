import {DataTypes}  from 'sequelize'
import {sequelize} from '../database/database.js'


export const Bill = sequelize.define('bills', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false
    },
    subtotal: {
        type: DataTypes.DECIMAL
    },
    attendedby: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    },
    product: {
        type: DataTypes.STRING
    }
});