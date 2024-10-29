

import img from '../assets/newbalance bradns.jpg';
import img2 from '../assets/NIkeBrand.jpg';
import img3 from '../assets/Reebookbradns.webp';
import img4 from '../assets/Puma-tout bradns.webp';
import img5 from '../assets/Adids.jsx.jpg';

const Brands = () => {
  const brands = [
    { img: img, name: "New Balance",  },
    { img: img2, name: "Nike",  },
    { img: img3, name: "Reebok", },
    { img: img4, name: "Puma",  },
    { img: img5, name: "Adidas", },
  ];

  return (
    <div className="overflow-auto h-screen">
      <div className="flex overflow-x-auto bg-white">
        {brands.map((brand, i) => (
          <div key={i} className="relative h-[100vh] w-[300px] md:w-[400px] flex-shrink-0 bg-black  opacity-black">

            <img src={brand.img} className="h-[100vh] w-full object-cover hover:opacity-50 hover:p-7 transform  duration-300" alt={brand.name} />
            <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2">

                <button className="fonr-bold text-2xl  px-4 py-2 w-[300px] h-[50px] bg-black text-white   hover:bg-white hover:text-black hover:border-black hover:border transition duration-300">
                  Shop Now
                </button>

            </div>
            <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2">
         
                <button className="fonr-bold text-2xl px-4 py-2 w-[300px] h-[50px] bg-white text-black  hover:bg-black hover:text-white hover:border-white hover:border transition duration-300">
                  {brand.name}
                </button>
           
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;