const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController.js');

// api/thoughts/
router.route('/')
  .get(getThoughts)
  .post(createThought);

router.route('/:thought_id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)


//! /api/thoughts/:thought_id/reactions
// this is a builder function that returns a self reference for chaining
router.route('/:thought_id/reactions')
  .post(createReaction)
  .delete(deleteReaction);


module.exports = router;
