const controller = require('../controllers/persons');
const router = require('express').Router();

// CRUD Routes /persons
router.get('/', controller.getPersons); // /persons
router.get('/:personId', controller.getPerson); // /persons/:personId
router.post('/', controller.createPerson); // /persons
router.put('/:personId', controller.updatePerson); // /persons/:personId
router.delete('/:personId', controller.deletePerson); // /persons/:personId

module.exports = router;
