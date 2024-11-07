
import { useParams } from 'react-router-dom';
import { useGetUserById } from '../../../hooks/admin-user-hook';



const UserInfo = () => {

   const{id}= useParams()
   const{data:user} = useGetUserById(id)
console.log(user);
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg mt-4 max-w-3xl">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        {user?.first_name} {user?.last_name}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <p><span className="font-semibold text-gray-700">Email:</span> {user?.email}</p>
          <p><span className="font-semibold text-gray-700">Phone:</span> {user?.phone}</p>
          <p>
            <span className="font-semibold text-gray-700">Active:</span> 
            <span className={user?.is_active ? "text-green-600" : "text-red-600"}>
              {user?.is_active ? "Yes" : "No"}
            </span>
          </p>
          <p>
            <span className="font-semibold text-gray-700">Verified:</span> 
            <span className={user?.is_verified ? "text-green-600" : "text-red-600"}>
              {user?.is_verified ? "Yes" : "No"}
            </span>
          </p>
          <p>
            <span className="font-semibold text-gray-700">Banned:</span> 
            <span className={user?.ban ? "text-red-600" : "text-green-600"}>
              {user?.ban ? "Yes" : "No"}
            </span>
          </p>
          <p>
            <span className="font-semibold text-gray-700">Created At:</span> 
            {new Date(user?.created_at).toLocaleDateString()}
          </p>
          {user?.updated_at && (
            <p>
              <span className="font-semibold text-gray-700">Updated At:</span> 
              {new Date(user?.updated_at).toLocaleDateString()}
            </p>
          )}
        </div>

        {/* Display Cart Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Cart Information</h3>
          <p><span className="font-semibold">Cart ID:</span> {user?.cart?.ID || "N/A"}</p>
          <p><span className="font-semibold">Created At:</span> {new Date(user?.cart?.created_at).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Display Orders */}
      <h3 className="text-xl flex font-bold text-gray-800 mt-6">Orders</h3>
      <div className="overflow-auto flex h-[300px] border gap-3 p-2">
  {user?.orders?.length > 0 ? (
    user?.orders?.map((order) => (
      <div key={order.id} className="border-b pb-4 min-w-[300px] shadow-md p-3">
        <p><span className="font-semibold w-[300px] text-gray-700">Order ID:</span> {order?.id}</p>
        <p><span className="font-semibold text-gray-700">Total Price:</span> ${order.total_Price}</p>
        <p>
          <span className="font-semibold text-gray-700">Status:</span> 
          <span className={`ml-2 ${order?.status === "pending" ? "text-yellow-600" : order?.status === "canceled" ? "text-red-600" : "text-green-600"}`}>
            {order?.status}
          </span>
        </p>
        <p><span className="font-semibold text-gray-700">Created At:</span> {new Date(order?.created_at).toLocaleDateString()}</p>

      <div className='p-2'>
      {order?.addresses?.length > 0 ? (
          <div className="mt-2">
            <p><span className="font-semibold text-gray-700">City:</span> {order?.addresses[0].city}</p>
            <p><span className="font-semibold text-gray-700">Street:</span> {order?.addresses[0].street}</p>
            <p><span className="font-semibold text-gray-700">State:</span> {order?.addresses[0].state}</p>
            <p><span className="font-semibold text-gray-700">Zip Code:</span> {order?.addresses[0].zip_code}</p>
            <p><span className="font-semibold text-gray-700">Country:</span> {order?.addresses[0].country}</p>
          </div>
        ) : (
          <p className="text-gray-500">No address available</p>
        )}
      </div>
      </div>
    ))
  ) : (
    <p className="text-gray-500">No orders available</p>
  )}
</div>



      
    </div>
  );
};

export default UserInfo;
