import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVATE" });
  };

  const handleAdd = () => {
   
    dispatch({ type: "ADD", payload: {
        num: inputElement.current.value
    }});
    num: inputElement.current.value ="";
  };

  const handleSubstract = () => {
   
    dispatch({ type: "SUBSTRACT", payload: {
        num: inputElement.current.value
    }});
    num: inputElement.current.value ="";
  };


  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button type="button" className="btn btn-warning btn-lg px-4"onClick={handlePrivacyToggle}>PrivacyToggle</button>
      </div>
      
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
        <input
          type="text"
          ref={inputElement}
           placeholder="Enter a Number"
        />
          
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleAdd}
        
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubstract }
        >
          Substract
        </button>
      </div>
      
    </>
  );
};
export default Controls;
