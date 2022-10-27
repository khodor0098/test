function Modals(props){
    function cancelHandler(){
        props.onCancel();
    }
    function confirmHandeler(){
        props.onConfirm();
    }

    return (
        <div className='modal'>
          <p>Are you sure</p>
          <button className='btn btn--alt' onClick={cancelHandler}>
            Cancel
          </button>
          <button className='btn' onClick={confirmHandeler}>
            Confirm
          </button>
        </div>
      );
}

export default Modals