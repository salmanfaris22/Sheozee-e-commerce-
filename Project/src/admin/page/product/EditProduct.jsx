import { useState, useEffect } from "react";
import ReusableSelect from "../../components/common/selectInput";
import ReusableInput from "../../components/common/Input";
import { useGetProduct } from "../../../hooks/Product-Hoosk";
import { useParams } from "react-router-dom";
import { useEditsProduct } from "../../../hooks/admin-product-add";

const EditProduct = () => {
  const { id } = useParams();
  const { data } = useGetProduct(id);
  const { mutate } = useEditsProduct(id);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    is_available: true,
    company_name: "",
    brand: "",
    size: [],
    category: "",
    images: [],
  });

  const [newImageUrl, setNewImageUrl] = useState("");

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setProduct({
        ...product,
        [name]: checked,
      });
    } else if (name === "size") {    
        setProduct({
          ...product,
          size: [ value],
        });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  const handleAddImage = () => {
    if (newImageUrl) {
      const newImage = {
        id: product.images.length + 1,
        product_id: product.id,
        url: newImageUrl,
        is_main: false,
      };

      setProduct({
        ...product,
        images: [...product.images, newImage],
      });

      setNewImageUrl("");
    }
  };

  const handleRemoveImage = (imageId) => {
    const updatedImages = product.images.filter((image) => image.id !== imageId);
    setProduct({
      ...product,
      images: updatedImages,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    mutate(product);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1" htmlFor="name">
            Product Name
          </label>
          <ReusableInput
            type="text"
            name="name"
            value={product?.name || ""}
            onChange={handleChange}
            placeholder="Product Name"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1" htmlFor="description">
            Description
          </label>
          <ReusableInput
            type="text"
            id="description"
            name="description"
            value={product?.description || ""}
            onChange={handleChange}
            placeholder="Description"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1" htmlFor="price">
            Price
          </label>
             <ReusableInput
               type="number"
               id="price"
               name="price"
               value={product?.price || 0} 
               onChange={handleChange}
               className="border border-gray-300 p-2 rounded-md"
            />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1" htmlFor="stock">
            Stock
          </label>
               <ReusableInput
               type="number"
               id="stock"
               name="stock"
               value={product?.stock || 0}
               onChange={handleChange}
               className="border border-gray-300 p-2 rounded-md"
            />
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="is_available"
              name="is_available"
              checked={product?.is_available || false}
              onChange={handleChange}
              className="form-checkbox"
            />
            <label htmlFor="is_available" className="ml-2 text-sm">
              Available
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1" htmlFor="category">
            Category
          </label>
          <ReusableSelect
            name="category"
            value={product?.category || ""}
            onChange={handleChange}
            options={['Men', 'Women']}
            placeholder="Select Category"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1" htmlFor="company_name">
            Company Name
          </label>
               <ReusableInput
                type="text"
                id="company_name"
                name="company_name"
                value={product?.company_name || ""}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md"
            />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1" htmlFor="brand">
            Brand
          </label>
          <ReusableSelect
            name="brand"
            value={product?.brand || ""} 
            onChange={handleChange}
            options={['Nike', 'Puma', 'Adidas']}
            placeholder="Select Brand"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1" htmlFor="size">
            Size
          </label>
          <ReusableInput
            type="text"
            name="size"
            value={product?.size || ""} 
            placeholder="Size (e.g., M, L, XL)"
            onChange={handleChange}
          />
        </div>


          <label className="text-sm font-semibold mb-1" htmlFor="images">
            Product Images
          </label>
         {/* Product Images */}
         <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1" htmlFor="images">
            Product Images
          </label>
          {product?.images?.map((image, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={image.url}
                  alt={`Product Image ${index + 1}`}
                  className="w-20 h-20 object-cover mr-2"
                />
                <input
                  type="radio"
                  name="main_image"
                  checked={image.is_main}
                  onChange={(e) => {
                    const updatedImages = product?.images?.map((img) =>
                      img.id === image.id ? { ...img, is_main: e.target.checked } : img
                    );
                    setProduct({ ...product, images: updatedImages });
                  }}
                />
                <label className="ml-2 text-sm">Set as Main Image</label>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveImage(image.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Remove Image
              </button>
            </div>
          ))}
        </div>

        {/* Add New Image URL */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1" htmlFor="newImageUrl">
            Add New Image URL
          </label>
          <input
            type="text"
            id="newImageUrl"
            name="newImageUrl"
            value={newImageUrl || ""}
            onChange={(e) => setNewImageUrl(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Enter Image URL"
          />
          <button
            type="button"
            onClick={handleAddImage}
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Add Image
          </button>
        </div>

        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
