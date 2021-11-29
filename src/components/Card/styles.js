import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 304px;
  padding: 2rem;
  border-radius: 8px;
  background-color: #fff;
  transition: ease-in 0.3s;
  display: inline-block;
  margin-right: 2rem;
  margin-bottom: 2rem;
  position: relative;

  &:hover {
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
  }
`;

export const ProdImage = styled.img`
  max-height: 240px;
  margin-bottom: 2rem;
`;

export const ProdDescription = styled.p`
  font-size: var(--f14);
  color: var(--text-description);
  margin-bottom: 24px;
  line-height: 20px;
`;

export const DisabledPrice = styled.p`
  font-size: var(--f14);
  color: var(--disabled-price);
  margin-bottom: 24px;
  line-height: 20px;
  text-decoration: line-through;
  margin-bottom: 5px;
  cursor: not-allowed;
`;
export const OfferPrice = styled.p`
  font-size: var(--f20);
  color: var(--offer-price);
  margin-bottom: 24px;
  line-height: 24px;
  margin-bottom: 5px;
`;
export const PaymentDescription = styled.p`
  font-size: var(--f12);
  color: var(--pay-descript);
  line-height: 16px;
`;
export const PaymentCondition = styled.span`
  font-size: var(--f12);
  color: var(--text-description);
  line-height: 16px;
  font-weight: 600;
`;
