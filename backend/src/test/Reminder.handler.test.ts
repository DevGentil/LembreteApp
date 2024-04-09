import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import reminderRoutes from '../modules/reminders/Reminder.handler';

jest.mock('../modules/reminders/Reminder.entity', () => ({
  ReminderEntity: {
    find: jest.fn().mockResolvedValue([{ id: 1, title: 'reminder1', date: '2023-01-01' }, { id: 2, title: 'reminder2', date: '2023-01-02' }]),
    create: jest.fn().mockImplementation((data) => ({
      ...data,
      save: jest.fn().mockResolvedValue({ id: 3, ...data })
    })),
    delete: jest.fn().mockResolvedValue({ affected: 1 }),
    update: jest.fn().mockResolvedValue({ affected: 1 })
  }
}));

const app = express();
app.use(bodyParser.json());
app.use('/reminders', reminderRoutes);

describe('reminderRoutes', () => {
  it('GET /reminders should return a list of reminders', async () => {
    const response = await request(app).get('/reminders');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([{ id: 1, title: 'reminder1', date: '2023-01-01' }, { id: 2, title: 'reminder2', date: '2023-01-02' }]);
  });

  it('POST /reminders should create a new reminder', async () => {
    const reminderData = { title: 'New Reminder', date: '2023-01-01' };
    const response = await request(app).post('/reminders').send(reminderData);
    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject(reminderData);
  });

  it('POST /reminders should fail if reminder title length is less than 3', async () => {
    const reminderData = { title: 'ab', date: '2023-01-01' };
    const response = await request(app).post('/reminders').send(reminderData);
    expect(response.statusCode).toBe(400);
  });

  it('DELETE /reminders/:id should delete a reminder', async () => {
    const response = await request(app).delete('/reminders/1');
    expect(response.statusCode).toBe(204);
    expect(response.body).toEqual({});
  });

  it('PATCH /reminders/:id should update a reminder', async () => {
    const newTitle = "New title";
    const response = await request(app).patch('/reminders/1').send({
      title: newTitle
    });
    expect(response.statusCode).toBe(204);
    expect(response.body).toEqual({});
  });

  it('PATCH /reminders/:id should fail if title length is less than 3', async () => {
    const newTitle = "ab";
    const response = await request(app).patch('/reminders/1').send({
      title: newTitle
    });
    expect(response.statusCode).toBe(400);
  });
});
