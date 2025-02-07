import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
// import { fetchData } from "../redux/dataSlicer.jsx";
// import { useEffect } from 'react';

const UserDetails = () => {
    const { id } = useParams();
    const nav = useNavigate()

    //   const dispatch = useDispatch();
      const data = useSelector((state) => state.data.data);
      const goBack = () => {
        nav("/")
      }

      let user
      for(let i=0;i<data.length;i++) {
        if(data[i].id == id) {
            user = data[i];
            console.log(user);
        }    
      }

  return (
    <div className="w-full flex flex-col items-center mt-3 md:text-sm pl-1 pr-1">
        <button onClick={goBack} 
              className="bg-black text-white rounded px-4 py-2 back-btn">
                Back
        </button>
        <div>
            <h1 className="font-bold text-3xl">User Details</h1>
        </div>
      <table className="table-auto mt-5">
        <thead>
            <tr>
                <th className="border-2 px-4 py-2 ">Name</th>
                <th className="border-2 px-4 py-2">Email</th>
                <th className="border-2 px-4 py-2">Phone</th>
                <th className="border-2 px-4 py-2">Company Name</th>
                <th className="border-2 px-4 py-2">Website</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border-2 px-4 py-2">
                    {user.name}
                </td>
                <td className="border-2 px-4 py-2">
                    {user.email}
                </td>
                <td className="border-2 px-4 py-2">
                    {user.phone}
                </td>
                <td className="border-2 px-4 py-2">
                    {user.company.name}
                </td>
                <td className="border-2 px-4 py-2">
                    {user.website}
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserDetails