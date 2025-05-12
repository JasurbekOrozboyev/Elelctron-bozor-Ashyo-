import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, Tabs, Tab,
  Box, IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Login from './login';
import Register from './register';

interface Props {
  open: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<Props> = ({ open, onClose }) => {
  const [tabIndex, setTabIndex] = useState(0);


  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Tabs value={tabIndex} onChange={(_, val) => setTabIndex(val)}>
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
        </Box>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {tabIndex === 0 ? (
          <>
            <Login/>

          </>
        ) : (
          <>
            <Register/>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
