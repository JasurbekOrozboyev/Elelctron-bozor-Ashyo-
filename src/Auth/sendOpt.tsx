import React, { useState } from 'react';
import axios from 'axios';
import { Snackbar, Alert } from '@mui/material';

interface Props {
  email: string;
}

const SendOtp: React.FC<Props> = ({ email }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<'success' | 'error'>('success');

  const handleSendOtp = async () => {
    if (!email) {
      setMessage('Iltimos, avval email kiriting');
      setSeverity('error');
      setOpen(true);
      return;
    }

    console.log("Yuborilayotgan email:", email); 
    setLoading(true);
    setMessage('');
    try {
      await axios.post('https://api.ashyo.fullstackdev.uz/auth/send-otp', { email }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setMessage("Tasdiqlash kodi emailingizga yuborildi");
      setSeverity('success');
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'OTP yuborishda xatolik');
      setSeverity('error');
    } finally {
      setOpen(true);
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleSendOtp}
        disabled={loading || !email}
        className="bg-[#0F4A97] hover:bg-[#0980FF] text-white px-3 py-1 rounded disabled:opacity-50"
      >
        {loading ? 'Yuborilmoqda...' : 'Tasdiqlash kodini olish'}
      </button>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SendOtp;
