import * as S from "./styles";

export const Button = ({ title = "", ...restProps }) => {
  return (
    <S.Container {...restProps}>
      <S.Text>{title}</S.Text>
    </S.Container>
  );
};
