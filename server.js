const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/playlist_hw_db');


const start = async() => {
    try{
        await sequelize.sync({force: true});
        const red = Song.create('Red');
        const views = Song.create('views');
        const dawnFm = Song.create('Dawn FM');

    }
    catch(ex){
        console.log(ex);    
    }
};

start();