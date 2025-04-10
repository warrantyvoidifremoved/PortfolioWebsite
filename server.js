const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));

// Map for routes
const redirectRoutes = new Map([
    ["/github", "https://github.com/warrantyvoidifremoved/"],
    ["/climate-crisis", "https://github.com/warrantyvoidifremoved/CSC317-ClimateCrisis"],
    ["/typesetting", "https://github.com/warrantyvoidifremoved/CS317-Typesetting"],
    ["/four-algorithms", "https://github.com/warrantyvoidifremoved/CSC317-FourSortingAlgortihms"],
    ["/x", "https://x.com/"],
    ["/instagram", "https://www.instagram.com/"],
    ["/discord", "https://discord.com/"]
]);

redirectRoutes.forEach((url, route) => {
    app.get(route, (req, res) => {
        res.redirect(url);
    });
});

// Catch for undefined endpoints
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'error.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});