import WarrantyIcon from "@/images/icons/warranty.svg";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import { preventDefault } from "../helpers";
import styled from "@emotion/styled";
// import BubblePopover from '@/shared-components/BubblePopover/BubblePopover';
import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { Typography } from "@mui/material";

const ParallelImport = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("parallelImport");
  const toggle = useCallback(() => {
    setOpen(!open);
  }, [open]);
  return (
    <Container>
      <Btn onClick={preventDefault(toggle)}>
        <Image width={15} height={15} src={WarrantyIcon.src} alt="" />
      </Btn>
      {/* <PopoverContainer>
        <BubblePopover open={open} onClose={toggle} position="left">
          <PopoverContent>
            {t.rich('note1', {
              b: (chunks) => <b>{chunks}</b>,
              br: () => <br />,
            })}
          </PopoverContent>
        </BubblePopover>
      </PopoverContainer> */}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const PopoverContainer = styled.div`
  position: absolute;
  top: -10px;
`;

const Btn = styled(IconButton)`
  padding: 0;
`;

const PopoverContent = styled(Typography)`
  font-size: 13px;
  line-height: normal;
`;

export default ParallelImport;
