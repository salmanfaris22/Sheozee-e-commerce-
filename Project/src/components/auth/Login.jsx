import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import LoginImg from '../../assets/pexels-craytive-1456706.jpg'; // Update the path to your image
import { useUserLogineAuth } from '../../hooks/AuthHook';

// Validation schema using Yup
const schema = yup.object().shape({
  email: yup.string().required('Email is required').email('Must be a valid email'),
  password: yup.string().required('Password is required').min(6, 'Minimum 6 characters'),
});

const LoginPage = () => {
  const{mutate}=useUserLogineAuth()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    mutate(data)
  };

  return (
    <div
      className="flex justify-center items-center m-auto fixed top-0 z-[999] h-[100vh] w-[100vw]"
      style={{ background: `url(${LoginImg})`, backgroundSize: 'cover' }}
    >
      <div className="relative flex justify-center items-center h-full w-full backdrop-blur-sm p-4">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col max-w-[700px] w-full mx-auto p-6 bg-white rounded-lg shadow-lg"> {/* Changed background to white */}
          <h1 className="text-2xl font-bold mb-4 text-center text-black">Login</h1> {/* Changed text color to black */}
          <div className='grid grid-cols-2 gap-4'>
            <div className='rounded-lg p-3'>
              <img src={LoginImg} className='rounded-lg' alt="" />
            </div>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col">
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Email"
                  className={`border bg-white placeholder:text-black rounded-md p-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} // Changed bg color to white
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className="flex flex-col">
                <input
                  {...register('password')}
                  type="password"
                  placeholder="Password"
                  className={`border bg-white placeholder:text-black rounded-md p-2 ${errors.password ? 'border-red-500' : 'border-gray-300'}`} // Changed bg color to white
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
                >
                  Login
                </button>
                <Link to="/" className="text-blue-500 hover:underline text-center">
                  <button type="button" className="w-full bg-gray-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-gray-600 transition duration-200">
                    Back
                  </button>
                </Link>
              </div>
              <p className="text-center text-black mt-4"> {/* Changed text color to black */}
                Dont have an account? <Link to="/register" className="text-blue-300 hover:underline">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
