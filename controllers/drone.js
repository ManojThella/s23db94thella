var drone = require('../models/drone');
/* List of all drones
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
exports.drone_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await drone.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
/*exports.drone_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: drone delete DELETE ' + req.params.id);
};*/
exports.drone_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await drone.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
   };
   
// Handle drone update form on PUT.
/*exports.drone_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: drone update PUT' + req.params.id);
};*/
exports.drone_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await drone.findById( req.params.id)
    // Do updates of properties
    if(req.body.type) toUpdate.type = req.body.type;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    if(req.body.use) toUpdate.use = req.body.use;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
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

   // Handle a show one view with id specified by query
exports.drone_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await drone.findById( req.query.id)
    res.render('dronedetail',
   { title: 'drone Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a drone.
// No body, no in path parameter, no query.
// Does not need to be async
exports.drone_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('dronecreate', { title: 'Drone Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a drone.
// query provides the id
exports.drone_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
        try{
            let result = await drone.findById(req.query.id)
            res.render('droneupdate', { title: 'Drone Update', toShow: result });
        }
        catch(err){
             res.status(500)
             res.send(`{'error': '${err}'}`);
        }
};

// Handle a delete one view with id from query
exports.drone_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
        try{
            result = await drone.findById(req.query.id)
            res.render('dronedelete', { title: 'Drone Delete', toShow: result });
        }
        catch(err){
            res.status(500)
            res.send(`{'error': '${err}'}`);
        }
};