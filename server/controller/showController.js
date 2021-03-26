const db = require("../models/showDatabase");

module.exports = {
  getAllList: (req, res, next) => {
    let query = "SELECT * FROM Shows";
    db.query(query)
      .then((data) => {
        res.locals.show = data.rows;
        return next();
      })
      .catch((err) => {
        return next(err);
      });
  },

  postList: (req, res, next) => {
    let { show } = req.body;
    let query = "INSERT INTO Shows (show) VALUES ($1)";
    db.query(query, [show]).then((data) => {
      return next();
    });
  },

  deleteList: (req, res, next) => {
    let { id } = req.params;

    let deleteQuery = "DELETE FROM Shows WHERE id = $1";
    db.query(deleteQuery, [id])
      .then((data) => {
        return next();
      })
      .catch((err) => {
        return next(err);
      });
  },

  putList: (req, res, next) => {
    let { id } = req.params;
    let { show } = req.body;
    let putQuery = "UPDATE Shows SET show = $1 WHERE id = $2";
    db.query(putQuery, [show, id])
      .then((data) => {
        return next();
      })
      .catch((err) => {
        return next(err);
      });
  },
};
