import { useState } from 'react';
import { useNavigate } from "react-router-dom"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const user = localStorage.getItem("name");
  const router = useNavigate();
  return (
    <div className="h-14 flex justify-between">
      <header className="px-4 lg:px-6 h-14 flex border-b-2 items-center justify-between w-full">
        <div className="flex items-center">
          <FlagIcon className="h-6 w-6" />
          <span className="font-semibold text-xl ml-2">KaTyM  App</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <div 
            className="rounded-full h-10 w-10 bg-slate-200 flex justify-center items-center mr-2 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <div className="flex flex-col justify-center h-full text-xl">
              {user[0]}
            </div>
          </div>
        </nav>
      </header>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="flex items-center justify-center  rounded-lg bg-gray-200  px-10 py-3 mx-auto ">
                    <div className="flex flex-col justify-center h-full text-xl">
                      {user}
                    </div>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">User Options</h3>
                    <div className="mt-2">
                      <button
                        onClick={() => {
                  
                          router('/update');
                        }}
                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-slate-600 text-base font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => {
                            //back to / home page and clear local storage
                            localStorage.clear();
                            router('/');
                        }}
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-slate-600 text-base font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-slate-600 text-base font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}
