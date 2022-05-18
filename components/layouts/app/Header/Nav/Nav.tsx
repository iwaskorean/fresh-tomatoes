import NavWrapper from './Wrapper';
import NavLink from './Link';

export interface NavProps {
  items: IItem[];
}

interface IItem {
  title: string;
  path: string;
}

export default function Nav({ items }: NavProps) {
  return (
    <NavWrapper>
      {items.map(({ title, path }) => (
        <NavLink key={title} href={`/${path}`} title={title} />
      ))}
    </NavWrapper>
  );
}
