import React from 'react';
import {TODOS_ENDPOINT} from './App'
export default class ToDoForm extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            title: " "
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(event){
        this.setState({
            
            title: event.target.value
        })
    }
    handleClick(event){
        event.preventDefault()
        fetch (TODOS_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                userId: this.props.userId
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                daffyduck: 'mickey mouse'
            }
        }).then (res => {
            console.log(res.json())
        })
    }
    render(){
        return (
            <form>
                <label for = "title">
                    Title: 
                    <input value = {this.state.title} type = "text" name ="title" onChange = {this.handleChange}></input>
                </label>
                <button onClick = {this.handleClick}>Submit</button>
               <div>
                  <button onClick = {this.handleClick}>Update</button>
                </div>
            </form>
        )
    }
}
