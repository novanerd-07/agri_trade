let express = require('express');
let router = express.Router();
let {users} = require('../models/user');
let bcrypt = require('bcrypt');

// Register Customer
router.post("/register", async (req, res) => {
    let { name, email, password } = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    let user = new users({
        name: name,
        email: email,
        password: hashedPassword
    });
    await user.save();
    res.send("Customer Registered");
});

// Login Customer
router.post("/login", async (req, res) => {
    let { email, password } = req.body;
    let user = await users.findOne({ email: email });
    if (!user) {
        return res.send("Customer Not Found");
    }
    let result = await bcrypt.compare(password, user.password);
    if (result) {
        res.send("Customer Login Success");
    }
    else {
        res.send("Invalid Password");
    }
});

// View Profile
router.get("/viewprofile", (req, res) => {
    res.send("Customer Profile");
});

// Update Profile
router.put("/updateprofile", (req, res) => {
    res.send("Profile Updated");
});

// View Crops
router.get("/viewcrops", (req, res) => {
    res.send("List of Crops");
});

// Search Crops
router.get("/searchcrop", (req, res) => {
    res.send("Search Results");
});

// Add to Cart
router.post("/addtocart", (req, res) => {
    res.send("Added to Cart");
});

// View Cart
router.get("/viewcart", (req, res) => {
    res.send("Cart Items");
});

// Remove Cart Item
router.delete("/removecart/:id", (req, res) => {
    res.send("Item Removed");
});

// Place Order
router.post("/placeorder", (req, res) => {
    res.send("Order Placed");
});

// View Orders
router.get("/vieworders", (req, res) => {
    res.send("Orders List");
});

// Track Order
router.get("/trackorder/:id", (req, res) => {
    res.send("Order Status");
});

// Cancel Order
router.put("/cancelorder/:id", (req, res) => {
    res.send("Order Cancelled");
});

// Payment
router.post("/payment", (req, res) => {
    res.send("Payment Success");
});

// Add Feedback
router.post("/addfeedback", (req, res) => {
    res.send("Feedback Added");
});

// View Feedback
router.get("/viewfeedback", (req, res) => {
    res.send("Feedback Details");
});

module.exports = router;