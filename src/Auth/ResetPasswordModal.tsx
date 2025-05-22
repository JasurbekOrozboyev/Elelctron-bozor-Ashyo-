import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Alert,
  Snackbar,
} from '@mui/material';
import axios from 'axios';

interface Props {
  email: string;
  open: boolean;
  onClose: () => void;
}

const ResetPasswordModal: React.FC<Props> = ({ email, open, onClose }) => {
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleReset = async () => {
    if (!otp.trim()) {
      setSnackbarMsg("Tasdiqlash kodi kiritilishi shart");
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }
    if (typeof otp !== 'string') {
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }
    if (!newPassword) {
      setSnackbarMsg("Yangi parol kiritilishi shart");
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }
    if (typeof newPassword !== 'string') {
      setSnackbarMsg("Yangi parol satr bo'lishi kerak");
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }
    if (newPassword.length < 8 || newPassword.length > 32) {
      setSnackbarMsg("Parol uzunligi 8 dan 32 gacha bo'lishi kerak");
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    try {
      const payload = {
        email,
        otp,            
        new_password: newPassword, 
      };

      console.log("Reset so'rovi:", payload); 

      await axios.post('https://api.ashyo.fullstackdev.uz/auth/reset-password', payload);

      setSnackbarMsg("Parol muvaffaqiyatli o'zgartirildi.");
      setSnackbarSeverity('success');
      setSnackbarOpen(true);

      setOtp('');
      setNewPassword('');
      onClose();
    } catch (err: any) {
      setSnackbarMsg(err.response?.data?.message || "Parolni tiklashda xatolik");
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Parolni tiklash</DialogTitle>
        <DialogContent>
          <TextField
            label="Emailga kelgan kod kiriting:"
            fullWidth
            margin="dense"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            autoFocus
          />
          <TextField
            label="Yangi parolni kiriting:"
            type="password"
            fullWidth
            margin="dense"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Bekor qilish</Button>
          <Button onClick={handleReset} variant="contained" color="primary">
            Yuborish
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          variant="filled"
        >
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ResetPasswordModal;
