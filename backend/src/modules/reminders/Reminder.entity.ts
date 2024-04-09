import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("reminders")
export class ReminderEntity extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id?: number;

  @Column({
    type: "varchar",
    length: 255,
  })
  title?: string;

  @Column({
    type: "datetime",
  })
  date?: Date;
}
