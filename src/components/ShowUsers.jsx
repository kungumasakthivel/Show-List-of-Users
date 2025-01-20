import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/dataSlicer.jsx";
import { Link } from 'react-router-dom';

const ShowUsers = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full flex flex-col items-center mt-3">
      <h1 className="font-bold text-3xl">Users</h1>
      <table className="table-auto mt-5">
        <thead>
            <tr>
              <th className="border-2 px-4 py-2 ">Name</th>
              <th className="border-2 px-4 py-2">Email</th>
              <th className="border-2 px-4 py-2">City</th>
            </tr>
        </thead>
        <tbody>
            {data.map((user) => (          
              <tr key={user.id}>
                  <td className="border-2 px-4 py-2">
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                  </td>
                  <td className="border-2 px-4 py-2">
                    <Link to={`/user/${user.id}`}>{user.email}</Link>
                  </td>
                  <td className="border-2 px-4 py-2">
                    <Link to={`/user/${user.id}`}>{user.address.city}</Link>
                  </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowUsers;
