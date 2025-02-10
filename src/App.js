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
function App() {
  const myList =[{id:1, name:"name", email:"lala@gmail.com"}]

  return (
    <div className="App">
      <UserList UserList={myList}></UserList>
    </div>
    
  );
}

export default App;
