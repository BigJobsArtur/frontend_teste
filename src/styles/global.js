import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {

  --background: #e5e5e5;

  /* Botões */
  --green: #40B25C;
  --light-green: #A3F9B9;
  --dark-green: #1C6C3E;

  /* Textos */
  --text-description: #1C1C1C;
  --disabled-price: #B5B5B6;
  --offer-price: #DA4B4F;
  --pay-descript: #848587;

  /* Tamanhos de Fontes */
  --f12: 0.75rem;
  --f14: 0.874rem;
  --f16: 1rem;
  --f20: 1.25rem;
  --f24: 1.5rem;
  --f27: 1.688rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--background);
}

h1, h2, h3, h4, h5, h6, strong, p {
  font-weight: 400;
}

a {
  text-decoration: none;
}

button {

  cursor: pointer;
  transition: filter 0.5s;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);


  &:hover {
    background-color: var(--dark-green);
  }
}

.margin-central{
  margin: 3rem
}
.accept{
  background-color: var(--light-green);
  color: #000;
}

`;
