export interface Reminder {
    id: number;
    title: string;
    date: string;
  }
  
  export interface RemindersGroupedByDate {
    [formattedDate: string]: Reminder[];
  }

  export interface RemindersContextData {
    reminders: Reminder[];
    addReminder: (reminder: Reminder) => void;
    removeReminder: (id: number) => void;
    updateReminder: (id: number, title: string) => void;
    removeAllReminders: () => void;
  }