var drone = require('../models/drone');
/*// List of all drones
exports.drone_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Drone list');
};
*/

// List of all drones
exports.drone_list = async function(req, res) {
    try{
        thedrones = await drone.find();
        res.send(thedrones);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    } 
};   


// for a specific drone.
exports.drone_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Drone detail: ' + req.params.id);
};
// Handle drone create on POST.
exports.drone_create_post = async function(req, res) {
    console.log(req.body)
    let document = new drone();
    // We are looking for a body, since POST does not have query parameters.
 // Even though bodies can be in many different formats, we will be picky
 // and require that it be a json object
 // {"drone_type":"goat", "cost":12, "size":"large"}
 document.type = req.body.type;
 document.cost = req.body.cost;
 document.use = req.body.use;
 try{
 let results = await document.save();
 res.send(results);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 }
};
// Handle drone delete form on DELETE.
exports.drone_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: drone delete DELETE ' + req.params.id);
};
// Handle drone update form on PUT.
exports.drone_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: drone update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.drone_view_all_Page = async function(req, res) {
    try{
    thedrones = await drone.find();
    res.render('drone', { title: 'Drone Search Results', results: thedrones });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };