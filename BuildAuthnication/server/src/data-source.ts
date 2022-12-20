import "reflect-metadata";
import { DataSource } from "typeorm";
import { Contact } from "./entities/Contact";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "crud",
  synchronize: false,
  logging: false,
  entities: [Contact],
  migrations: [],
  subscribers: [],
});
