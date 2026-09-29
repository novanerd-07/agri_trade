let express = require('express');

let router = express.Router();

// Register Farmer
router.post("/register", (req, res) => {
    res.send("Farmer Registered");
});

// Login Farmer
router.post("/login", (req, res) => {
    res.send("Farmer Login Success");
});

// Update Profile
router.put("/updateprofile", (req, res) => {
    res.send("Farmer Profile Updated");
});

// Add Items
router.post("/additems", (req, res) => {
    res.send("Items Added");
});

// View Orders
router.get("/vieworders", (req, res) => {
    res.send("Farmer Orders");
});

// Deliver Orders
router.put("/deliverorders/:id", (req, res) => {
    res.send("Order Delivered");
});

// View Feedback
router.get("/viewfeedback", (req, res) => {
    res.send("Farmer Feedback");
});

module.exports = router;