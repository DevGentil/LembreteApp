import React, { useState } from "react";
import sun from "./assets/sun.svg";
import moon from "./assets/moon.svg";
import GlobalStyle from "./components/ui/GlobalStyle";
import ReminderForm from "./components/ReminderForm";
import ReminderList from "./components/ReminderList";
import { RemindersProvider } from "./context/RemindersContext";
import { useTheme } from "./context/ThemeContext";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/ui/GlobalStyle";
import { Title, Alert, AppContainer, ThemeButton, Footer } from "./components/ui/StyledComponents";

export const App: React.FC = () => {
  const [feedback, setFeedback] = useState("");
  const { theme, toggleTheme } = useTheme();

  const addFeedback = (message: string) => {
    setFeedback(message);
    setTimeout(() => setFeedback(""), 3000);
  };

  return (
    <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <RemindersProvider>
        <AppContainer>
          <header>
            <Title>Crie o seu lembrete!
            <ThemeButton onClick={toggleTheme} data-testid="theme-toggle-button">
              <img
                src={theme === "light" ? moon : sun}
                alt={theme === "light" ? "Dark Mode" : "Light Mode"}
                style={{ width: "24px", height: "24px" }}
              />
            </ThemeButton>
            </Title>
          </header>
          {feedback && <Alert>{feedback}</Alert>}
          <main>
            <ReminderForm onAddFeedback={addFeedback} />
            <ReminderList onAddFeedback={addFeedback} />
          </main>
        </AppContainer>
        <Footer>Feito com ♥ por DevGentil para DTI</Footer>
      </RemindersProvider>
    </StyledThemeProvider>
  );
};

export default App;
