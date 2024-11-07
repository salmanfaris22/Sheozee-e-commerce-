import { Link } from "react-router-dom";
import { useAdminUserget, useUserBlockOrUnblock } from "../../../hooks/admin-user-hook";

const GetAlluser = () => {
  const { data } = useAdminUserget();
  const {mutate}= useUserBlockOrUnblock()


  const handleDeleteUser = (userId,status) => {
    console.log(`Deleting user with ID: ${userId}`);
    mutate({userId,status})
  };

 

  return (
    <div className="ml-[80px]  mt-7">
      {data?.map((user) => (
        <div key={user.id} className="bg-white font-bold p-4 grid grid-cols-4 rounded-lg mt-2 shadow-lg w-full hover:scale-105 transition-transform duration-300">
          <div className=" flex-col gap-2 mb-4 col-span-3 grid grid-cols-3">
            <h2 className="font-bold text-lg text-blue-600">
              {user.first_name} {user.last_name}
            </h2>
            <p><span className="font-semibold text-gray-500">Email:</span> {user.email}</p>
            <p><span className="font-semibold text-gray-500">Phone:</span> {user.phone}</p>
            <p>
              <span className="font-semibold text-gray-500">Active:</span>{" "}
              <span className={user.is_active ? "text-green-600" : "text-red-600"}>
                {user.is_active ? "Yes" : "No"}
              </span>
            </p>
            <p>
              <span className="font-semibold text-gray-500">Verified:</span>{" "}
              <span className={user.is_verified ? "text-green-600" : "text-red-600"}>
                {user.is_verified ? "Yes" : "No"}
              </span>
            </p>
            <p>
              <span className="font-semibold text-gray-500">Banned:</span>{" "}
              <span className={user.ban ? "text-red-600" : "text-green-600"}>
                {user.ban ? "Yes" : "No"}
              </span>
            </p>
            <p><span className="font-semibold text-gray-500">Created at:</span> {new Date(user.created_at).toLocaleDateString()}</p>
            {user.updated_at && (
              <p><span className="font-semibold text-gray-500">Updated at:</span> {new Date(user.updated_at).toLocaleDateString()}</p>
            )}
          </div>
          <div className="flex  justify-end gap-2  items-center ">
            <Link to={`/userInfo/${user.id}`}>
            <button

              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
              View User
            </button>
            </Link>
            
            <Link to={`/updateUser/${user.id}`}>
            <button
              className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600"
            >
              Update User
            </button>

            </Link>

            {!user?.ban ?  <button
              onClick={() => handleDeleteUser(user.id,"true")}
              className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
            >
              Block User
            </button> : <button
              onClick={() => handleDeleteUser(user.id,"false")}
              className="bg-black text-white p-2 rounded-lg hover:bg-black"
            >
              Unblock User
            </button> }
           
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetAlluser;
