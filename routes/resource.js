var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var drone_controller = require('../controllers/drone');

/// API ROUTE ///

// GET resources base.
router.get('/', api_controller.api);

/// DRONE ROUTES ///

// POST request for creating a Drone.
router.post('/drone', drone_controller.drone_create_post); // drone

// DELETE request to delete Drone.
router.delete('/drone/:id', drone_controller.drone_delete);

// PUT request to update Drone.
router.put('/drone/:id', drone_controller.drone_update_put);

// GET request for one Drone.
router.get('/drone/:id', drone_controller.drone_detail);

// GET request for list of all Drone items.
router.get('/drone', drone_controller.drone_list);
module.exports = router;
