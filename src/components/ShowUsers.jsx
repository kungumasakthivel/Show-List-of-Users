import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/dataSlicer.jsx";
import { Link } from 'react-router-dom';

const ShowUsers = () => {
  const dispatch = useDispatch();
  let { data, isLoading, error } = useSelector((state) => state.data);

  const [search, setSearch] = useState('');
  let users = data 
  let sData;
  
  if (search.length == 0) {
    sData = data;
  } else if (search.length > 0) {
    sData = data.filter(user => {
      if (user.name.includes(search)) {
        return user;
      }
    })
    console.log(data)
  }
  users = sData

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) return <div className="text-3xl font-bold h-dvh mt-20 flex flex-col text-center">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full flex flex-col items-center mt-3 md:text-sm pl-1 pr-1">
      <h1 className="font-bold text-3xl">Users</h1>
      <div className='w-full flex justify-center items-center mt-3'>
        <input 
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 px-4 py-2 rounded-xl w-2/12 max-sm:w-6/12"
        />
      </div>
      <table className="table-auto mt-5">
        <thead>
            <tr>
              <th className="border-2 px-4 py-2">Name</th>
              <th className="border-2 px-4 py-2">Email</th>
              <th className="border-2 px-4 py-2">City</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (          
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
