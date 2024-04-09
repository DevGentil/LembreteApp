import { z } from 'zod';

export class CreateReminderDTO {
  title: string;
  date: string;

  constructor(data: CreateReminderDTO) {
    const schema = z.object({
      title: z.string().min(3, {
        message: "Mininum title length is 3"
      }),
      date: z.string()
    })

    const parsed = schema.parse(data)
    this.title = parsed.title;
    this.date = parsed.date;
  }
}

export class UpdateReminderDTO {
  title: string;

  constructor(data: UpdateReminderDTO) {
    const schema = z.object({
      title: z.string().min(3, {
        message: "Mininum title length is 3"
      })
    })

    const parsed = schema.parse(data)
    this.title = parsed.title;
  }
}
