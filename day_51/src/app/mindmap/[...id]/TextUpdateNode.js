import { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";

const selected = {
  backgroundColor: "#BFC34A",
};

const unSelected = {
  backgroundColor: "#8bc34a",
};

const TextUpdateNode = ({ data: { label } }) => {
  const [name, setName] = useState(label);
  const [isFocus, setIsFocus] = useState(false);
  const [isDbFocus, setIsDbFocus] = useState(false);

  const onChange = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    setIsFocus(true);
  };
  const handleDoubleClick = () => {
    setIsDbFocus(true);
  };
  const handleBlur = () => {
    setIsDbFocus(false);
    setIsFocus(false);
  };

  return (
    <div
      className="text-update-node"
      onClick={handleClick}
      onBlur={handleBlur}
      style={isFocus ? selected : unSelected}
    >
      <Handle type="target" position={Position.Top} />
      <div>
        <input
          id="text"
          name="text"
          onChange={onChange}
          onDoubleClick={handleDoubleClick}
          className={isDbFocus ? "nodrag editable edit" : ""}
          value={name}
          readOnly={!isDbFocus}
        />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default TextUpdateNode;
