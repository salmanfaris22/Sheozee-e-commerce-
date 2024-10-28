

const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[100vh] w-[100%]  bg-black bg-opacity-30 fixed top-0 z-[9999999999]">
            <div className="animate-spin rounded-full border-t-4 border-b-4 border-gray-200 border-t-blue-600 w-16 h-16 mb-4"></div>
            <p className="text-lg text-gray-700">Loading...</p>
        </div>
    );
};

export default LoadingSpinner;
