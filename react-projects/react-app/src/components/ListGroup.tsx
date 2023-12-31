//import {MouseEvent} from "react";
import {useState} from "react";

interface Props {
items:string[];
heading:string;
onSelectedItem: (item:string) => void;
}

function ListGroup({items, heading, onSelectedItem}: Props){

//const handleClick = (event:MouseEvent) => console.log(event);
let  [selectedIndex, setSelectedIndex] = useState(-1);
return (
<>
<h1>{heading}</h1>
{ items.length == 0 && <p> No Item found </p> }
<ul className="list-group">

{items.map((item,index) =>
<li className= {
     selectedIndex == index 
	? "list-group-item active"
	: "list-group-item"
		}

    onClick={ () => { setSelectedIndex(index); onSelectedItem(item); }}
    key={item}
>
{item}
</li>

)}

</ul>
</>
);
}

export default ListGroup;
