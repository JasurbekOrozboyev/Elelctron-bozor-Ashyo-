import React, { useState } from 'react';
import axios from 'axios';
import { Snackbar, Alert } from '@mui/material';

interface Props {
  email: string;
  onSuccess: () => void;
}

const VerifyOtp: React.FC<Props> = ({ email, onSuccess }) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<'success' | 'error'>('success');

  const handleVerify = async () => {
    if (!otp) {
      setMessage('Iltimos, tasdiqlash kodini kiriting');
      setSeverity('error');
      setOpen(true);
      return;
    }

    setLoading(true);
    setMessage('');
    try {
      await axios.post('https://api.ashyo.fullstackdev.uz/auth/verify-otp', { email, otp });
      setMessage('Email muvaffaqiyatli tasdiqlandi');
      setSeverity('success');
      setOpen(true);
      onSuccess();
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Kodni tasdiqlashda xatolik');
      setSeverity('error');
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Tasdiqlash kodini kiriting"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border p-2 rounded mr-2"
        maxLength={6}
      />
      <button
        type="button"
        onClick={handleVerify}
        disabled={loading}
        className="bg-[#0F4A97] hover:bg-[#0980FF] text-white px-3 py-1 rounded disabled:bg-gray-400"
      >
        {loading ? 'Tekshirilmoqda...' : 'Tasdiqlash'}
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

export default VerifyOtp;
