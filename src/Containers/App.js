import React,{Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import { robots } from'../robots.js';
import Scroll from '../Components/Scroll';
class App extends Component{
	
	constructor(){
		super()
		this.state = {	
			//robots:robots,
			robots:[],
			searchfield:''
		}
	}
	//pour remplir la liste
	componentDidMount(){
		this.setState({robots:robots})
	}
	onSearchChange=(event)=>{
		//console.log(event.target.value);
		this.setState({searchfield:event.target.value})
		/*const filteredRobots = this.state.robots.filter(robots=>{ 
			return robots.name.toLowerCase().includes(this.state.searchfield)
		})*/
		//console.log(filteredRobots);
	}
	render(){		
		const filteredRobots = this.state.robots.filter(robot=>{ 
			return robot.name.toLowerCase().includes(this.state.searchfield)
		})

		return (
			<div className='tc'>
				<h1 className='f1'>Robot Friends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots = {filteredRobots} />
				</Scroll>
			</div>
		);
	}
}
export default App;