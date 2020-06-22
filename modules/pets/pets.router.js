const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');

const router = express.Router();

router.get('/', (req, res) => {
  const pets = Pets.get();
    
  if (!pets) {
    return res.status(404).json({
      error: { message: 'There Are No Pets!' }
    });
  }
  return res.json(pets);
});

router.delete('/', json, (req, res) => {
  const {type} = req.params;
  Pets.dequeue(type);

  return res.status(204).end();
});

module.exports = router;
