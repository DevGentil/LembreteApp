import React, { useState } from 'react';
import { useReminders } from '../context/RemindersContext';
import { Form, Input, Buttons } from './ui/StyledComponents';

interface ReminderFormProps {
  onAddFeedback: (message: string) => void;
}

export const ReminderForm: React.FC<ReminderFormProps> = ({ onAddFeedback }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const { addReminder } = useReminders();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!title.trim()) {
      onAddFeedback('Preencha o título do lembrete.');
      return;
    }
    const selectedDate = new Date(date + 'T00:00');
    selectedDate.setMinutes(selectedDate.getMinutes() - selectedDate.getTimezoneOffset());

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!date || selectedDate < today) {
      onAddFeedback('Escolha uma data futura.');
      return;
    }

    const reminderBody = { title: title, date: selectedDate.toISOString().split('T')[0] };
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/reminders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reminderBody),
    });

    if (!res.ok) {
      onAddFeedback('Erro ao adicionar lembrete.');
      return;
    }

    addReminder(await res.json());
    onAddFeedback('Lembrete adicionado com sucesso!');
    setTitle('');
    setDate('');
  };

  return (
    <Form onSubmit={handleSubmit} aria-label="Reminder Form">
      <Input 
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Nome do Lembrete"
        required
        backgroundColor="transparent"
        textColor="#fff"
        data-testid="reminder-title-input"
      />
      <Input 
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        required
        data-testid="reminder-date-input"
      />
      <Buttons type="submit" data-testid="add-reminder-button">+</Buttons>
    </Form>
  );
};

export default ReminderForm;
