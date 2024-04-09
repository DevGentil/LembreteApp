import React, { useEffect, useState } from "react";
import { useReminders } from "../context/RemindersContext";
import {
  List,
  ListItem,
  ListTitle,
  ListData,
  ListName,
  Buttons,
  ButtonsContainer,
  EditInput,
} from "./ui/StyledComponents";
import { Reminder, RemindersGroupedByDate } from "../types/typings";

interface ReminderListProps {
  onAddFeedback: (message: string) => void;
}

export const ReminderList: React.FC<ReminderListProps> = ({
  onAddFeedback,
}) => {
  const {
    reminders,
    removeReminder,
    updateReminder,
    removeAllReminders,
    addReminder,
  } = useReminders();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/reminders`)
      .then((response) => response.json())
      .then((data: Reminder[]) => {
        removeAllReminders();
        data.forEach((reminder) => addReminder(reminder));
      });
  }, []);

  const handleEdit = (reminder: Reminder) => {
    setEditingId(reminder.id);
    setEditingText(reminder.title);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  const handleSaveEdit = (id: number) => {
    if (editingText.length < 3) {
      onAddFeedback("O lembrete deve ter pelo menos 3 caracteres.");
      return;
    }

    const originalText = reminders.find(reminder => reminder.id === id)?.title;
    if (editingText === originalText) {
      onAddFeedback('Nenhuma mudança foi feita no texto.');
      return;
    }

    fetch(`${import.meta.env.VITE_BACKEND_URL}/reminders/${id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: editingText,
      }),
    }).then(() => {
      updateReminder(id, editingText);
      setEditingId(null);
      setEditingText("");
      onAddFeedback("Lembrete atualizado com sucesso!");
    });
  };

  const handleDelete = (id: number) => {
    removeReminder(id);
    fetch(`${import.meta.env.VITE_BACKEND_URL}/reminders/${id}`, {
      method: "DELETE",
    });
    onAddFeedback("Lembrete removido com sucesso!");
  };

  const remindersByDate: RemindersGroupedByDate = reminders.reduce(
    (acc: RemindersGroupedByDate, reminder) => {
      const dateObj = new Date(reminder.date);
      const formattedDate = dateObj.toLocaleDateString("pt-BR", {
        timeZone: "UTC",
      });
      if (!acc[formattedDate]) {
        acc[formattedDate] = [];
      }
      acc[formattedDate].push(reminder);
      return acc;
    },
    {}
  );

  return (
    <List>
      <ListTitle>Lista de Lembretes</ListTitle>
      {Object.entries(remindersByDate).map(([date, remindersForDate]) => (
        <React.Fragment key={date}>
          <ListData>{date}</ListData>
          {remindersForDate.map((reminder) => (
            <ListItem key={reminder.id}>
              {editingId === reminder.id ? (
                <EditInput
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <ListName>{reminder.title}</ListName>
              )}
              <ButtonsContainer>
                {editingId === reminder.id ? (
                  <>
                    <Buttons onClick={() => handleSaveEdit(reminder.id)}>
                      Salvar
                    </Buttons>
                    <Buttons onClick={handleCancelEdit}>X</Buttons>
                  </>
                ) : (
                  <>
                    <Buttons onClick={() => handleEdit(reminder)}>
                      Editar
                    </Buttons>
                    <Buttons delete onClick={() => handleDelete(reminder.id)}>
                      X
                    </Buttons>
                  </>
                )}
              </ButtonsContainer>
            </ListItem>
          ))}
        </React.Fragment>
      ))}
    </List>
  );
};

export default ReminderList;
