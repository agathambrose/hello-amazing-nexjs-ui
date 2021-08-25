import Link from "next/link";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import Modal from "./Modal";

export const Layout = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      {/* component */}
      <div className="flex flex-row min-h-screen text-gray-800 bg-gray-100 font-poppins">
        <aside className="w-64 transition-transform duration-150 ease-in transform -translate-x-full bg-black sidebar md:shadow md:translate-x-0">
          <div className="flex items-center justify-center py-4 sidebar-header">
            <div className="inline-flex">
              <div className="inline-flex flex-row items-center">
                <Image
                  src="/images/brandlogo.png"
                  alt="brand"
                  width={100}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-6 sidebar-content">
            <ul className="flex flex-col w-full space-y-6">
              <li className="my-px">
                <Link href="/admin">
                  <a className="flex flex-row items-center px-3 text-center text-white bg-white bg-opacity-25 border rounded-b-lg rounded-r-lg h-14 hover:bg-gray-100 hover:text-black">
                    <span className="ml-3">Dashboard</span>
                  </a>
                </Link>
              </li>
              <li className="my-px">
                <Link href="/admin/songs-course">
                  <a className="flex flex-row items-center px-3 text-center text-white bg-white bg-opacity-25 border rounded-b-lg rounded-r-lg h-14 hover:bg-gray-100 hover:text-black">
                    <span className="ml-3">Songs | Course</span>
                  </a>
                </Link>
              </li>
              <li className="my-px">
                <Link href="/admin/user-management">
                  <a className="flex flex-row items-center px-3 text-center text-white bg-white bg-opacity-25 border rounded-b-lg rounded-r-lg h-14 hover:bg-gray-100 hover:text-black">
                    <span className="ml-3">User Management</span>
                  </a>
                </Link>
              </li>
              <li className="my-px">
                <Link href="/admin/user-subscriptions">
                  <a className="flex flex-row items-center px-3 text-center text-white bg-white bg-opacity-25 border rounded-b-lg rounded-r-lg h-14 hover:bg-gray-100 hover:text-black">
                    <span className="ml-3">User Subscriptions</span>
                  </a>
                </Link>
              </li>

              <li className="my-px">
                <button className="flex justify-center w-full">
                  <Link href="/">
                    <a className="flex flex-row items-center px-3 text-gray-300 rounded-lg h-14 hover:bg-gray-100 hover:text-gray-700">
                      <span className="flex items-center justify-center text-lg text-green-500">
                        <svg
                          fill="none"
                          strokeLineCap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <span className="ml-3">Logout</span>
                    </a>
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </aside>
        <main className="flex flex-col flex-grow -ml-64 transition-all duration-150 ease-in main md:ml-0">
          <header className="flex items-center justify-between px-4 py-4 bg-white shadow md:justify-end header">
            <button
              className="flex flex-row items-center text-2xl font-extrabold header-content md:hidden lg:hidden"
              onClick={handleShow}
            >
              <RiMenu3Fill />
            </button>
            <div>
              <Image
                src="/images/usericon.png"
                alt="admin"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          </header>
          <div className="flex flex-col flex-grow p-4 overflow-y-auto main-content">
            <div className="flex flex-col flex-grow mt-2">{children}</div>
          </div>
          <footer className="px-4 py-6 footer">
            <div className="footer-content">
              <p className="text-sm text-center text-gray-600">
                &copy; 2021 Hello Amazing
              </p>
            </div>
          </footer>
        </main>
      </div>
      <Modal show={show} setShow={setShow} />
    </div>
  );
};
