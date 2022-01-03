import React from 'react'
import Cardlist from './Card/Cardlist';
import { Robots } from './Robots/Robots';
import SearchBox from './SearchBox/SearchBox';
import Scroll from './Scroll/Scroll';
import './App.css';
import Error from './Error/Error';

export default class App extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Robots:[],
             Searchfield:''
        }
    }
    onSearchChange = (e) =>{
        this.setState({Searchfield:e.target.value})
        
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=> {return Response.json()})
        .then(users =>{this.setState({Robots:users})})
    }
    
    render(){
        const {Robots,Searchfield} = this.state;
        const filterRobots = Robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(Searchfield.toLowerCase());
        }
        )
        console.log(filterRobots);
        return !Robots.length ? 
            <div className='tc'>
                <h1 >Screen is Loading</h1>
            </div>:
            <div className='tc'>      
                <h1>ROBOFRIENDS</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                <Error>
                    <Cardlist Robots = {filterRobots}/>
                </Error>
                </Scroll>
             </div>
        }
}
