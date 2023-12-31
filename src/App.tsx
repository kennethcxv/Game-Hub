import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "London", "Paris"];

  const handleSelectItem = (item:string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items = {items} heading= "Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
