import { useState, useLayoutEffect } from "react";
import { useMediaQuery as chakraUseMediaQuery } from "@chakra-ui/react";

// original chakra ui hook causes problems with nextjs at first load.
// this wrapper solves the problem
export const useMediaQuery = (mediaQuery: string | string[]) => {
  const [mediaState, setMediaState] = useState(false);
  const [chakraMediaState] = chakraUseMediaQuery(mediaQuery);

  useLayoutEffect(() => {
    if (chakraMediaState) {
      setMediaState(true);
    } else {
      setMediaState(false);
    }
  }, [chakraMediaState]);

  return [mediaState];
};
