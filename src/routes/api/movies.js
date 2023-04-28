const express = require('express');
const router = express.Router();
const moviesApiController = require('../../controllers/api/moviesApiController');

//api/movies

router.post('/create', moviesApiController.add);
router.delete('/delete/:id', moviesApiController.destroy);

module.exports = router;