import { RiAddFill } from "react-icons/ri";
import { Container } from "../components/Container";

export default function GeradorSenha() {
  return (
    <Container title="Gerador de Senhas" labelButton="Adicionar" iconButton={RiAddFill} buttonFunction={()=>{}}>
      Teste
    </Container>
  );
}
