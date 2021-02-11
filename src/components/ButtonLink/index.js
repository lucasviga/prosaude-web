import { Container } from './styles';

export default function ButtonLink({ children, url, bgColor, textColor }) {
  return (
    <Container href={url} bgColor={bgColor} textColor={textColor} >
      {children}
    </Container>
  );
}
