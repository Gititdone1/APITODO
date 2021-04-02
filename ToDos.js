import React from'react';
import { TODOS_ENDPOINT} from './App'
export default function ToDos({ toDos }){
    
    function handleDelete(id) {
        fetch (`${TODOS_ENDPOINT}/${id}`, {
            method:'DELETE'
        }).then(res => console.log(res.json()))
    }
    return (
        <div>
                <table>
                    <tr>
                        <th>
                            title
                        </th>
                        <th>
                            completed
                        </th>
                        <th>
                            
                        </th>
                    </tr>
                    {
                        toDos.map(
                            item => (
                                <tr key= {item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.completed ? 'COMPLETED' : 'NOT COMPLETED'}</td>
                                    <td>
                                        <button onClick = {() => {handleDelete(item.id)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                        
                 
                </table>
            
        </div>
    )
}