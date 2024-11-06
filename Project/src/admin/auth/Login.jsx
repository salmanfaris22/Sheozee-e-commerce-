import  { useState } from 'react';
import { useAdminLogineAuth } from '../../hooks/admin-auth-';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);


   const {mutate}=useAdminLogineAuth()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }
    mutate({email,password})
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
      {message && (
        <div
          className={`p-2 mb-4 text-white ${
            message.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } rounded`}
        >
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        //   disabled={loginMutation.isLoading}
        >
                Login
        </button>
      </form>
    </div>
  );
};

export default Login;
