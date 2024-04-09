import { cleanEnv, str, email, json, port } from "envalid";

export const env = cleanEnv(process.env, {
  DATABASE_USER: str({
    desc: "The database user",
    default: "lembretes",
  }),
  DATABASE_PASSWORD: str({
    desc: "The database password",
    default: "password",
  }),
  DATABASE_NAME: str({
    desc: "The database name",
    default: "lembretes",
  }),
  DATABASE_HOST: str({
    desc: "The database host",
    default: "mariadb",
  }),
  DATABASE_PORT: port({
    desc: "The database user",
    default: 3306,
  }),
});
