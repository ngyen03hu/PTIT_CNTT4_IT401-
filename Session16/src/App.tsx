// import React from 'react'
// import SubjectList from './Components/PTIT_CNTT4_IT104_Session16_bai01/SubjectList'
// import LoginStatus from './Components/PTIT_CNTT4_IT104_Session16_bai02/LoginStatus '
// import Button from './Components/PTIT_CNTT4_IT104_Session16_bai03/button'
// import ClickCounter from './Components/PTIT_CNTT4_IT104_Session16_bai04/ClickCounter'
// import ThemeSwitcher from './Components/PTIT_CNTT4_IT104_Session16_bai06/ThemeSwitcher '

// export default function App() {
//   return (
//     <div>
//       {/* <SubjectList></SubjectList> */}
//       {/* <LoginStatus></LoginStatus> */}
//       {/* <Button></Button> */}
//       {/* <ClickCounter></ClickCounter> */}
//       <ThemeSwitcher></ThemeSwitcher>
//     </div>
//   )
// }
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './Page/ProductPage';
import CartPage from './Page/CartPage';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    );
  }
}