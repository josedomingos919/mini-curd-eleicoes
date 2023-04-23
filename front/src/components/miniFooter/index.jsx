import * as S from "./styles";

export const MiniFooter = ({ title = "" }) => {
  return (
    <S.Container>
      <S.Text>{title}</S.Text>
    </S.Container>
  );
};
