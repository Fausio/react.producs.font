function Table({ listeItems }) {
    return (
        <div className="container">
            <table className="table" border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        listeItems.map((obj, index) =>

                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{obj.name}</td>
                                <td>{obj.brand}</td>
                                <td>
                                    <button type="buttoon" className="btn btn-primary btn-sm"> Select </button>
                                </td>
                            </tr>
                        )

                    }

                </tbody>
            </table>
        </div>
    );
}

export default Table;