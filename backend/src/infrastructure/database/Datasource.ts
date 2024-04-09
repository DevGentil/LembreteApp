import { DataSource } from "typeorm";
import { env } from "../env/env";
import { ReminderEntity } from "../../modules/reminders/Reminder.entity";

export const AppDataSource = new DataSource({
  type: "mariadb",
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [ReminderEntity],
  migrations: [],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => console.log(error));
