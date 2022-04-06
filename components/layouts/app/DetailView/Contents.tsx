import styled from '@emotion/styled';

interface ContentsProps {
  releaseDate: string;
  runningTime: number;
  genres: {
    name: string[] | string;
  }[];
}

export default function Contents({
  releaseDate,
  runningTime,
  genres,
}: ContentsProps) {
  return (
    <Box>
      <Text>Release date: {releaseDate || '-'}</Text>
      <Text>Running time: {runningTime ? runningTime + 'mins' : '-'}</Text>
      <Text>Genre: {genres.map((genre) => genre.name).join(', ') || '-'}</Text>
    </Box>
  );
}

const Box = styled.div`
  margin: 1.5rem 0;
`;

const Text = styled.p`
  color: var(--grayDark2);
  font-size: 1.1rem;
  margin: 0.5rem 0;
  letter-spacing: 0.04rem;
`;
