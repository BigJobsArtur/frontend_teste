import React from "react";
import { useState } from "react";

import wishDefault from "../../assets/img/wishlist1.svg";
import wishHover from "../../assets/img/wishlist2.svg";
import wishSelected from "../../assets/img/wishlist3.png";

import * as S from "./styles";

export default function WishButton() {
  const [toggleWish, setToggleWish] = useState(true);

  const [wishImage, setWishImage] = useState(wishDefault);
  const [selected, setSelected] = useState(wishSelected);

  return (
    <>
      {toggleWish ? (
        <S.WishButton>
          <S.WishImg
            src={wishImage}
            alt="Icone de WishList"
            onMouseOver={() => {
              setWishImage(wishHover);
            }}
            onMouseOut={() => {
              setWishImage(wishDefault);
            }}
            onClick={() => {
              setToggleWish(!toggleWish);
            }}
          ></S.WishImg>
        </S.WishButton>
      ) : (
        <S.WishButton>
          <S.WishImg
            src={selected}
            alt="Icone de WishList"
            onClick={() => {
              setToggleWish(!toggleWish);
              setSelected(wishSelected);
            }}
          ></S.WishImg>
        </S.WishButton>
      )}
    </>
  );
}
