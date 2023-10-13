import * as S from './styles';

export default function Section({
  children,
  title,
  fontColor,
  backgroundColor,
  clicktrue,
  subtitle
}) {
  return (
    <S.SectionStyled
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      clicktrue={clicktrue}
    >
      <S.SubTitleStyled subtitle={subtitle}>{title}</S.SubTitleStyled>
      {children}
    </S.SectionStyled>
  );
}
