import React, { useState } from 'react';
import axios from 'axios';
import { Snackbar, Alert } from '@mui/material';

interface RegisterData {
  fullname: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterData>({
    fullname: '',
    email: '',
    password: ''
  });

  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    try {
      const response = await axios.post('https://api.ashyo.fullstackdev.uz/auth/register', formData);

      const { accessToken, user } = response.data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('fullname', user.fullname);
      localStorage.setItem('email', formData.email); 

      setSuccessMsg("Ro'yhatdan muvaffaqiyatli o'tdingiz!");
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
      <h2 className="text-2xl font-bold mb-4">Ro'yxatdan o'tish</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullname"
          placeholder="FullName"
          value={formData.fullname}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button type="submit" className="px-4 py-2 rounded text-white bg-[#0F4A97] hover:bg-[#0980FF]">
          Ro'yxatdan o'tish
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

export default Register;
