import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  background: 'linear-gradient(to top right, #007db1, #943687, #024452)'
};

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  background: 'linear-gradient(to top right, #142142, #000000, #571411)'
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-image: ${({ theme }) => theme.background};
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: ${({ theme }) => theme.text};
    transition: all 0.3s linear;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;

export default GlobalStyle;


