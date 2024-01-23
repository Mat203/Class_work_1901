const express = require('express');
const app = express();
const router = express.Router();

const homeController = require('../controllers/homeController');
router.get('/',homeController.getHomePage);

router.get('/pug', (req,res) => {
res.render('index', {title:'Hey', message:'Hello there!'})
})

module.exports = router;