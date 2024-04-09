// StyledComponents.tsx
import styled from 'styled-components';

const fontFamily = "'Roboto Slab', serif";

export const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 800px;
  padding: 20px;
  font-family: ${fontFamily};
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding-bottom: 60px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    max-width: 90%;
  }
`;


export const Title = styled.h1`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  margin-bottom: 5px;
  margin-left: 50px;
  font-family: ${fontFamily};
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-left: 0;
    gap: 5px;
  }
`;

export const ListTitle = styled.h2`
  color: #fff;
  margin: 1px auto 10px;
  text-align: center;
  width: 100%;
  font-family: ${fontFamily};
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;


export const ListData = styled.h3`
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;
  max-width: 420px;

  font-family: ${fontFamily};
`;

export const ListName = styled.span`
  color: #fff;
  margin-bottom: 1px;
  text-align: left;
  width: 100%;
  max-width: 420px;
  margin-left: 15px;
  font-family: ${fontFamily};
`;

export const ListItem = styled.li`
  font-family: ${fontFamily};
  font-size: 16px;
  background-color: transparent;
  overflow: hidden;
  padding: 3px;
  margin: 5px 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #fff;
  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    padding: 2px;
    margin: 2px 20px;
  }

  @media (max-width: 480px) {
    padding: 1px;
    margin: 5px 5px;
  }

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

export const List = styled.section`
  margin: 10px;
  width: 100%;
  max-width: 500px; 
  overflow: hidden;
  background-color: transparent;
  border: 1px solid #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: ${fontFamily};
  overflow-y: auto;
  max-height: 420px;

  @media (max-width: 768px) {
    max-width: 90%;
    max-height: 400px;
  }

  @media (max-width: 480px) {
    max-height: 300px;
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid;
    background-clip: padding-box;
    color: #fff;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }
`;

export const Input = styled.input<{ backgroundColor?: string, textColor?: string }>`
  flex: 1;
  width: 100%;
  padding: 0.2em;
  border: 1px solid #fff;
  border-radius: 20px;
  font-size: 1em;
  font-family: ${fontFamily};
  color: ${props => props.textColor || 'gray'};
  background-color: ${props => props.backgroundColor || 'transparent'};
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:focus {
    border-color: #fff;
    color: #fff;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
    outline: none;
    &::-webkit-calendar-picker-indicator {
      filter: invert(0.5);
    }
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 0.18em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
    padding: 0.15em;
  }
`;


export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
  margin-bottom: 10px;
  font-family: ${fontFamily};

  @media (max-width: 768px) {
    align-items: stretch;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    padding: 0 5px;
  }
`;

export const Buttons = styled.button<{ delete?: boolean, edit?: boolean }>`
  padding: 5px 10px;
  border: none;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 20px;
  margin: 1px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  font-family: ${fontFamily};

  &:hover {
    background-color: ${props => props.delete ? '#8B1C1C' : props.edit ? 'transparent' : '#28a745'};
  }

  &:not(:last-child) {
    margin-right: 3px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1px;
  align-items: center;
  justify-content: center;
`;

export const EditInput = styled.input`
  flex: 1;
  width: 100%;
  padding: 4px;
  margin: 3px;
  border: 1px solid #fff;
  border-radius: 20px;
  font-size: 16px;
  font-family: ${fontFamily};
  color: #fff;
  background-color: transparent;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: #fff;
    outline: none;
  }
`;

export const Alert = styled.div`
  display: flex;
  color: #28a745;
  margin-left: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 16px;
  padding: 5px;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: ${fontFamily};
`;

export const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  img {
    width: 24px;
    height: 24px;
    filter: invert(1) brightness(2);
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 50px;
  padding: 10px 0;
  text-align: center;
  font-family: ${fontFamily};
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
`;