import React from "react";
import { useState } from "react";
import check from "../../assets/img/arrow_check.svg";

import * as S from "./styles";

export default function Button() {
  let [toggleButton, setToggleButton] = useState(false);

  return (
    <>
      {toggleButton ? (
        <S.Button className="accept" onClick={() => setToggleButton(false)}>
          <img src={check} alt="imagem de check" />
          Adicionado
        </S.Button>
      ) : (
        <S.Button onClick={() => setToggleButton(true)}>Adicionar</S.Button>
      )}
    </>
  );
}
