let express = require('express');

let app = express();

let mongoose = require('mongoose');

let customerRoutes = require('./routes/customer_route');
let farmerRoutes = require('./routes/farmer_route');
let adminRoutes = require('./routes/admin_route');

app.use(express.json());
mongoose.connect("mongodb://localhost:27017").then(
    () => { console.log("db connected successfully") }
).catch((err) => console.log(err));

app.use("/api/customer", customerRoutes);

app.use("/api/farmer", farmerRoutes);

app.use("/api/admin", adminRoutes);

// run server

app.listen(3000, () => {
    console.log("server listening on port 3000");
});