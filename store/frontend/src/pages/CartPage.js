import React from 'react'
import { useState } from 'react';
import ProductListItem from '../components/ProductListItem'
import { useCookies } from 'react-cookie';

const CartPage = () => {
  const [cookies, setCookie] = useCookies(['cart']);
  var cart = cookies.cart;

  /*forms*/
  /*Customer*/
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  /*Address*/
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZip] = useState("");

  /*Payment info*/
  const [cardName, setCardName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");

  const [hidden1, setHidden1] = useState(true);
  const [hidden2, setHidden2] = useState(true);

  return (
    <div>
      <div className='products-list'>
          {cart.map((product, index) => (
              <ProductListItem key={index} product={product}/>
          ))}
      </div>

      <button 
          onClick={() => setHidden1(s => !s)} 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
              Поръчай
      </button>

      {!hidden1 ?
          <div>
            <form>
              <label>Име:
                <input
                  type="text" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>

              <label>Фамилия:
                <input
                  type="text" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>

              <label>Телефон:
                <input
                  type="text" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>

              <label>Имейл:
                <input
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label>Адрес:
                <input
                  type="text" 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>

              <label>Град:
                <input
                  type="text" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>

              <label>Община:
                <input
                  type="text" 
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </label>

              <label>Пощенски код:
                <input
                  type="text" 
                  value={zipcode}
                  onChange={(e) => setZip(e.target.value)}
                />
              </label>
            </form>
            <button 
              onClick={() => setHidden2(s => !s)} 
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                  Плати
            </button>
          </div>
      :null}
      
      {!hidden2 ?
        <div>
          <form>
            <label>Име на картата:
                <input
                  type="text" 
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                />
            </label>

            <label>Номер на картата:
                <input
                  type="text" 
                  value={cardNum}
                  onChange={(e) => setCardNum(e.target.value)}
                />
            </label>

            <label>Дата на изтичане:
                <input
                  type="text" 
                  value={expiration}
                  onChange={(e) => setExpiration(e.target.value)}
                />
            </label>

            <label>CVV номер:
                <input
                  type="text" 
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
            </label>
          </form>
        </div>
      :null}

    </div>
  )
}

export default CartPage