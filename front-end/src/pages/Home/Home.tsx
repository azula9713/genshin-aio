import AllCharacterShowcase from "../../components/Home/AllCharacterShowcase";
import ElementalPicker from "../../components/Home/ElementalPicker";
import Container from "../../components/Layout/Container";

export default function Home() {
  return (
    <Container>
      <ElementalPicker />
      <AllCharacterShowcase />
    </Container>
  );
}
