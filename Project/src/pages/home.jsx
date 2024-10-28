import ImgMain from "../assets/main.webp";
import NikeImg from "../assets/nikeMian.webp";
import JorImg from "../assets/jordan.webp";
import img from '../assets/mainkeBRand.jpg';
import MyButton from "../components/common/Botton";
import Categories from "./Categories";
import ProductList from "../components/layout/SellingList";

const Home = () => {
  return (
    <div className="mt-[80px] bg-black text-white min-h-screen">
      <div className="p-4">
        <div
          className="relative grid shadow-sm min-h-[500px] rounded-lg m-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="flex p-4 flex-col justify-center items-center text-center md:text-left bg-gray-900 bg-opacity-0 rounded-lg transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Discover the Best in Athletic Wear
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <MyButton
                label={"Explore More"}
                onClick={() => console.log("Explore More")}
                type={"button"}
                className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-800"
              />
              <MyButton
                label={"Shop Now"}
                onClick={() => console.log("Shop Now")}
                type={"button"}
                className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-800"
              />
            </div>
          </div>
        </div>
      </div>

      <Categories />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-4">
        {/* Main Image Section */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800">
          <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" src={ImgMain} alt="Main" />
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <MyButton
              label={"Explore"}
              onClick={() => console.log("Explore Main")}
              type={"button"}
              className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-800"
            />
          </div>
        </div>

        {/* Nike Image Section */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800">
          <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" src={NikeImg} alt="Nike" />
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <MyButton
              label={"Explore"}
              onClick={() => console.log("Explore Nike")}
              type={"button"}
              className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-800"
            />
          </div>
        </div>

        {/* Jordan Image Section */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800">
          <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" src={JorImg} alt="Jordan" />
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <MyButton
              label={"Explore"}
              onClick={() => console.log("Explore Jordan")}
              type={"button"}
              className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-800"
            />
          </div>
        </div>
      </div>
      
      <ProductList />
    </div>
  );
};

export default Home;
