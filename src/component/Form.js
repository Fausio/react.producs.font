function Form({ hideFormBtnsProp, onInputsChange,postProduct,obj  , onCancelselectElement,onDeleteSelectElement,onUpdateProduct }) {

    /*  const myStyle = {
         button: {
             "margin": "1px"
         },
         input: {
             "margin": "1px"
         }
 
     } */

    return (
        <div>
            <form >
                <input onChange={onInputsChange} value={obj.name} name="name" className="form-control" type="text" placeholder="Name" />
                <input onChange={onInputsChange} value={obj.brand} name="brand" className="form-control" type="text" placeholder="Brand" />


                {
                    hideFormBtnsProp
                        ?
                        <input className="btn btn-primary" type="button" value="Create"  onClick={postProduct}/>
                        :
                        <div>
                            <input onClick={onUpdateProduct}   className="btn btn-warning" type="button" value="Update" />
                            <input onClick={onDeleteSelectElement} className="btn btn-danger" type="button" value="Delete" />
                            <input onClick={onCancelselectElement} className="btn btn-secondary" type="button" value="Cancel" />
                        </div>
                }


            </form>
        </div>
    );
}

export default Form;