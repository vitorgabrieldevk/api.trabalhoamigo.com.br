/* ---------------------------------------------
| Express Router Configuration for API Routes
| ---------------------------------------------
|
| This file sets up the Express Router instance, handling all
| API endpoint definitions for the various modules in the
| application. The primary router is configured to load
| each module's routes through separate files for modularity
| and maintainability. It includes a middleware check for
| API key validation, applied globally to ensure secure access.
|
| Module Route Imports:
| - Each route corresponds to a functional module in the app:
|   * User, Proposal, Address, Category, Contract, Credit Card,
|     Message, Pix Transaction, Service, and Transaction.
|
| Global Middleware:
| - API Key Middleware is applied globally to secure the entire
|   API, preventing unauthorized access by validating requests.
|
| Usage Notes:
| - To enable unauthenticated access for specific routes, register
|   those routes above the global middleware.
|
| Export:
| - This router is exported for use as the main router in the
|   application's server file.
|
*/

/* Importing Express and Initializing Router */
const express = require('express');
const router = express.Router();

/* ---------------------------------------------
| Middleware: API Key Validation
| ---------------------------------------------
|
| The API Key middleware is imported and applied globally on
| the main router instance. All routes handled by this router
| will require a valid API key to ensure secure and restricted
| access to API endpoints.
|
| Location:
| - The middleware file 'apiKeyMiddleware' is located in the
|   'middlewares' directory.
|
*/
const apiKeyMiddleware = require('../middlewares/apiKeyMiddleware');
router.use(apiKeyMiddleware);

/* ---------------------------------------------
| Importing Route Handlers for API Modules
| ---------------------------------------------
|
| Each module's route file is imported to keep API routes
| organized and separated by functionality. This structure
| enhances modularity, enabling each module to handle its own
| routes and controllers independently.
|
| - userRoutes: Handles routes related to User management.
| - proposalRoutes: Manages Proposal-related routes.
| - addressRoutes: Manages Address-related routes.
| - categoryRoutes: Handles Category routes.
| - contractRoutes: Manages routes for Contracts.
| - creditCardRoutes: Handles routes for Credit Card management.
| - messageRoutes: Manages messaging endpoints.
| - pixTransactionRoutes: Manages Pix Transaction routes.
| - serviceRoutes: Handles Service-related routes.
| - transactionRoutes: Manages financial Transactions.
|
*/
const userRoutes = require('./screens/userRoutes');
const proposalRoutes = require('./screens/proposalRoutes');
const addressRoutes = require('./screens/addressRoutes');
const categoryRoutes = require('./screens/categoryRoutes');
const contractRoutes = require('./screens/contractRoutes');
const creditCardRoutes = require('./screens/creditCardRoutes');
const messageRoutes = require('./screens/messageRoutes');
const pixTransactionRoutes = require('./screens/pixTransactionRoutes');
const serviceRoutes = require('./screens/serviceRoutes');
const transactionRoutes = require('./screens/transactionRoutes');

/* ---------------------------------------------
| Applying Module Routes
| ---------------------------------------------
|
| This section applies each imported route handler to a
| specific path prefix, enabling organized access points for
| each module within the application. This setup uses RESTful
| route structures to streamline endpoint access and follows
| naming conventions for consistency across modules.
|
| - /users:        Routes managed by `userRoutes`.
| - /proposals:    Routes managed by `proposalRoutes`.
| - /addresses:    Routes managed by `addressRoutes`.
| - /categories:   Routes managed by `categoryRoutes`.
| - /contracts:    Routes managed by `contractRoutes`.
| - /credit-cards: Routes managed by `creditCardRoutes`.
| - /messages:     Routes managed by `messageRoutes`.
| - /pix-transactions: Routes managed by `pixTransactionRoutes`.
| - /services:     Routes managed by `serviceRoutes`.
| - /transactions: Routes managed by `transactionRoutes`.
|
| Example:
| - A GET request to `/users` will route to `userRoutes` for
|   handling, with specific endpoint definitions found in
|   `./screens/userRoutes.js`.
|
*/
router.use('/users', userRoutes);
router.use('/proposals', proposalRoutes);
router.use('/addresses', addressRoutes);
router.use('/categories', categoryRoutes);
router.use('/contracts', contractRoutes);
router.use('/credit-cards', creditCardRoutes);
router.use('/messages', messageRoutes);
router.use('/pix-transactions', pixTransactionRoutes);
router.use('/services', serviceRoutes);
router.use('/transactions', transactionRoutes);

/* ---------------------------------------------
| Module Export
| ---------------------------------------------
|
| The router instance is exported to be utilized as the
| main router in the application, allowing it to be mounted
| in the server configuration file (e.g., app.js or server.js).
| This centralized router consolidates all route definitions
| and provides a single access point to the API.
|
*/
module.exports = router;
