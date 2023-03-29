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
                <input className="form-control" style={myStyle.input} type="text" placeholder="Name" />
                <br />
                <input className="form-control" style={myStyle.input} type="text" placeholder="Brand" />
                <br />
                <br />

                <input className="btn btn-primary" style={myStyle.button} type="button" value="Create" />
                <input className="btn btn-warning" style={myStyle.button} type="button" value="Update" />
                <input className="btn btn-danger" style={myStyle.button} type="button" value="Delete" />
                <input className="btn btn-secondary" style={myStyle.button} type="button" value="Cancel" />
            </form>
        </div>
    );
}

export default Form;