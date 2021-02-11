import useWindowDimensions from './getDimensions';
import Mobile from './mobile';
import Desktop from './desktop';

export default function Header() {
  const { width } = useWindowDimensions();
  console.log(width);

  return width <= 900 ? <Mobile /> : <Desktop />
}
