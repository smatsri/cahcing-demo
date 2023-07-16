import { Box, useMediaQuery } from "@mui/material";
import Fab from "@mui/material/Fab";
import { NextIkImage } from "./NextIkImage";
import { useMemo } from "react";

export type FavoriteButtonProps = any;

export const FavoritesButton: React.FC<FavoriteButtonProps> = ({}) => {
  const Icon = useMemo(() => {
    return (
      <NextIkImage
        src="icons/FavoritesAccessibleIcon.svg"
        alt="favorites icon"
        width={41}
        height={41}
        priority
      />
    );
  }, []);

  const FavElement = <Fab color="default">{Icon}</Fab>;

  return (
    <Box role="button" tabIndex={0}>
      {FavElement}
    </Box>
  );
};
