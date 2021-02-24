import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const nayoks=['Mannna','Ferdous','Bapparaj','Misha','Rubel','Salman']
  const nayokNames= nayoks.map(nayok => nayok)
  console.log(nayokNames);
  const products=[
    {Name:'Photoshop',price:'99.99$'},
    {Name: 'Illaustrator',price:'60.45$'},
    {Name: 'PDF reader', price:'6.99$'},
    {Name: 'Premium Elementor', price:'346.99$'}
]
const productName = products.map(product => product.Name)
console.log(productName);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Look my creation</h1>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.Name}</li>)
          }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[0]}</li>
          <li>{nayoks[0]}</li> */}
        </ul>
        
        {
          products.map(product => <Product Name={product.Name} price={product.price}></Product>)
        }
        {/* <Product Name={products[0].Name} price={products[0].price}></Product>
        <Product Name={products[1].Name} price={products[1].price}></Product>
        <Product Name={products[2].Name} price={products[2].price}></Product> */}
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle={
    border:'1px solid grey',
    backgroundColor:'dimgray',
    borderRadius:'5px',
    height:'200px',
    width:'200px',
    margin:'3%',
    // display:'left'
  }
  const {Name,price}={Name: 'Illaustrator',price:'60.45$'}
  console.log(Name,price);
  return (
    <div style={productStyle}>
      <h3>{props.Name}</h3>
      <h5>{props.price}</h5>
      <button>Buy now</button>
    </div>
  )
}


function Counter(props) {
  // const handleIncrease = () =>setCount(count+1)
  
  const [count,setCount] = useState(0);
  return(
    <div>
      <h2>Count:{count}</h2>
      <button onClick={ () => setCount(count-1) }>decrease</button>
      <button onClick={ () => setCount(count+1) }>increase</button>
    </div>
  )
}

function Users() {
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  } , [])
  
  // console.log(users[0].name);
  return(
    <div>
      <h2>Dynamic user:{users.length}</h2>
      <ul>
        {
          users.map(user=> <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
