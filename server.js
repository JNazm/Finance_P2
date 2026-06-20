const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from current directory
app.use(express.static(path.join(__dirname)));

// Default route → login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(PORT, () => {
    console.log(`✅ Mini Finance running at http://localhost:${PORT}`);
});
