import { SectionStyled, SubTitleStyled } from './styles';

export default function Section({
  children,
  title,
  fontColor,
  backgroundColor,
  clicktrue,
  subtitle
}) {
  return (
    <SectionStyled
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      clicktrue={clicktrue}
    >
      <SubTitleStyled subtitle={subtitle}>{title}</SubTitleStyled>
      {children}
    </SectionStyled>
  );
}
