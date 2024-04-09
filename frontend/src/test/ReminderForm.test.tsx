import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import ReminderForm from '../components/ReminderForm';
import { RemindersProvider } from '../context/RemindersContext';

describe('ReminderForm', () => {
  it('renders without crashing', () => {
    render(
      <RemindersProvider>
        <ReminderForm onAddFeedback={() => {}} />
      </RemindersProvider>
    );
  });
});
