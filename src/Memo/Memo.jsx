import React from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import "./Memo.scss";

export default function Memo() {
  return (
    <div className="memo-container" style={{ width: `${250}px`, height: `${300}px` }}>
      <div className="menu-header">
        <DragHandleIcon sx={{ cursor: "move", fontSize: "25px", float: "right" }} />
        <CloseIcon />
      </div>
      <textarea
        className="memo-text-area"
        defaultValue={"Enter memo here"}
        name="txt"
        placeholder="Enter memo here"
      ></textarea>
    </div>
  );
}
