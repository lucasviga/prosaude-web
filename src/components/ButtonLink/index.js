import { Container } from './styles';

export default function ButtonLink({ children, bgColor, textColor }) {
  return (
    <Container href="https://facebook.com" bgColor={bgColor} textColor={textColor}>
      {children}
    </Container>
  );
}
