import React, { useState } from 'react'
import ChangeColor from "./Components/PTIT_CNTT4_IT104_Session17_bai03/ChangeColor"
import Product from './Components/PTIT_CNTT4_IT104_Session17_bai02/Product';
// import UseState from './Components/PTIT_CNTT4_IT104_Session17_bai01/useState';
import Toggle from './Components/PTIT_CNTT4_IT104_Session17_bai04/Toggle';
import Form from './Components/PTIT_CNTT4_IT104_Session17_bai05/Form'
import CounText from './Components/PTIT_CNTT4_IT104_Session17_bai06/CounText '
import Select from './Components/PTIT_CNTT4_IT104_Session17_bai07/Select'
import Checkbox from './Components/PTIT_CNTT4_IT104_Session17_bai08/Checkbox'
import ToDoList from './Components/PTIT_CNTT4_IT104_Session17_bai09/ToDoList'
export default function App() {
  return (
    <div>
      {/* <UseState name='Ngueyn Van A ' age={20}></UseState> */}
      {/* <Product id={1} name='Coca cola ' price='1000$' quantity={10} ></Product> */}
      {/* <ChangeColor></ChangeColor> */}
      {/* <Toggle></Toggle> */}
      {/* <Form></Form> */}
      {/* <CounText></CounText> */}
      {/* <Select></Select> */}
      {/* <Checkbox></Checkbox> */}
      <ToDoList></ToDoList>
    </div>
  )
}
