import { Layout } from "../../components/Layout";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Dashboard = () => {
  return (
    <Layout>
      <div className="font-poppins">
        <div className="inline-flex">
          <h1 className="px-4 py-2 font-bold text-white bg-green-500 rounded">
            Dashboard
          </h1>
        </div>
        <div className="flex items-center justify-center mx-auto mt-4">
          <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
            <li className="py-8 mb-4 bg-white rounded-lg shadow-md md:mb-0 px-14">
              <div className="flex flex-col items-center space-y-3 text-center">
                <p className="text-base font-medium">Total Number of Users</p>
                <p className="text-xl font-extrabold">95102 Users</p>
              </div>
            </li>
            <li className="py-8 mb-4 bg-white rounded-lg shadow-md md:mb-0 px-14">
              <div className="flex flex-col items-center space-y-3 text-center">
                <p className="text-base font-medium">Users Subscriptions</p>
                <p className="text-xl font-extrabold">Manage subscriptions</p>
              </div>
            </li>
            <li className="py-8 mb-4 bg-white rounded-lg shadow-md md:mb-0 px-14">
              <div className="flex flex-col items-center space-y-3 text-center">
                <p className="text-base font-medium">Songs/Albums Uploaded</p>
                <p className="text-xl font-extrabold">
                  9954 Songs | 502 Albums
                </p>
              </div>
            </li>
            <li className="flex items-center justify-center py-8 mb-4 bg-white rounded-lg shadow-md md:mb-0 px-14">
              <div className="flex flex-col items-center space-y-3 text-center">
                <p className="text-base font-medium">Add New Song/Course</p>
                <button className="text-xl font-extrabold">
                  <BsFillPlusCircleFill />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
