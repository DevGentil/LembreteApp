import express from "express";
import { ZodError } from "zod";
import { ReminderEntity } from "./Reminder.entity";
import { CreateReminderDTO, UpdateReminderDTO } from "./Reminder.interface";

const reminderRoutes = express.Router();

reminderRoutes.get("/", async (req, res) => {
  const reminders = await ReminderEntity.find();
  return res.json(reminders);
});

reminderRoutes.post("/", async (req, res) => {
  try {
    const data = new CreateReminderDTO(req.body);
    const reminder = ReminderEntity.create(data);
    await reminder.save();
    return res.status(201).json(reminder);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

reminderRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({
    error: "No id provided"
  })
  await ReminderEntity.delete(id);
  return res.status(204).send();
});

reminderRoutes.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({
      error: "No id provided"
    })
    
    const data = new UpdateReminderDTO(req.body);
    await ReminderEntity.update(
      {
        id: parseInt(id),
      },
      data
    );
    return res.status(204).send();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default reminderRoutes;
