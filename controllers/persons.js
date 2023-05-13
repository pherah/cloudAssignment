const Person = require('../models/person');

// CRUD Controllers

//get all persons
exports.getPersons = (req, res, next) => {
    Person.findAll()
        .then(persons => {
            res.status(200).json({ persons: persons });
        })
        .catch(err => console.log(err));
}

//get person by id
exports.getPerson = (req, res, next) => {
    const personId = req.params.personId;
    Person.findByPk(personId)
        .then(person => {
            if (!person) {
                return res.status(404).json({ message: 'Person not found!' });
            }
            res.status(200).json({ person: person });
        })
        .catch(err => console.log(err));
}

//create person
exports.createPerson = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
    const gender = req.body.gender;
    Person.create({
      name: name,
      email: email,
      gender:gender,
      age:age
    })
      .then(result => {
        console.log('Created Person');
        res.status(201).json({
          message: 'created successfully!',
          person: result
        });
      })
      .catch(err => {
        console.log(err);
      }); 
  }

//update person
exports.updatePerson = (req, res, next) => {
    const personId = req.params.personId;
    const updatedName = req.body.name;
    const updatedEmail = req.body.email;
    const updatedAge = req.body.age;
    const updatedGender = req.body.gender;
    Person.findByPk(personId)
      .then(person => {
        if (!person) {
          return res.status(404).json({ message: 'Person not found!' });
        }
        person.name = updatedName;
        person.email = updatedEmail;
        person.gender = updatedGender;
        person.age = updatedAge;
        return person.save();
      })
      .then(result => {
        res.status(200).json({message: 'Person updated!', person: result});
      })
      .catch(err => console.log(err));
  }  

//delete person
exports.deletePerson = (req, res, next) => {
    const personId = req.params.personId;
    Person.findByPk(personId)
      .then(person => {
        if (!person) {
          return res.status(404).json({ message: 'Person not found!' });
        }
        return Person.destroy({
          where: {
            id: personId
          }
        });
      })
      .then(result => {
        res.status(200).json({ message: 'Person deleted!' });
      })
      .catch(err => console.log(err));
  }