import React from "react";
import { useGlobalContext } from "../../Context/provider";
import UpdateModal from "../Modals/UpdateModal";

const AddSpaceCard = ({Title,Description,noteId}) => {
  const {deleteTask,updateModal,setUpdateModal,setNewTask} = useGlobalContext();
  return (
    <div className="w-[45%] h-[25vh] border rounded border-gray-300 flex justify-between">
      <div className="w-[40%] h-[25vh]  flex flex-col items-center justify-center gap-1 mx-3">
        <div className="w-[90%] h-[20%]">
          <h1 className="text-2xl">{Title}</h1>
        </div>

        <div className="w-[90%] h-[60%] text-sm">
          <span>{Description}</span>
        </div>
      </div>

      <div className="w-[3vw] h-[10vh] flex flex-col justify-center items-center gap-5 mt-3">
      <i className="fa-solid fa-trash-can fa-xl cursor-pointer" onClick={(e) => {deleteTask(e,noteId)}}></i>
      <i class="fa-solid fa-pen-to-square fa-xl cursor-pointer" onClick = {() => {
        setUpdateModal(!updateModal)
        setNewTask({
          Title,
          Description
        })

      }}></i>
      </div>
      {updateModal && <UpdateModal noteId = {noteId}/>}
    </div>
  );
};

export default AddSpaceCard;
