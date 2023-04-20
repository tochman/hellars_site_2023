import { Box, Hide, Container, Stack, Link } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "../utilities/debounce";
import Logo from "./logos/Logo";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navbarStyles = {
    width: "100%",
    backgroundColor: "#FAF6F3",
    position: "fixed",
    top: "0px",
    transition: "0.2s linear",
    borderBottom: "1px solid rgba(0, 0, 0, .1)",
    zIndex: "40",
    boxShadow: "0 2px 5px -1px rgba(0, 0, 0, .08)",
  };

  const handleScroll = debounce((event) => {
    const currentScrollPos = window.pageYOffset;
    const cursorPosition = event.clientY < window.innerHeight / 3;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 110 ||
        cursorPosition
    );

    setPrevScrollPos(currentScrollPos);
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleScroll);
    };
  }, [prevScrollPos, visible, handleScroll]);
  return (
    <Box
      style={{
        ...navbarStyles,
        top: visible ? "0" : "-140px",
      }}
      py={2}
      data-cy="header"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
        <Hide below="md">
          <Stack direction={"row"} spacing={6} paddingTop={"30px"}>
            <Link alignSelf={"center"} href={"/legal"}>
              {t("legal.heading")}
            </Link>
            <Link alignSelf={"center"} href={"/accounting"}>
              {t("accounting.heading")}
            </Link>
            <Link alignSelf={"center"} href={"/management"}>
              {t("management.heading")}
            </Link>
            <Link alignSelf={"center"} href={"/digital"}>
              {t("digital.heading")}
            </Link>
          </Stack>
        </Hide>
      </Container>
    </Box>
  );
};

export default Header;
