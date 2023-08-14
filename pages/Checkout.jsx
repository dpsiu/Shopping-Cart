import {useState} from 'react'

function Checkout() {

const [cart, setCart] = useState(0)

  return (
    <>
      <h3>Checkout {cart}</h3>
    </>
  );
}

export default Checkout