const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/playlist_hw_db');

const start = async() => {
    try{
        await sequelize.sync({force: true});


    }
    catch(ex){
        console.log(ex);
    }
};

start();