import { useState, useEffect } from 'react';
import SendOtp from '../Auth/sendOpt';
import VerifyOtp from '../Auth/verifyOpt';
import { Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [email, setEmail] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSuccess = () => {
    setIsVerified(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/'); 
  };

  return (
    <div className="max-w-[1440px] mx-auto mt-10 p-4 rounded shadow">
      <Link to="/">
        <p className="text-[#B6BABF]">
          Bosh sahifaga /
        </p>
      </Link>
      
      <h2 className="text-2xl font-semibold mb-4">Emailni tasdiqlash</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Email:</label>
        <input type="email" value={email} disabled className="w-full border p-2 rounded bg-gray-100 cursor-not-allowed"/>
      </div>

      <SendOtp email={email} />

      {!isVerified && email && (
        <VerifyOtp email={email} onSuccess={handleSuccess} />
      )}

      {isVerified && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
          ✅ Emailingiz muvaffaqiyatli tasdiqlandi!
        </div>
      )}

      <button onClick={handleLogout} className="mt-6 px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white font-bold">
        Log Out
      </button>
    </div>
  );
};

export default ProfilePage;
