import { RiAddFill } from "react-icons/ri";
import { Container } from "../components/Container";
import { ItemCofre } from "../components/ItemCofre";

export default function MeuCofre() {
  const testeItem = [{nome: 'Streamings'}, {nome: 'Redes Sociais'}, {nome: 'Faculdade'}]
  return (
    <Container title="Meu Cofre" labelButton="Adicionar" iconButton={RiAddFill} buttonFunction={()=>{}}>
      {testeItem.map((item, index)=>(
        <ItemCofre key={`index-${index}`} title={item.nome} buttonFunction={()=>{}}/>
      ))}
    </Container>
  );
}
