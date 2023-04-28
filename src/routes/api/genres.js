const express = require('express');
const router = express.Router();
const genresApiController = require('../../controllers/api/genresApiController');

// api/genres
router.get('/', genresApiController.list);
router.get('/:id', genresApiController.detail);
router.get('/:id/movies', genresApiController.genreMovies);

module.exports = router;