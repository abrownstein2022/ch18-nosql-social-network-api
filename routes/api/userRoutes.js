const router = require('express').Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
} = require('../../controllers/userController.js');

// api/users/

router.route('/users')
  .get(getUsers)
  .post(createUser);

router.route('/users/:user_id')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser)

router.route('/users/:user_id/friends/:friend_id')
  .post(addFriend)
  .delete(removeFriend)




module.exports = router;
