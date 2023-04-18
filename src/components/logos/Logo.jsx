import { Image } from "@chakra-ui/react";
import logo from "../../assets/HELLARS_Logo_500x200px.svg";

const Logo = (props) => {
  return (
    <Image
      htmlWidth={props.width || "210px"}
      htmlHeight={"auto"}
      src={logo}
      m={1}
      {...props}
    />
  );
};

export default Logo;