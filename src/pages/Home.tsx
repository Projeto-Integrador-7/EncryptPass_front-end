import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { RiAddFill } from "react-icons/ri";
import { Container } from "../components/Container";
import { Loading } from "../components/Loading";
import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  const {user, loading} = useContext(AuthContext)
  const [userLog, setUserLog] = useState("");

  useEffect(() => {
    const loadingUser = () => {
      setUserLog(String(user.name));
    };
    if (!loading) {
      loadingUser();
    }
  }, [loading]);
  return (
    <Container title="Home" labelButton="Adicionar" iconButton={RiAddFill}>
      {loading ? <Loading /> : `Olá ${userLog}`}
    </Container>
  );
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["encryptpass.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/Login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
