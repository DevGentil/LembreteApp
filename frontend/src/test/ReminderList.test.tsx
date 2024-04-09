import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ReminderList from '../components/ReminderList';
import { RemindersProvider } from '../context/RemindersContext';

describe('ReminderList', () => {
  it('renders without crashing', () => {
    render(
      <RemindersProvider>
        <ReminderList onAddFeedback={() => {}} />
      </RemindersProvider>
    );
  });

  it('displays reminders grouped by date', () => {
    const reminders = [
      { id: 1, title: 'Reminder 1', date: '2024-04-08' },
      { id: 2, title: 'Reminder 2', date: '2024-04-09' },
    ];

    render(
      <RemindersProvider reminders={reminders}>
        <ReminderList onAddFeedback={() => {}} />
      </RemindersProvider>
    );

    const reminderDate1 = screen.getByText('08/04/2024');
    const reminderDate2 = screen.getByText('09/04/2024');

    expect(reminderDate1).toBeInTheDocument();
    expect(reminderDate2).toBeInTheDocument();
  });
});