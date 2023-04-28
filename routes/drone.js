var express = require('express');
const drone_controlers= require('../controllers/drone');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }

/* GET home page. */
router.get('/',drone_controlers.drone_view_all_Page);

/* GET detail drone page */
router.get('/detail', drone_controlers.drone_view_one_Page);

/* GET create drone page */
router.get('/create',secured, drone_controlers.drone_create_Page);

/* GET create update page */
router.get('/update', secured,  drone_controlers.drone_update_Page);

/* GET delete drone page */
router.get('/delete',secured, drone_controlers.drone_delete_Page);

module.exports = router;
