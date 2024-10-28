import img1 from "../assets/manC.webp";
import img2 from "../assets/WomenC.webp";
import img3 from "../assets/boot.webp";
import img4 from "../assets/Kids’ Shoes.webp";
import MyButton from "../components/common/Botton";

const categories = [
  { name: "Men", img: img1 },
  { name: "Women", img: img2 },
  { name: "Running", img: img3 },
  { name: "Kids", img: img4 },
];

const Categories = () => {
  return (
    <div className="p-4">
      <div className="font-bold text-3xl text-white p-4">Categories</div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-6 overflow-auto">
        {categories.map((category, index) => (
          <div key={index} data-aos="flip-left">
            <div className="relative h-[300px] bg-zinc-800 shadow-md rounded-lg overflow-hidden group">
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-full object-cover rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <MyButton
                  label={category.name}
                  onClick={() => console.log("Clicked", category.name)}
                  type={"button"}
                  className="text-white hover:bg-gray-300 hover:text-black bg-gray-700 px-4 py-2 rounded-md"
                />
              </div>
            </div>
            <div className="mt-2">
              <MyButton
                label={category.name}
                onClick={() => console.log("Clicked", category.name)}
                type={"button"}
                className="text-white bg-gray-700 px-4 py-2 rounded-md w-full hover:bg-gray-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
