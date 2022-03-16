import { RiAddFill } from "react-icons/ri";
import { Container } from "../components/Container";

export default function Home() {
  return (
    <Container title="Meu Cofre" labelButton="Adicionar" iconButton={RiAddFill} buttonFunction={()=>{}}>
      Teste
    </Container>
  );
}
