function Form() {

    const myStyle =  {
        button:  {

            "margin": "1px"
        }

    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Name" />
                <br />
                <input type="text" placeholder="Brand" />
                <br />
                <br />

                <input style={myStyle.button} type="button" value="Create" />
                <input style={myStyle.button} type="button" value="Update" />
                <input style={myStyle.button} type="button" value="Delete" />
                <input style={myStyle.button} type="button" value="Cancel" />
            </form>
        </div>
    );
}

export default Form;