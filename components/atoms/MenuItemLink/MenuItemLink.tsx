import { FC } from "react";
import { Heading, LinkProps } from "@chakra-ui/react";
import { Link } from "../Link";

export const MenuItemLink: FC<LinkProps> = ({
  href,
  children,
  ...restOfProps
}) => {
  return (
    <Link
      href={href}
      textDecoration="none"
      _hover={{
        textDecoration: "underline",
      }}
      {...restOfProps}
    >
      <Heading>{children}</Heading>
    </Link>
  );
};
