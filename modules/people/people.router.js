const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  const people = People.get();
    
  if (!people) {
    return res.status(404).json({
      error: { message: 'There Are No Pets!' }
    });
  }
  res.json(people);
 
});

router.post('/', json, (req, res) => {
  const {name} = req.body;
  const newPerson = name;
  for (const [key, value] of Object.entries(newPerson))
  // eslint-disable-next-line eqeqeq
    if (value == null) {
      return res.status(400).json({error: `Missing '${key}' in request body`});
    }
  const people = People.enqueue(newPerson);
  res.status(201).json(people);

});

router.delete('/', json, (req, res) => {
  People.dequeue();

  return res.status(204).end();
});

module.exports = router;

// hey delete me when you are done
