import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { alertStyle, dividerStyle } from "../styles";
import { AlertData } from "../types";
import { NextIkImage } from "@/components/shared/NextIkImage";

const CarOfTheYearAlert = ({ icon, title, width, height, year }: AlertData) => {
  return (
    <Box sx={alertStyle}>
      <Box
        sx={{
          position: "absolute",
          left: -14,
          top: -9,
          display: "flex",
        }}
      >
        <NextIkImage
          src={icon}
          aria-label={title}
          alt={""}
          width={width}
          height={height}
          objectFit={"cover"}
        />
      </Box>
      <Box
        sx={{
          ml: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 20,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={"/icons/car-of-the-year.png"}
            aria-label={title}
            alt={""}
            width={95}
            height={22}
            layout="fixed"
          />
        </Box>

        <Divider sx={dividerStyle} orientation="vertical" />
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 300,
          }}
        >
          {year}
        </Typography>
        <Divider sx={dividerStyle} orientation="vertical" />
        <Typography sx={{ fontSize: 14, fontWeight: 500 }}>{title}</Typography>
      </Box>
    </Box>
  );
};

export default CarOfTheYearAlert;
