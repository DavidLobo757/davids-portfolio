import Header from "../Header/header.component";
import Footer from "../Footer/footer";
import { useEffect, useState, } from "react";

const TodoApp = () => {
    // const firstName = "John";

    const todoItems = [{
        id: 1,
        itemName: "Get the milk!",
        isDone: false,
    }, {
        id: 2,
        itemName: "Pick up the kids",
        isDone: false,
    }, {
        id: 3,
        itemName: "Go to work",
        isDone: true,
    }];
    // // This is declaring a private string name 
    // // and then having public string get name () {return name};
    // // public void setName (String name) {this.name = name};
    // const [name, setName] = useState("Trevor");
    // const [age, setAge] = useState(20);

    // // useEffect automatically just has on-init method built in
    // // on-init method (aka. kinda like a constructor)
    // //
    // useEffect ( () => {
    //     console.log("I was run inside of the no-dependancy useEffect method/hook")
    // },[]);

    // // useEffect hook has 2 parameters, the first one is where you put in your function
    // // the 2nd parameter is the one where you put in your list of dependancies
    // // the dependancies are things you're listening into such as in this case
    // // the useState. If there happens to be a change in the useState the useEffect
    // // while also update because it's listening in to the dependency it has.
    // useEffect ( () => {
    //     console.log("Hello, I'm the use effect hook", name );
    //     console.log("and I am ", age , "years old");
    // }, [name, age]);


    return (
        <div>
            <Header />
            <div style={{marginBottom: "3rem"}}>
                <h1>Hello World</h1>
                {todoItems.map((todoItem) => {
                    return <div key={todoItem.id}>
                        <label style={todoItem.isDone === true ? { textDecoration: "line-through" } : {}}>{todoItem.itemName}</label>
                        <label >{todoItem.isDone}</label>
                    </div>
                })}
            </div>
            <Footer />
        </div>
    );
}

function addItem() {
    console.log("Adding item to Todo list");
}

export { addItem };
export default TodoApp;