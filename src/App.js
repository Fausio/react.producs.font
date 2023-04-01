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

  // read items 
  /*   const readProducts = () => {
 
   } */

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

    

        if (response_promesses_converted.msg != null) {
          alert('Erro: ' + response_promesses_converted.msg)
        } else {
          SetProducts([...product, response_promesses_converted]);
          alert('Success: Product created');
          cleanModel();
        }

      })
  }

  const updateProduct = () => {


 
    fetch("http://localhost:8080/product/update", {
      method: 'put',
      body: JSON.stringify(productObj),
      headers: { 'content-type': 'application/json', 'Accept': 'application/json' }
    }).then(response_promesses => response_promesses.json())
      .then(response_promesses_converted => {

        

        if (response_promesses_converted.msg != null) {
          alert('Erro: ' + response_promesses_converted.msg)
        } else {
        
          
          alert('Success: Product updated');
          let vector = [...product];
          let index = vector.findIndex((i) => {
            return i.id === productObj.id
          });
  
          vector[index] = productObj ;
          SetProducts(vector);

          cleanModel();
        }

      })
  }


  // clean model 
  const cleanModel = () => {

    seproductObj(productDTO)

  }

  // select product on click
  const selectElement = (index) => {

    seproductObj(product[index]) 
    setHideFormBtns(false);
  }

  // delete selected 
  const onDeleteSelectElement = () => {
    fetch("http://localhost:8080/product/delete/" + productObj.id, {
      method: 'delete',
      headers: { 'content-type': 'application/json', 'Accept': 'application/json' }
    }).then(response_promesses => response_promesses.json())
      .then(response_promesses_converted => {


        alert('Success:' + response_promesses_converted.msg);


        let vector = [...product];
        let index = vector.findIndex((i) => {
          return i.id === productObj.id
        });

        vector.splice(index, 1);
        SetProducts(vector);


        cleanModel();

      })
  }
  // cancel select
  const cancelselectElement = () => {
    setHideFormBtns(true);
    cleanModel();
  }


  return (
    <div>



      <Form hideFormBtnsProp={hideFormBtns}
        onInputsChange={inputsChange}
        postProduct={createProduct}
        obj={productObj}
        onCancelselectElement={cancelselectElement}
        onUpdateProduct={updateProduct}
        onDeleteSelectElement={onDeleteSelectElement} />


      <Table listeItems={product} onSelectElement={selectElement} />

    </div>
  );
}

export default App;
//https://www.youtube.com/watch?v=PjFrkO2RDKY&list=PLWXw8Gu52TRKouXUo3Abu33_ODPXZTz64&index=19