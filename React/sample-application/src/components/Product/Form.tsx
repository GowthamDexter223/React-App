import { useReducer } from "react"
import { useState } from "react"

export const Form = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [isAdmin, setisAdmin] = useState(false);

    var initialValue = [
        { id: "1", name: "Gowtham", age: "23", isAdmin: true },
        { id: "2", name: "Gouthaman", age: "24", isAdmin: false },
        { id: "3", name: "Prithiv", age: "29", isAdmin: false }
    ]

    // const handleSubmit = (event: any) => {
    //     event.preventDefault();
    //     let dataArray = {id:"", name: "", age: "", isAdmin: false};
    //     dataArray.id = "4";
    //     dataArray.name = name;
    //     dataArray.age = age;
    //     dataArray.isAdmin = isAdmin;
    //     initialValue.push(dataArray);
    //     console.log(initialValue)
    // };
    return (
        <>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <label>Age</label>
                    <input type="text" id="age" value={age} onChange={(event) => setAge(event.target.value)} />
                </div>
                <div>
                    <label>isAdmin</label>
                    <input type="checkbox" id="isAdmin" checked={isAdmin} onChange={(event) => setisAdmin(event.target.checked)} />
                </div>
                <button type="submit">Add</button>
                <button type="button">Update</button>
            </form>
            <br />
            <table>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                </tr>
                {initialValue.map((val) => {
                    return (
                        <tr>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.isAdmin}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}
