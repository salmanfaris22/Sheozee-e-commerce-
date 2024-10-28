import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import LoginImg from '../../assets/pexels-craytive-1456706.jpg'; // Update the path to your image

// Validation schema using Yup
const schema = yup.object().shape({
  firstName: yup.string().required('First name is required').min(2, 'Minimum 2 characters'),
  lastName: yup.string().required('Last name is required').min(2, 'Minimum 2 characters'),
  phone: yup.string().required('Phone number is required').matches(/^[0-9]{10}$/, 'Must be a valid phone number'),
  email: yup.string().required('Email is required').email('Must be a valid email'),
  password: yup.string().required('Password is required').min(6, 'Minimum 6 characters'),
});

const RegistrationPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission (e.g., API call)
  };

  return (
    <div
      className="flex justify-center items-center m-auto fixed top-0 z-[99999] h-[100%] w-[100%]"
      style={{ background: `url(${LoginImg})`, backgroundSize: 'cover' }}
    >
      <div className="relative flex justify-center items-center h-full w-full backdrop-blur-sm p-4">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col max-w-4xl w-full mx-auto p-6 bg-black rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
          <div className='grid grid-cols-2 gap-4'>
            <div className='rounded-lg p-3'>
              <img src={LoginImg} className='rounded-lg' alt="" />
            </div>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col">
                <input
                  {...register('firstName')}
                  placeholder="First Name"
                  className={`border bg-black placeholder:text-white text-white rounded-md p-2 ${errors.firstName ? 'border-red-500' : 'border-gray-900'}`}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
              </div>
              <div className="flex flex-col">
                <input
                  {...register('lastName')}
                  placeholder="Last Name"
                  className={`border bg-black placeholder:text-white rounded-md p-2 ${errors.lastName ? 'border-red-500' : 'border-gray-900'}`}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
              </div>
              <div className="flex flex-col">
                <input
                  {...register('phone')}
                  placeholder="Phone Number"
                  className={`border bg-black placeholder:text-white rounded-md p-2 ${errors.phone ? 'border-red-500' : 'border-gray-900'}`}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>
              <div className="flex flex-col">
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Email"
                  className={`border bg-black placeholder:text-white rounded-md p-2 ${errors.email ? 'border-red-500' : 'border-gray-900'}`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className="flex flex-col">
                <input
                  {...register('password')}
                  type="password"
                  placeholder="Password"
                  className={`border bg-black placeholder:text-white rounded-md p-2 ${errors.password ? 'border-red-500' : 'border-gray-900'}`}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>
              <div className='flex justify-between'>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
              >
                Register
              </button>

              <Link to="/" className="text-blue-500 hover:underline text-center ">
                <button type="button" className="w-full bg-gray-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-gray-600 transition duration-200">
                  Back
                </button>
              </Link>
              </div>
            
              <p className="text-center text-white mt-4">
                Already have an account? <Link to="/login" className="text-blue-300 hover:underline">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
