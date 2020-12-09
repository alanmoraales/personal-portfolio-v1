import { FC } from "react";
import { AppBar } from "../../organisms/Appbar";

import PageTemplateProps from "./PageTemplateProps";

export const PageTemplate: FC<PageTemplateProps> = ({ pageName, children }) => {
  return (
    <>
      <AppBar title={pageName} />
      <main>{children}</main>
    </>
  );
};
