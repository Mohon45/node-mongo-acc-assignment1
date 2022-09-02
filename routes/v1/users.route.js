const express = require("express");
const usersControllers = require("../../controllers/users.controller");

const router = express.Router();

router
  .route("/random")
  /**
   * @api {get} /user/random
   * @apiDescription Get the random user
   * @apiPermission admin
   *
   * @apiSuccess {Object[]} random one user
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(usersControllers.getRandomUser);

router
  .route("/all")
  /**
   * @api {get} /user/all All tools
   * @apiDescription Get all the users
   * @apiPermission admin
   *
   * @apiParam  {Number{1-10}}      [limit= maximum10 and minimum 1]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(usersControllers.getAllUsers);

router
  .route("/save")
  /**
   * @api {post} /user/save save a user
   * @apiDescription Post a Single User
   * @apiPermission admin
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .post(usersControllers.saveATool);

router
  .route("/update/:id")
  /**
   * @api {patch} /user/update/{id} Update a user
   * @apiDescription Update a Single User
   * @apiPermission admin
   *
   * @apiQuary {id}
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .patch(usersControllers.updateUser);

router
  .route("/bulk-update/:id/:id/:id/:id/:id")
  /**
   * @api {patch} /user/update/{id} Update a user
   * @apiDescription Update a Single User
   * @apiPermission admin
   *
   * @apiQuary {id}
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .patch(usersControllers.updateMultipleUser);

router
  .route("/delete/:id")
  /**
   * @api {delete} /user/{id} Delete a user
   * @apiDescription Delete a Single User
   * @apiPermission admin
   *
   * @apiQuary {id}
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .delete(usersControllers.deleteUser);

module.exports = router;
