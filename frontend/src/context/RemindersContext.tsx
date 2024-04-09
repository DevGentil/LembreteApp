import React, { createContext, useState, useContext } from 'react';
import { Reminder } from '../types/typings';
import { RemindersContextData } from '../types/typings';

export const RemindersContext = createContext<RemindersContextData>({} as RemindersContextData);

export const RemindersProvider: React.FC<{ children: React.ReactNode, reminders?: Reminder[] }> = ({ children, reminders: initialData }) => {
  const [reminders, setReminders] = useState<Reminder[]>(initialData || []);

  const addReminder = (newReminder: Reminder) => {
    setReminders((previousReminders) => {
      const updatedReminders = [...previousReminders, newReminder];
      updatedReminders.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
      return updatedReminders;
    });
  };

  const removeReminder = (id: number) => {
    setReminders((previousReminders) => previousReminders.filter((reminder) => reminder.id !== id));
  };

  const removeAllReminders = () => {
    setReminders([]);
  };

  const updateReminder = (id: number, newTitle: string) => {
    setReminders((previousReminders) =>
      previousReminders.map((reminder) => 
        reminder.id === id ? { ...reminder, title: newTitle } : reminder
      )
    );
  };

  return (
    <RemindersContext.Provider value={{ reminders, addReminder, removeReminder, removeAllReminders, updateReminder }}>
      {children}
    </RemindersContext.Provider>
  );
};

export const useReminders = () => {
  const context = useContext(RemindersContext);
  if (!context) throw new Error('useReminders must be used within a RemindersProvider');
  return context;
};
