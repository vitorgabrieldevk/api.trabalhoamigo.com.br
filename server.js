/* ---------------------------------------------
| Server Configuration for Express Application
| ---------------------------------------------
|
| This file initializes and configures the main server
| instance using the Express framework. The application
| loads environment variables, establishes the database
| connection, and sets up routing with modular imports.
|
| Environment Variables:
| - dotenv loads configuration from `.env` file, allowing
|   PORT and other sensitive data to be managed securely.
|
| Database Connection:
| - A self-invoking async function handles database
|   initialization using `connectDB`, with error handling
|   and termination on failure.
|
| Routing:
| - `/api`: All application routes are prefixed with `/api`,
|   delegating route handling to the modular route setup
|   in `src/routes/index.js`.
|
| HTTP Server:
| - Listens on the defined `PORT` or defaults to 3000,
|   logging server start confirmation on successful launch.
|
*/

/* ---------------------------------------------
| Environment Variables Configuration
| ---------------------------------------------
|
| dotenv is used to load environment variables from
| the `.env` file into `process.env`, supporting
| configuration management, security, and flexibility.
|
| Usage:
| - Variables such as PORT, database URIs, API keys, etc.,
|   can be set in `.env` and accessed within the app.
|
*/
require('dotenv').config();

/* ---------------------------------------------
| Express Framework and Database Setup
| ---------------------------------------------
|
| The Express module provides server functionality, while
| `connectDB` is imported to handle the database connection.
| Both are essential for API functionality and are imported
| as dependencies in this configuration file.
|
*/
const express = require('express');
const connectDB = require('./src/config/db');

/* ---------------------------------------------
| Route Configuration Import
| ---------------------------------------------
|
| All API routes are managed by the primary `index.js` file
| in `src/routes`, which organizes and registers each
| module's routes.
|
*/
const routes = require('./src/routes/index');

/* ---------------------------------------------
| Express App and Port Initialization
| ---------------------------------------------
|
| `app` is the main instance of Express, where middlewares,
| routes, and other configurations are applied. `PORT`
| retrieves its value from the environment or defaults to
| 3000 if undefined.
|
*/
const app = express();
const PORT = process.env.PORT || 3000;

/* ---------------------------------------------
| Middleware: JSON Parsing for Request Bodies
| ---------------------------------------------
|
| express.json() middleware is applied globally to parse
| incoming requests with JSON payloads. This middleware
| converts JSON bodies into `req.body` for use in the
| application.
|
*/
app.use(express.json());

/* ---------------------------------------------
| Database Connection Initialization
| ---------------------------------------------
|
| The database connection is handled in an asynchronous,
| self-invoking function. If the connection fails, an
| error message is logged, and the server terminates.
|
| - Purpose: To ensure that no requests are handled if
|   the database connection is unsuccessful.
|
| Error Handling:
| - If an error occurs, the app logs the issue and exits
|   with a non-zero code to indicate failure.
|
*/
(async () => {
  try {
    await connectDB();
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
})();

/* ---------------------------------------------
| Routing Setup
| ---------------------------------------------
|
| All routes within the application are prefixed with `/api`.
| The `routes` import provides a structured and modular
| route configuration, grouping each functional module's
| routes.
|
| - Endpoint: `/api`
|
| Example:
| - A GET request to `/api/users` will be routed to the
|   User routes defined in `src/routes/screens/userRoutes.js`.
|
*/
app.use('/api', routes);

/* ---------------------------------------------
| Root Endpoint for Server Status Check
| ---------------------------------------------
|
| This GET route serves as a simple endpoint at the root URL
| (`/`) for server status checks, providing a quick "It's Work"
| response to confirm that the server is online and functional.
|
*/
app.get('/', (req, res) => res.send("It's Work"));

/* ---------------------------------------------
| Start HTTP Server
| ---------------------------------------------
|
| The server listens on the defined PORT. On successful
| startup, a message logs the active port, confirming
| the server's readiness to handle incoming requests.
|
| Example:
| - If PORT is set to 3001, the server will log:
|   `Runner Server: 3001`
|
*/
app.listen(PORT, () => {
  console.log(`Runner Server: ${PORT}`);
});
