import { useState } from 'react';
import { AdminProducrAdd } from '../../../hooks/admin-product-add';
import ReusableInput from '../../components/common/Input';
import ReusableSelect from '../../components/common/selectInput';
import ReusableImageInput from '../../components/common/imageinput';

const AddProduct = () => {
  const { mutate } = AdminProducrAdd();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    is_available: false,
    company_name: '',
    brand: '',
    size: [],
    category: '',
    images: [{ url: '', is_main: false }],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : name === 'price' || name === 'stock' ? Number(value) : value,
    }));
  };

  const handleSizeChange = (e) => {
    const sizes = e.target.value.split(',').map((size) => size.trim());
    setFormData((prevData) => ({ ...prevData, size: sizes }));
  };

  const handleImageChange = (index, value) => {
    const updatedImages = formData.images.map((img, i) =>
      i === index ? { ...img, url: value } : img
    );
    setFormData((prevData) => ({ ...prevData, images: updatedImages }));
  };

  const addImageField = () => {
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, { url: '', is_main: false }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData?.price || formData?.images?.length === 0) {
      alert('Please fill in all required fields.');
      return;
    }
    const updatedFormData = {
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock, 10),
    };
    mutate(updatedFormData);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add New Product</h2>
      <div className="flex space-x-8">
        <div className="w-full">
          <form onSubmit={handleSubmit} className="space-y-6 min-w-[400px]">

            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Product Name</label>
              <ReusableInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Product Name"
                required
              />
            </div>
            

            <div>
              <label htmlFor="description" className="block mb-1 font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Product Description"
                rows="4"
                className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-green-300"
              />
            </div>
            

            <div>
              <label htmlFor="price" className="block mb-1 font-medium">Price</label>
              <ReusableInput
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                required
              />
            </div>


            <div>
              <label htmlFor="stock" className="block mb-1 font-medium">Stock Quantity</label>
              <ReusableInput
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="Stock Quantity"
              />
            </div>


            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="is_available"
                checked={formData.is_available}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-green-500"
              />
              <label htmlFor="is_available" className="font-medium">Is Available</label>
            </div>


            <div>
              <label htmlFor="company_name" className="block mb-1 font-medium">Company Name</label>
              <ReusableInput
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                placeholder="Company Name"
              />
            </div>


            <div>
              <label htmlFor="brand" className="block mb-1 font-medium">Brand</label>
              <ReusableSelect
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                options={['Nike', 'Puma', 'Adidas',"New Balance"]}
                placeholder="Select Brand"
                required
              />
            </div>


            <div>
              <label htmlFor="category" className="block mb-1 font-medium">Category</label>
              <ReusableSelect
                name="category"
                value={formData.category}
                onChange={handleChange}
                options={['Men', 'Women']}
                placeholder="Select Category"
                required
              />
            </div>


            <div>
              <label htmlFor="size" className="block mb-1 font-medium">Size</label>
              <ReusableInput
                type="text"
                placeholder="Size (e.g., M, L, XL)"
                onChange={handleSizeChange}
              />
            </div>


            <div>
              <label className="block mb-1 font-medium">Images</label>
              {formData.images.map((image, index) => (
                <ReusableImageInput
                  key={index}
                  value={image.url}
                  onChange={(e) => handleImageChange(index, e.target.value)}
                  onAddImage={addImageField}
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
            >
              Add Product
            </button>
          </form>
        </div>


        <div className="bg-gray-50 p-6 rounded-lg shadow-md min-w-[400px]">
          <h3 className="text-xl font-semibold text-center mb-4">Product Preview</h3>
          <div className="mb-4">
            <h4 className="text-lg font-medium">Product Name: {formData.name || 'Product Name'}</h4>
            <p className="text-sm text-gray-600">Description: {formData.description || 'No description'}</p>
          </div>
          <div className="mb-4">
            <strong>Price:</strong> ${formData.price || '0.00'}
          </div>
          <div className="mb-4">
            <strong>Available Sizes:</strong> {formData.size.join(', ') || 'No sizes selected'}
          </div>
          <div>
            <strong>Images:</strong>
            <div className="flex space-x-2 mt-2">
              {formData.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url || '#'}
                  alt={`Product image ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
