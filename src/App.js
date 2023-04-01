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
  const [productObj, seproductObj] = useState(productDTO);

  // handle event
  const inputsChange = (e) => {

    seproductObj({ ...productObj, [e.target.name]: e.target.value });
  }


  // save product
  const createProduct = () => {

    fetch("http://localhost:8080/product/create", {
      method: 'post',
      body: JSON.stringify(productObj),
      headers: { 'content-type': 'application/json', 'Accept': 'application/json' }
    }).then(response_promesses => response_promesses.json())
      .then(response_promesses_converted => {

        console.log(response_promesses_converted)
      
        if (response_promesses_converted.msg != null) {
          alert('Erro: ' + response_promesses_converted.msg)
        } else {
          SetProducts([...product,response_promesses_converted]);
          alert('Success: Prodcut created')
        }

      })
  }


  return (
    <div>

    

      <Form hideFormBtnsProp={hideFormBtns} onInputsChange={inputsChange} postProduct={createProduct} />
      <Table listeItems={product} />
    </div>
  );
}

export default App;
//https://www.youtube.com/watch?v=PjFrkO2RDKY&list=PLWXw8Gu52TRKouXUo3Abu33_ODPXZTz64&index=19