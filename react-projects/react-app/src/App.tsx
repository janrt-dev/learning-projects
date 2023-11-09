import ListGroup  from './components/ListGroup';
import Alert  from './components/Alert';
import Button  from './components/Button';
import {useState} from "react";

function App(){
let items = [ 'L.A.' , 'Tokyo', 'NewYork', 'Paris', 'London'];

const handleSelectItem = (item:string) => {
console.log(item);
}

const [alertVisible, setAlertVisibility] = useState(false);


return <div>
           <ListGroup items={items} heading="Cities" onSelectedItem={handleSelectItem}/>

{ alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello World <span> I'm learning REACTJS</span></Alert> }
<Button color="danger" onClick={setAlertVisibility}>
My button
</Button>
</div>;

}

export default App;
