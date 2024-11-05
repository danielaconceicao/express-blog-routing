/* creare un file di routing che conterrà le rotte necessario per l'entità post. */
const express = require('express');
const router = express.Router();
const postsController = require('../controller/postsController');


router.get('/', postsController.index);
router.post('/', postsController.store);

module.exports = router