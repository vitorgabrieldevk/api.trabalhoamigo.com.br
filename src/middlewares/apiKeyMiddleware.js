const fs = require('fs');
const path = require('path');

const apiKeyMiddleware = async (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    const clientId = req.headers['x-client-id'];

    // API Key validation
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(403).json({ message: 'Access Denied: Invalid API Key' });
    }

    // Client ID validation
    if (!clientId) {
        return res.status(403).json({ message: 'Access Denied: Missing Client ID' });
    }

    try {
        // Load and read the JSON file
        const data = await fs.promises.readFile(path.join(__dirname, '../config/clients/Clients.json'), 'utf-8');
        const clients = JSON.parse(data).clients;

        // Search for the client by ID
        const client = clients.find(c => c.clientId === clientId && c.status === 'active');

        if (!client) {
            return res.status(403).json({ message: 'Access Denied: Client ID not found or inactive' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error loading client data', error });
    }

    next();
};

module.exports = apiKeyMiddleware;
