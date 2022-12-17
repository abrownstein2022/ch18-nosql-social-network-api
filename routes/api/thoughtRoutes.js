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
router.route('/thoughts')
  .get(getThoughts)
  .post(createThought);

router.route('/thoughts/:thought_id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)


// /api/thoughts/:id/reactions
// this is a builder function that returns a self reference for chaining
router.route('/thoughts/:thought_id/reactions')
  .post(createReaction)
  .delete(deleteReaction);


module.exports = router;
