import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Prifour from "./Assets/PriThree.PNG";
import Prifive from "./Assets/PriFour.PNG";
import Prisix from "./Assets/PriSix.PNG";
import Prithree from "./Assets/PriFive.PNG";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ last }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function changeKarle() {
    handleClose();
    last();
  }
  return (
    <div>
      <Button variant="contained" color="success" onClick={handleOpen}>
        LETS GIVE A TRY
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Carousel>
            <div>
              <img src={Prifour} />
            </div>
            <div>
              <img src={Prifive} />
            </div>
            <div>
              <img src={Prithree} />
            </div>
            <div>
              <img src={Prisix} />
            </div>
          </Carousel>
          <Button variant="contained" color="success" onClick={changeKarle}>
            THANK YOU SWEETU___!___AB,CLICK KARO ISSE
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
