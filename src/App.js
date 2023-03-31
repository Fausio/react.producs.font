import { useEffect, useState } from 'react';
import './App.css';
import Form from './component/Form'
import Table from './component/Table'

function App() {




  //use state
  const [hideFormBtns, setHideFormBtns] = useState(true);
  const [product, SetProducts] = useState([])

  //use Effect
  useEffect(() => {

    fetch("http://localhost:8080/product/read")
      .then(responseResult => responseResult.json())
      .then(responseResultConvertedToJson => SetProducts(responseResultConvertedToJson))

  }, []);


  // obj
  const productDTO = {
    id: 0,
    name: '',
    brand: ''
  }

  //
  const [ productObj, seproductObj] = useState(productDTO);

  // handle event
  const inputsChange = (e) => {
    
    seproductObj({ ...productObj, [e.target.name]: e.target.value });
  }


  return (
    <div>

      <p>{JSON.stringify(productObj)}</p>

      <Form hideFormBtnsProp={hideFormBtns} onInputsChange={inputsChange} />
      <Table listeItems={product} />
    </div>
  );
}

export default App;
//https://www.youtube.com/watch?v=PjFrkO2RDKY&list=PLWXw8Gu52TRKouXUo3Abu33_ODPXZTz64&index=19