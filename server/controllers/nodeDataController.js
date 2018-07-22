import db from "../models";

// Defining methods for the booksController
const controller = {
  findAll: (req, res) => {
    db.nodes.findAll({
    
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.nodes.findOne({
        where: {
          id: req.params.id,
          inactive: false
        }
      })
      .then(dbModel => {
        if (dbModel) {
          res.json(dbModel);
        } else {
          res.status(404).json({
            message: 'Id not found.'
          });
        }
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.nodes.create({
        nodeId: req.body.nodeId,
        userId: req.body.userId,
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        r: req.body.r,
        g: req.body.g,
        b: req.body.b,
        lux: req.body.lux,
        full: req.body.full,
        visible: req.body.visible,
        ir: req.body.ir,
        roomId: req.body.roomId,
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.nodes.update({
        name: req.body.name,
        description: req.body.description
      }, {
        where: {
          id: req.params.id,
          inactive: false
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.nodes.update({
        inactive: true
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

export { controller as default };
