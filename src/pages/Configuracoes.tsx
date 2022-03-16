import { RiAddFill } from "react-icons/ri";
import { Container } from "../components/Container";

export default function Configuracoes() {
  return (
    <Container title="Configurações" labelButton="Adicionar" iconButton={RiAddFill} buttonFunction={()=>{}}>
      Teste
    </Container>
  );
}
