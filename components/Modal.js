import Link from "next/link";
import { RiCloseFill } from "react-icons/ri";

const Modal = ({ show, setShow }) => {
  const handleClose = () => {
    setShow(false)
  }
  return (
    <>
      <div
        className={` ${
          show
            ? "fixed md:hidden inset-0 z-10 overflow-y-auto transition-all"
            : "hidden"
        }`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          {/* Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0" */}
          <div
            className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
            aria-hidden="true"
          ></div>

          {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          {/* <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    --> */}

          <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-black rounded-lg shadow-xl font-poppins sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="px-4 pt-5 pb-4 bg-black sm:p-6 sm:pb-4">
              <div className="flex justify-end text-lg text-white">
                <button onClick={handleClose}>
                  <RiCloseFill/>
                </button>
              </div>
              <div className="sm:flex sm:items-start">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
