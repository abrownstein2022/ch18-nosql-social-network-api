const router = require('express').Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController.js');

//! api/users/

router.route('/')
  .get(getUsers)
  .post(createUser);

router.route('/:user_id')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser)

router.route('/:user_id/friends/:friend_id')
  .post(addFriend)
  .delete(removeFriend)

module.exports = router;
