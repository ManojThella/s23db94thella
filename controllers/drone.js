var drone = require('../models/drone');
// List of all drones
exports.drone_list = async function(req, res) {
 //res.send('NOT IMPLEMENTED: Drone list');
 {
    try{
        theDrone = await drone.find();
        res.send(theDrone);
    }
    catch(err){
        res.status(500);
        res.send(`{"error":${err}}`);
    }
 };
};
// for a specific drone.
exports.drone_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Drone detail: ' + req.params.id);
};
// Handle drone create on POST.
exports.drone_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Drone();
 res.send('NOT IMPLEMENTED: drone create POST');
};
// Handle drone delete form on DELETE.
exports.drone_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: drone delete DELETE ' + req.params.id);
};
// Handle drone update form on PUT.
exports.drone_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: drone update PUT' + req.params.id);
};