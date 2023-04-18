import { Container } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

const PageComponent = ({ children }) => {
  return (
    <>
      <Header />
      <Container minH={"100vh"} maxW={"7xl"} mt={"120px"}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default PageComponent;
