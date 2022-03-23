import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import Carousel from '@components/Carousel/Carousel';
import Banner from '@components/Banner/Banner';
import { IArticle, IPerson } from '@type/index';
import { breakpoints } from 'GlobalStyle';

interface HeadlineProps extends HTMLAttributes<HTMLDivElement> {
  articles: IArticle[];
  people: IPerson[];
}

export default function Headline({
  articles,
  people,
  ...props
}: HeadlineProps) {
  return (
    <Wrapper {...props}>
      <Inner>
        <Carousel>
          {articles.map((article, i: number) => (
            <Banner
              key={i}
              badge='Article'
              src={article.multimedia.src}
              alt={article.display_title}
              title={article.headline}
              subTitle={[article.summary_short]}
              link={article.link.url}
            />
          ))}
        </Carousel>
      </Inner>

      {people.map(({ id, profile_path, name, known_for }: IPerson) => (
        <Banner
          key={id}
          badge='People'
          src={profile_path}
          alt={name}
          title={name}
          subTitle={known_for
            .map(({ title }) => title)
            .filter((title) => title)}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 22rem;
  display: grid;
  grid-template-columns: 1fr repeat(2, 16rem);
  gap: 0.1rem;
  @media (max-width: ${breakpoints.desktopSmall}) {
    grid-template-columns: 100% 0 0;
    overflow-x: hidden;
  }
`;

const Inner = styled.span`
  width: 100%;
  height: 100%;
`;
