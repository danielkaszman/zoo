const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const AnimalRoutes = require("./Routes/AnimalRoutes");
const EnclosureRoutes = require("./Routes/EnclosureRoutes");
const FeedingRoutes = require("./Routes/FeedingRoutes");
const MedicalRecordRoutes = require("./Routes/MedicalRecordRoutes");
const VeteritarianRoutes = require("./Routes/VeteritarianRoutes");
const VisitorRoutes = require("./Routes/VisitorRoutes");
const ZookeeperRoutes = require("./Routes/ZookeeperRoutes");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3001"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

//app.use(express.static("../client/build"));

app.use("/AnimalRoutes", AnimalRoutes);
app.use("/EnclosureRoutes", EnclosureRoutes);
app.use("/FeedingRoutes", FeedingRoutes);
app.use("/MedicalRecordsRoutes", MedicalRecordRoutes);
app.use("/VeteritarianRoutes", VeteritarianRoutes);
app.use("/VisitorRoutes", VisitorRoutes);
app.use("/ZookeeperRoutes", ZookeeperRoutes);

mongoose
  .connect(
    "mongodb+srv://danikaszman:danikaszman@cluster.soqfcau.mongodb.net/Zoo?retryWrites=true&w=majority&appName=Cluster"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(3001, () => {
  console.log("Server is running...");
});
