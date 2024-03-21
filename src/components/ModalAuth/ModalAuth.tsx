import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

const style = {
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  borderRadius: 5,
};

interface ModalAuthProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  text: {
    title: string;
    description: string;
  };
}

export default function ModalAuth({ open, setOpen, text }: ModalAuthProps) {
  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' sx={{ fontSize: 24 }}>
            {text.title}
          </Typography>
          <Typography id='modal-modal-description' sx={{ fontSize: 16 }}>
            {text.description}
          </Typography>
          <Button variant='contained' size='large' onClick={handleClose}>
            {'OK'}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
