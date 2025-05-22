import React, { useState } from 'react';
import axios from 'axios';
import { Snackbar, Alert } from '@mui/material';
import ResetPasswordModal from './ResetPasswordModal';

interface LoginData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginData>({ email: '', password: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [resetModalOpen, setResetModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSnackbarMsg('');
    setSnackbarOpen(false);

    try {
      const response = await axios.post('https://api.ashyo.fullstackdev.uz/auth/login', formData);
      const { accessToken, user } = response.data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('fullname', user.fullname);
      localStorage.setItem('email', formData.email);

      setSnackbarMsg("Tizimga muvaffaqiyatli kirdingiz!");
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (err: any) {
      setSnackbarMsg(err.response?.data?.message || "Login xato");
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleForgotPassword = async () => {
    if (!formData.email) {
      setSnackbarMsg("Iltimos, email manzilni kiriting");
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    try {
      await axios.post('https://api.ashyo.fullstackdev.uz/auth/forgot-password', {
        email: formData.email
      });

      setSnackbarMsg("Parol tiklash uchun kod emailingizga yuborildi.");
      setSnackbarSeverity('success');
      setSnackbarOpen(true);

      setResetModalOpen(true);
    } catch (err: any) {
      setSnackbarMsg(err.response?.data?.message || "Parol tiklashda xatolik");
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
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Tizimga kirish</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="password" name="password" placeholder="Parol" value={formData.password} onChange={handleChange} className="w-full border p-2 rounded" required />

        <div className="flex justify-between items-center">
          <button type="submit" className="bg-[#0F4A97] hover:bg-[#0980FF] text-white px-4 py-2 rounded">
            Kirish
          </button>
          <button type="button" onClick={handleForgotPassword} className="text-sm text-blue-600 hover:underline">
            Parolni unutdingizmi?
          </button>
        </div>
      </form>

      <ResetPasswordModal
        email={formData.email}
        open={resetModalOpen}
        onClose={() => setResetModalOpen(false)}
      />

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
    </div>
  );
};

export default Login;
