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
    price: '',
    stock: '',
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
      [name]: type === 'checkbox' ? checked : value,
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
    if (!formData.name || !formData.price || formData.images.length === 0) {
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
            <ReusableInput
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Product Name"
              required
            />
             <ReusableInput
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="description"
              required
            />
            <ReusableInput
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              required
            />
            <ReusableInput
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Stock Quantity"
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="is_available"
                checked={formData.is_available}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-green-500"
              />
              <span>Is Available</span>
            </label>
            <ReusableInput
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              placeholder="Company Name"
            />
            <ReusableSelect
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              options={['Nike', 'Puma', 'Adidas']}
              placeholder="Select Brand"
              required
            />
            <ReusableSelect
              name="category"
              value={formData.category}
              onChange={handleChange}
              options={['Men', 'Women']}
              placeholder="Select Category"
              required
            />
            <ReusableInput
              type="text"
              placeholder="Size (e.g., M, L, XL)"
              onChange={handleSizeChange}
            />
            <div>
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

        {/* Product Preview Sidebar */}
        <div className=" bg-gray-50 p-6 rounded-lg shadow-md min-w-[400px]">
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
