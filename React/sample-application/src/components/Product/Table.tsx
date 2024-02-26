import React, { useReducer, useState } from 'react';

interface IData {
    id: number;
    name: string;
    age: number;
}

const InitialData = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 }
];

type Action =
    | { type: 'UPDATE_DATA'; payload: { id: number; name: string; age: number } }
    | { type: 'ADD_DATA'; payload: { name: string; age: number } };

const reducer = (state: IData[], action: Action): IData[] => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return state.map(item =>
                item.id === action.payload.id ? { ...item, name: action.payload.name, age: action.payload.age } : item
            );
        case 'ADD_DATA':
            const newId = Math.max(...state.map(item => item.id)) + 1;
            return [...state, { id: newId, name: action.payload.name, age: action.payload.age }];
        default:
            return state;
    }
};

const Table: React.FC = () => {
    const [data, dispatch] = useReducer(reducer, InitialData);
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>(0);

    const handleUpdate = (id: number) => {
        dispatch({ type: 'UPDATE_DATA', payload: { id, name, age } });
        setName('');
        setAge(0);
    };

    const handleAdd = () => {
        dispatch({ type: 'ADD_DATA', payload: { name, age } });
        setName('');
        setAge(0);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={3}>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Age"
                                value={age}
                                onChange={e => setAge(Number(e.target.value))}
                            />
                        </td>
                        <td>
                            <button onClick={handleAdd}>Add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
