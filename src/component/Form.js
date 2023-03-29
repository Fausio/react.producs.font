function Form() {

    const myStyle = {
        button: {
            "margin": "1px"
        },
        input: {
            "margin": "1px"
        }

    }

    return (
        <div>
            <form >
                <input className="form-control"   type="text" placeholder="Name" />
                
                <input className="form-control"  type="text" placeholder="Brand" />
             

                <input className="btn btn-primary"   type="button" value="Create" />
                <input className="btn btn-warning"   type="button" value="Update" />
                <input className="btn btn-danger"   type="button" value="Delete" />
                <input className="btn btn-secondary"  type="button" value="Cancel" />
            </form>
        </div>
    );
}

export default Form;