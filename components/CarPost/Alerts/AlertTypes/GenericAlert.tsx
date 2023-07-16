import { Box } from "@mui/material";

import { AlertData } from "../types";
import { alertStyle } from "../styles";
import { NextIkImage } from "@/components/shared/NextIkImage";

const GenericAlert = ({ icon, title, width, height }: AlertData) => {
  return (
    <Box sx={alertStyle}>
      <NextIkImage
        src={icon}
        aria-label={title}
        alt={""}
        width={width}
        height={height}
      />
      <span>{title}</span>
    </Box>
  );
};

export default GenericAlert;
