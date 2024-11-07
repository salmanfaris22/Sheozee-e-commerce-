import { useEffect, useState } from "react";
import { useGetUserById, useUpdateUserInfo } from "../../../hooks/admin-user-hook";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../../components/common/Loading";

const UpdateUser = () => {
  const { id } = useParams();
  const { data: user, isLoading } = useGetUserById(id);
  const { mutate } = useUpdateUserInfo(id);

  // Initialize state with default values
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    is_active: false,
    is_verified: false,
    ban: false,
  });

  useEffect(() => {
    if (user) {
      setUserData({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
        phone: user.phone || "",
        is_active: user.is_active || false,
        is_verified: user.is_verified || false,
        ban: user.ban || false,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(userData);
    console.log("Updated User Data:", userData);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-lg mx-auto p-4 flex justify-center items-center w-[100%] h-[100vh]">
     <div className="p-2  rounded-lg shadow-md">
     <h2 className="text-2xl font-semibold mb-4">Update User</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-[600px] p-2  rounded-lg">
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1" htmlFor="first_name">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={userData.first_name}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1" htmlFor="last_name">
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={userData.last_name}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1" htmlFor="phone">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="ban"
              name="ban"
              checked={userData.ban}
              onChange={handleChange}
              className="form-checkbox"
            />
            <label htmlFor="ban" className="ml-2 text-sm">
              Ban User
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="is_verified"
              name="is_verified"
              checked={userData.is_verified}
              onChange={handleChange}
              className="form-checkbox"
            />
            <label htmlFor="is_verified" className="ml-2 text-sm">
              Verified
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="is_active"
              name="is_active"
              checked={userData.is_active}
              onChange={handleChange}
              className="form-checkbox"
            />
            <label htmlFor="is_active" className="ml-2 text-sm">
              Active
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Update User
        </button>
      </form>
     </div>
    </div>
  );
};

export default UpdateUser;
