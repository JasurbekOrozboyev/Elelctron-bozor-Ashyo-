import React, { useState } from 'react';
import axios from 'axios';
import { Snackbar, Alert } from '@mui/material';

const SendOtp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

   try {
  await axios.post('https://api.ashyo.fullstackdev.uz/auth/send-otp', { email });
  
  setSuccessMsg('OTP muvaffaqiyatli yuborildi. Iltimos, emailingizni tekshiring.');
  setOpen(true);
} catch (err: any) {
  setError(err.response?.data?.message || 'Xatolik yuz berdi');
  setOpen(true);
}

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">OTP yuborish</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email manzilingiz"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          OTP yuborish
        </button>
      </form>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity={successMsg ? "success" : "error"} variant="filled">
          {successMsg || error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SendOtp;
