import React from "react";
import WishButton from "../WishButton/WishButton";
import Button from "../Button/Button";
import itemImg from "../../assets/img/monitor_image.svg";

import * as S from "./styles";

const productData = {
  error: null,
  stores: [
    {
      id: 1,
      name: "Monitor CRG50",
      description:
        "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP,Gsync Série CRG50",
      disabledPrice: "2.813,99",
      offerPrice: "R$ 2.599,00",
    },
    {
      id: 2,
      name: "Monitor CRG50",
      description:
        "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP,Gsync Série CRG50",
      disabledPrice: "2.813,99",
      offerPrice: "R$ 2.599,00",
    },
  ],
};

const mapdata = productData.stores;

export default function Card() {
  return (
    <>
      {mapdata.map((card) => (
        <S.Card key={card.id}>
          <WishButton />
          <S.ProdImage src={itemImg} alt={card.name}></S.ProdImage>
          <S.ProdDescription>{card.description}</S.ProdDescription>
          <S.DisabledPrice>{card.disabledPrice}</S.DisabledPrice>
          <S.OfferPrice>{card.offerPrice}</S.OfferPrice>
          <S.PaymentDescription>
            em até
            <S.PaymentCondition> 10x de R$ 259,90 </S.PaymentCondition> sem
            juros
          </S.PaymentDescription>

          <Button />
        </S.Card>
      ))}
    </>
  );
}
