const Track = require('../models/track.js');
const express = require('express');
const router = express.Router();

//http://localhost:3000/tracks
// CREATE - POST - /tracks
router.post('/', async (req, res) => {
    try {
      const createdTrack = await Track.create(req.body);
      res.status(201).json(createdTrack);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


// READ ALL tracks - GET -  /tracks
router.get('/', async (req, res) => {
    try {
      const foundTrack = await Track.find();
      res.status(200).json(foundTrack);
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  });
//http://localhost:3000/tracks/673092b08d4582812894171a
// READ ONE Track - GET - /tracks/:tracksId
router.get('/:tracksId', async (req, res) => {
    try {
      const foundTrack = await Track.findById(req.params.tracksId);
      if (!foundTrack) {
        res.status(404);
        throw new Error('Track not found.');
      }
      res.status(200).json(foundTrack);
    } catch (error) {
      if (res.statusCode === 404) {
        res.json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  });
  http://localhost:3000/tracks/673092b08d4582812894171a
 // UPDATE - PUT - /tracks/:tracksId
 router.put('/:tracksId', async (req, res) => {
    try {
      const updatedTrack = await Track.findByIdAndUpdate(req.params.tracksId, req.body, {
          new: true
      })
      if (!updatedTrack) {
          res.status(404)
          throw new Error('Track not found')
      }
      res.status(200).json(updatedTrack)
    } catch (error) {
      if (res.statusCode === 404) {
          res.json({ error: error.message })
      }
      res.status(500).json({ error: error.message })
    }
  })  

 // http://localhost:3000/tracks/67308cfc6664848a2e74e73f
 // DELETE - DELETE - /tracks/:tracksId
router.delete('/:tracksId', async (req, res) => {
    try {
      const deletedTrack = await Track.findByIdAndDelete(req.params.tracksId)
      if (!deletedTrack) {
        res.status(404)
        throw new Error('Track not found.')
      }
      res.status(200).json(deletedTrack)
    } catch (error) {
      if (res.statusCode === 404) {
        res.json({ error: error.message })
      }
      res.status(500).json({ error: error.message })
    }
  }) 
 


module.exports = router;
