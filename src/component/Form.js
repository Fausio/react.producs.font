function Form({ hideFormBtnsProp, onInputsChange }) {

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
                <input onChange={onInputsChange} name="name" className="form-control" type="text" placeholder="Name" />
                <input onChange={onInputsChange} name="brand" className="form-control" type="text" placeholder="Brand" />


                {
                    hideFormBtnsProp
                        ?
                        <input className="btn btn-primary" type="button" value="Create" />
                        :
                        <div>
                            <input className="btn btn-warning" type="button" value="Update" />
                            <input className="btn btn-danger" type="button" value="Delete" />
                            <input className="btn btn-secondary" type="button" value="Cancel" />
                        </div>
                }


            </form>
        </div>
    );
}

export default Form;