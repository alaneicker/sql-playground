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
  const config = req.body;
  
  pool = mysql.createPool(config);
  pool.config.connectionLimit = 400;

  res.send({ connected: pool.getConnection ? true : false });
});

module.exports = app.listen(port, () => {
  console.log(`Server is running in ${env} mode on port ${port}`);
});