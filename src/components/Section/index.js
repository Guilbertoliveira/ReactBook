import { SectionStyled, SubTitleStyled } from './styles';

export default function Section({
    children,
    title,
    fontColor,
    backgroundColor,
}) {
    return (
        <SectionStyled fontColor={fontColor} backgroundColor={backgroundColor}>
            <SubTitleStyled>{title}</SubTitleStyled>
            {children}
        </SectionStyled>
    );
}
