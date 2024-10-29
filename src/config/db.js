/* ---------------------------------------------
| Database Configuration and Connection
| ---------------------------------------------
|
| This module is responsible for establishing and exporting
| the MySQL database connection using asynchronous operations.
| It leverages the `mysql2/promise` library to support async
| and await syntax, ensuring non-blocking database connection
| handling.
|
| Environment Variables:
| - Database credentials and configuration details (host,
|   user, password, and database name) are loaded from the
|   environment variables using dotenv, improving security
|   and modularity in deployment.
|
*/

/* ---------------------------------------------
| Import Dependencies
| ---------------------------------------------
|
| - `mysql2/promise`: The promise-based MySQL library
|   supports async/await, providing a modern approach
|   to database interactions.
| - `dotenv`: Loads environment variables from `.env`
|   into `process.env` for secure access.
|
*/
const mysql = require('mysql2/promise');
require('dotenv').config();

/* ---------------------------------------------
| Database Connection Function (connectDB)
| ---------------------------------------------
|
| `connectDB` is an async function that attempts to establish
| a connection with the MySQL database. It uses the `mysql2/promise`
| library to return a connection instance for subsequent use
| within the application.
|
| - Config Parameters:
|   - `host`: Database server address, specified as DB_HOST.
|   - `user`: Database username, specified as DB_USER.
|   - `password`: Database password, specified as DB_PASSWORD.
|   - `database`: Target database name, specified as DB_NAME.
|
| - Success Logging:
|   - On a successful connection, a message confirms that
|     the database connection was established.
|
| - Error Handling:
|   - If the connection attempt fails, the error is caught,
|     logged, and re-thrown to allow further handling at
|     the application level.
|
| - Return Value:
|   - Returns a `connection` object on success, which will
|     be used by other modules requiring database access.
|
*/
const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log('Database connection established successfully.');
    return connection;
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw error;
  }
};

/* ---------------------------------------------
| Export Database Connection Function
| ---------------------------------------------
|
| The `connectDB` function is exported for use throughout
| the application. Modules requiring database access will
| import this function to establish and manage their
| database interactions.
|
*/
module.exports = connectDB;
