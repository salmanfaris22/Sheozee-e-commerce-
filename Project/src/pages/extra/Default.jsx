/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom';

const Default = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Go back to Home
            </Link>
        </div>
    );
};

export default Default;
