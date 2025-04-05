import './App.css';
import './Components/Items';
import Items from './Components/Items';
import ItemsDate from "./Components/ItemsDate";
import Products from './Components/Products';

function App() {
  const response = [
    {
      name:"Nirma",
      date:20,
      month:"Feb",
      year:2000
    },
    {
      name:"Surf",
      date:10,
      month:"Jan",
      year:2010
    },
    {
      name:"Killu",
      date:2,
      month:"Dec",
      year:1900
    }
  ]

  const products = [
    {
      id: 1,
      title: "Nirma",
      amount: 100,
      date: new Date(2025, 8, 10)
    },
    {
      id: 2,
      title: "Surf excel",
      amount: 200,
      date: new Date(2025, 10, 2)
    },
    {
      id: 3,
      title: "Tide",
      amount: 150,
      date: new Date(2025, 12, 28)
    },
    {
      id: 4,
      title: "Ghadi",
      amount: 80,
      date: new Date(2025, 1, 14)
    },
  ]
  return (
    // <div className="App">
    //   <Items name={response[0].name}>This is Item Nirma</Items>
    //   <ItemsDate date={response[0].date} month={response[0].month} year={response[0].year}></ItemsDate>

    //   <Items name={response[1].name}></Items>
    //   <ItemsDate date={response[1].date} month={response[1].month} year={response[1].year}></ItemsDate>

    //   <Items name={response[2].name}></Items>
    //   <ItemsDate date={response[2].date} month={response[2].month} year={response[2].year}></ItemsDate>
    // </div>
    <div>
      <Products items={products}/>
    </div>
  );
}

export default App;
