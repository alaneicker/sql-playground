const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'development';

const app = require('express')()
  .use(cors())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(cors());

let pool;

const query = options => {
  const {
    query,
    data,
    isArray,
  } = options;

  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
          console.log('DATABASE ERROR: ', err);
          connection.release();
          reject(err);
      }
      connection.query(query, data, (err, result) => {
          connection.release();
          if (err) {
              reject(err);
          } else {
              resolve(isArray === false ? result[0] : result);
          }
      });
    });
  });
};

app.route('/api/create-connection').post((req, res) => {
  pool = mysql.createPool(req.body);
  pool.config.connectionLimit = 400;
  
  res.send({ connected: pool.config ? true : false });
});

app.route('/api/query').post((req, res) => {
  query({ query: req.body.query })
    .then(data => res.send(data))
    .catch(error => console.log(error));
});

app.route('/api/get-db-tables').get((req, res) => {
  query({ query: `show tables` })
    .then(tables => {
      res.send( [].concat.apply([], tables.map(obj => Object.values(obj))) );
    })
    .catch(error => console.log(error));
});

app.route('/api/get-table-columns/:table').get((req, res) => {
  query({ query: `SHOW COLUMNS FROM ${req.params.table}` })
    .then(columns => {
      res.send(columns);
    })
    .catch(error => console.log(error));
});

module.exports = app.listen(port, () => {
  console.log(`Server is running in ${env} mode on port ${port}`);
});