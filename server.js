const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/playlist_hw_db');
const Song = sequelize.define('song', {
    name: {
        type: Sequelize.STRING
    }
})
const express = require('express');
const app = express();
const path = require('path');
app.get('/api/songs',async (req,res,next) =>{
    try{
        res.send(await Song.findAll());
    }
    catch(ex){
        next(ex);
    }
});

//phase 3:add route
app.get('/', (req,res) => res.sendFile(path.join(__dirname,'index.html')));
const start = async() => {
    try{
        await sequelize.sync({force: true});
        await Promise.all([
            Song.create({name: 'Red'}),
            Song.create({name: 'Views'}),
            Song.create({name: 'Out of Time'}),
        ])
        // const red = Song.create('Red');
        // const views = Song.create('views');
        // const dawnFm = Song.create('Dawn FM');
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`listening on port ${port}`));
        
        

    }
    catch(ex){
        console.log(ex);    
    }
};

start();