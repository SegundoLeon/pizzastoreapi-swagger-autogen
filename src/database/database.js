import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'd3qq2m9t6hlpt', 
    'jgormrmpjuisoj', 
    'f121c4bd04e214133f39cde1dc43a92a5fb5a4e9f5e3c4dc89db19cb800ee614', 
    {
        host: 'ec2-54-164-40-66.compute-1.amazonaws.com',
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);