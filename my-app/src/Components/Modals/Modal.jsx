import React from "react";
import { useGlobalContext } from "../../Context/provider";

const Modal = () => {

    const {modal,setModal,fetchNewTask,addNewTask,newTask} = useGlobalContext();

  return (
    <>
      <main id="content" role="main" className="w-full max-w-md mx-auto p-6 absolute">
        <div className="mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 ">
                Add Task
              </h1>
            </div>

            <div className="mt-5">
              <form onSubmit={addNewTask}>
                <div className="grid gap-y-4 justify-items-center">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold ml-1 mb-2 "
                    >
                      Title
                    </label>
                    <div className="w-[19vw]">
                      <input
                        onChange={fetchNewTask}
                        value={newTask.Title}
                        name = 'Title'
                        type="text"
                        className="py-3 px-4 block border-2 w-[90%] border-gray-200 rounded-md text-sm shadow-sm focus:outline-none"
                        aria-describedby="email-error"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold ml-1 mb-2 "
                    >
                      Description
                    </label>
                    <div className="w-[19vw]">
                      <textarea
                        onChange={fetchNewTask}
                        value={newTask.Description}
                        name="Description"
                        className="py-3 px-4 block border-2 w-[90%] border-gray-200 rounded-md text-sm shadow-sm focus:outline-none"
                        aria-describedby="email-error"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold ml-1 mb-2 "
                    >
                      Tag
                    </label>
                    <div className="w-[19vw]">
                      <input
                        onChange={fetchNewTask}
                        name="Tag"
                        value={newTask.Tag}
                        type="text"
                        className="py-3 px-4 block border-2 w-[90%] border-gray-200 rounded-md text-sm shadow-sm focus:outline-none"
                        aria-describedby="email-error"
                        placeholder="general"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-4 h-[5vh] w-[6vw] inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Modal;
