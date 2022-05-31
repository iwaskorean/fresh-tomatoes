import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import SelectBox from './SelectBox';
import SearchBar from './SearchBar';
import Button from './Button';
import Form from './Form';
import styled from '@emotion/styled';

type MediaTypeType = 'Movie' | 'TV' | '';

export default function SearchForm() {
  const [show, setShow] = useState(false);
  const [mediaType, setMediaType] = useState<MediaTypeType>('');
  const [term, setTerm] = useState('');
  const [alert, setAlert] = useState(false);

  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [mediaType]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectRef, show]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlert(true);
    if (mediaType && term) {
      setAlert(false);
      router.push(
        `/search?mediaType=${mediaType.toLowerCase()}&term=${term.toLocaleLowerCase()}`
      );
    }
  };

  const handleSetMediaType = useCallback((mediaType: MediaTypeType) => {
    setMediaType(mediaType);
    setShow(false);
  }, []);

  const handleShow = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  }, []);

  return (
    <Container>
      <SelectBox
        selectRef={selectRef}
        alert={alert}
        show={show}
        handleShow={handleShow}
        mediaType={mediaType}
        handleMediaType={handleSetMediaType}
      />

      <Form onSubmit={handleSubmit}>
        <SearchBar
          inputRef={inputRef}
          term={term}
          onChange={handleChange}
          alert={alert}
          placeholder='Search movies, tv, more ...'
        />
        <Button type='submit' />
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  margin: 1rem;
`;
