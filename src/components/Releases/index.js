import Section from 'components/Section';
import { books } from './dates';
import { ReleaseSectionStyled } from './style';
import Card from 'components/Card';
import RecomCard from 'components/RecomCard';
import recomImage from 'img/livro2.png';

export default function Releases() {
    return (
        <Section
            title={'lançamentos'}
            fontColor={'white'}
            backgroundColor={'#177485'}
        >
            <ReleaseSectionStyled>
                {books.map((item) => {
                    return (
                        <Card key={item.id} title={item.name} imageUrl={item.src} />
                    );
                })}
            </ReleaseSectionStyled>
            <RecomCard
                title="Talvez você se interesse por"
                subTitle="Angular 11"
                describe="Construindo uma aplicação com a plataforma Google"
                url={recomImage} />
        </Section>
    );
}
