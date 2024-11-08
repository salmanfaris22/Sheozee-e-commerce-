import { Link } from "react-router-dom";
import aboutImg from "../../assets/main2.jpg";

const About = () => {
  return (
    <div className="relative h-1/2 p-4 bg-white shadow-md rounded-lg overflow-hidden group md:grid md:grid-cols-2">
      <img 
        src={aboutImg} 
        alt="About" 
         data-aos="fade-right"
        className="w-full h-64 md:h-full object-cover rounded-md " 
      />
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4" data-aos="fade-left">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>
          <p className="text-gray-600 mb-6">
            Selected materials designed for comfort and sustainability. Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget auctor nec sed elit nunc, magna non urna amet ac neque ut quam enim pretium risus gravida ullamcorper adipiscing at ut magna.
          </p>
          <Link to="/more-info" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;