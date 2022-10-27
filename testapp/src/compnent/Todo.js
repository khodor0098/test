import {useState} from 'react';
import Modals from './Modals';
import Backdrop from './Backdrop';
function Todo(props){
    const [modalopen,setmodalopen]=useState(false);
    function deleteHandler(){
        setmodalopen(true);
    }
    function closeHandler(){
        setmodalopen(false);
    }
    return(
        <div className="card">
        <h2 >{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {modalopen && <Modals onCancel={closeHandler} onConfirm={closeHandler}/>}
        {modalopen && <Backdrop onCancel={closeHandler}/>}

        
      </div>
    );
}
export default Todo;