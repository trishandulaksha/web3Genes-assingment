import React, { useEffect, useState } from "react";
import { userAPI } from "../../../API/userApi";
import { UserData } from "../../../Utils/Types/InputFieldTypes";

function UserListPage() {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userAPI.getUserDetails("getusersdata");
        setUserData(response.data);
      } catch (error) {
        setError("Failed to fetch user data");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex h-screen ">
        <div className="relative z-10 w-full m-8 mt-32 bg-white shadow-2xl shadow-gray-500">
          <div className="items-center justify-center mt-6 mx-11">
            <h1 className="text-2xl font-bold text-gray-800">User List</h1>
            {error && <p>{error}</p>}
            <div className="mt-8">
              <table className="w-full text-center ">
                <thead>
                  <tr className="p-4 bg-slate-300">
                    <th className="p-4 mx-4">First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Contact Number</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user) => (
                    <tr key={user._id} className="border-b-2 ">
                      <td className="p-4 mx-4">{user.basic_info.first_name}</td>
                      <td>{user.basic_info.last_name}</td>
                      <td>{user.basic_info.dob}</td>
                      <td>{user.basic_info.gender}</td>
                      <td>{user.contact_info.mobile_number}</td>
                      <td>{user.contact_info.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserListPage;
