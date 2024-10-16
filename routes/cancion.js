const { Router } = require('express'); 
const { findAllController, findByArtistaController, insertController, updateController, deleteByIdController, preInsertController, preUpdateController } = require('../controllers/cancion');

const router = Router();

router.get('/', findAllController);

router.get('/findByArtista', findByArtistaController);

router.get('/insert', preInsertController);

router.post('/insert', insertController);

router.get('/update', preUpdateController);

router.post('/update', updateController);

router.get('/deleteById', deleteByIdController);

module.exports = router;