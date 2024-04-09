import express from "express";
import "reflect-metadata";
import "./infrastructure/database/Datasource";
import reminderRoutes from "./modules/reminders/Reminder.handler";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "OPTIONS", "PATCH"],
  })
);

app.use("/reminders", reminderRoutes);

app.listen(5002, () => {
  console.log("Server is running on port 5002");
});
