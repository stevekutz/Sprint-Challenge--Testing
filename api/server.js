const express = require('express');

const server = express();

const Games = require('../games/gamesModel');

server.use(express.json());

// sanity check
server.get('/', (req,res) => {
    res.cookie('SPRINTcookie', 'cookieForTestingSprint' );

    res.status(200).json({message: `Sprint TESTING server sanity check !!! `})

});

// GET all games
  server.get('/games', async(req,res) => {

    try{
      const games = await Games.getAll()   
     // console.log(games);
      res.status(200).json(games);
    }
    catch (err){
      res.status(500).json(err);
    }
  })

server.get('/games/:id', async(req, res) => {
    const {id} = req.params;
    
    try{
      const game = await Games.findById(id);
     // console.log('server promise Game', game);
       
      if(game){
        res.status(200).json(game)
      } else {
        res.status(404).json({
          message: `${id} not found`
        })
      }
    }
    catch (err) {
      res.status(500).json({
        message: `ERROR getting Game id`
      });
    }
  })

  server.post('/games', async (req, res) => {
    try{
        if(req.body.title === '' || req.body.genre === '') {
            res.status(422).json({
                message: `Please add title & genre item`
            })
        } else {
            const gameItem = await Games.insert(req.body);
     //       console.log(' !!!!!  gameItem is ', gameItem);
            res.status(201).json({gameItem});
        }    
  }
  catch (err) {
      res.status(500).json({
        message: `ERROR`
      });
    }
})

module.exports = server;