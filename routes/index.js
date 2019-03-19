var express = require('express');
const { Pool } = require('pg');
const { DATABASE_URL } = process.env;

var router = express.Router();

const pool = new Pool({
  connectionString: DATABASE_URL
});

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('routing in index');
  res.render('home');
});

/* GET home page. */
router.get('/testdrive', function(req, res, next) {
  console.log('testdriveform');
  res.render('testdrive', { success:false } );
});

/* form handling */
router.post('/leadform', async function (req, res, next) {
  console.log('routing on post form');
  console.log(req.body);
  const result = await pool.query(`insert into salesforce.lead(firstname, lastname, mobilephone, email, company) Values ('${req.body.firstname}', '${req.body.lasttname}', '${req.body.phone}', '${req.body.email}', 'Electron')`);
  console.log(result);
  res.render('testdrive', { success: true });
});

module.exports = router;
