import {useState} from 'react'

function Checkout() {

const [cart, setCart] = useState(0)

  return (
    <>
      <h2>Checkout {cart}</h2>
    </>
  );
}

export default Checkout