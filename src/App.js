import logo from './logo.svg';
import './App.css';


function UserList(props){
  console.log(props.UserList)
  return <ul>
    {props.UserList.map((item,index)=>{
      return <li key={index}>{item.id} {item.name} {item.email}</li>
})}
  </ul>
}

function ProductList(props){
  console.log(props.products)
  return <ul>
    {props.products.map((item,index)=>{
      return <li key={index}>{item.id} {item.name} {item.email}</li>
    })}
  </ul>
}
function App() {
  const myList =[{id:1, name:"name", email:"lala@gmail.com"}]
  const myList2 =[{id:1, name:"name", email:"name@gmail.com"}]
  return (
    <div className="App">
      <UserList UserList={myList}></UserList>
      <ProductList products={myList2}></ProductList>
    </div>
    
  );
}

export default App;
