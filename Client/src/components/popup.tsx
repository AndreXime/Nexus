import React from "react";
import { Dialog, DialogContent, DialogActions, Button, Typography } from "@mui/material";

interface PopupProps {
  isOpen: boolean; // Controla a visibilidade do popup
  message: string; // Mensagem exibida no popup
  onClose: () => void; // Função chamada ao fechar o popup
}

const Popup: React.FC<PopupProps> = ({ isOpen, message, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} aria-labelledby='popup-title' maxWidth='sm' fullWidth>
      <DialogContent>
        <Typography id='popup-title' variant='body1'>
          {message.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color='primary' onClick={onClose}>
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
