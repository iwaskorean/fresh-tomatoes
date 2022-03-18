import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

type MediaTypeType = 'Movie' | 'TV';

export default function SearchForm() {
  const [show, setShow] = useState(false);
  const [mediaType, setMediaType] = useState<MediaTypeType>();
  const [keyword, setKeyword] = useState('');
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, show]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mediaType && keyword) {
      router.push(`/search/${mediaType}/${keyword}`);
    }
  };

  const handleSetMediaType = (mediaType: MediaTypeType) => {
    setMediaType(mediaType);
    setShow(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <Container>
      <Dropdown ref={ref}>
        <Toggle onClick={() => setShow((prev) => !prev)}>
          {mediaType ? mediaType : 'Media Type'}
        </Toggle>
        <Group show={show}>
          <Item onClick={() => handleSetMediaType('Movie')}>Movie</Item>
          <Item onClick={() => handleSetMediaType('TV')}>TV</Item>
        </Group>
      </Dropdown>
      <Form onSubmit={handleSubmit}>
        <SearchBar
          onChange={handleChange}
          placeholder='Search movies, tv, more ...'
        ></SearchBar>
        <Button onClick={() => {}} />
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  margin: 1rem;
`;

const Form = styled.form`
  display: flex;
`;

const SearchBar = styled.input`
  flex: 1;
  width: 20rem;
  border: none;
  font-size: 1rem;
  padding: 1rem 0.7rem;
  outline: 0;
  background-color: var(--white);

  &::placeholder {
    color: grayLight4;
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  width: 3rem;
  height: 100%;
  border: none;
  outline: none;
  background: url('/static/icons/icon-search.png') no-repeat;
  background-size: 1.5rem;
  background-position: center;
  background-color: var(--white);
  cursor: pointer;
`;

const Dropdown = styled.div`
  width: 8rem;
  background-color: var(--white);
  font-size: 0.9em;
  margin-right: 0.2rem;
`;

const Toggle = styled.button`
  width: 100%;
  height: 100%;
  font-size: 1.1em;
  padding: 0.3rem;
  outline: none;
  background-color: var(--white);
  border: none;
  cursor: pointer;

  &:after {
    display: inline-block;
    margin-left: 0.5rem;
    vertical-align: 0.1rem;
    content: '';
    border-color: blue;
    border-top: 0.4rem solid var(--blue);
    border-right: 0.4rem solid transparent;
    border-bottom: 0;
    border-left: 0.4rem solid transparent;
  }
`;

const Group = styled.div<{ show: boolean }>`
  position: absolute;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  width: 8rem;
  flex-direction: column;
  background-color: var(--white);

  border: 5px solid var(--blueHover);
  z-index: 1;
`;

const Item = styled.a`
  padding: 0.4rem 0;
  width: 90%;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: var(--blueHover);
  }
  & + & {
    border-top: 1px solid var(--blue);
  }
`;
