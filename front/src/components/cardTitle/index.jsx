import * as S from "./styles";

export const CardTitle = ({ title = "" }) => {
  return (
    <S.Container>
      <S.Text>{title}</S.Text>
    </S.Container>
  );
};
