import { SectionStyled, SubTitleStyled } from './styles';

export default function Section({
  children,
  title,
  fontColor,
  backgroundColor,
  clicktrue,
}) {
  return (
    <SectionStyled
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      clicktrue={clicktrue}
    >
      <SubTitleStyled>{title}</SubTitleStyled>
      {children}
    </SectionStyled>
  );
}
