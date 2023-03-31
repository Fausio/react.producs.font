import { useState } from 'react';
import './App.css';
import Form from './component/Form'
import Table from './component/Table'

function App() {

const [hideFormBtns,setHideFormBtns] = useState(true);

  return (
    <div>
      <Form hideFormBtnsProp={hideFormBtns} />
      <Table />
    </div>
  );
}

export default App;
//https://www.youtube.com/watch?v=PjFrkO2RDKY&list=PLWXw8Gu52TRKouXUo3Abu33_ODPXZTz64&index=19