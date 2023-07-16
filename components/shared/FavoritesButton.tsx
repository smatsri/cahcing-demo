import { Box } from "@mui/material";
import FavoritesAccessibleIcon from "@/images/icons/FavoritesAccessibleIcon.svg";
import Fab from "@mui/material/Fab";
import Image from "next/image";
import { useMemo } from "react";

export type FavoriteButtonProps = any;

export const FavoritesButton: React.FC<FavoriteButtonProps> = ({}) => {
  const Icon = useMemo(() => {
    return (
      <Image
        src={FavoritesAccessibleIcon.src}
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
