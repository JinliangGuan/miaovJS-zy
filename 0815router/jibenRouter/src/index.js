import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';

class Welcome extends Component {
	render(){
		return(
			<h1>欢迎</h1>
		)
	}
}

class Apple extends Component {
	render(){
		return(
			<h3>苹果</h3>
		)
	}
}
class Lizi extends Component {
	render(){
		return(
			<h3>梨子</h3>
		)
	}
}





ReactDOM.render(
	<Router>
		<div>
			<Link to="/"><button>返回首页</button></Link>
			<Route path='/' component = {Welcome} />
			<Link to="/Apple"><button>苹果</button></Link>
			<Route path='/Apple' component = {Apple} />
			<Link to="/Lizi"><button>梨子</button></Link>
			<Route path='/Lizi' component = {Lizi} />

		</div>

        </Router>
, document.getElementById('root'));


// class NoteList extends Component{
// 	render(){
// 		return (
// 			<ol>
// 				{
// 					React.Children.map(this.props.children,(e)=>{
// 						return <li>{e}</li>
// 					})
//
// 				}
// 			</ol>
// 		)
// 	}
// }
// ReactDOM.render(
// 	<NoteList>
// 		<span style={{color:'red '}}>hello</span>
// 		<span>world</span>
// 	</NoteList>,
// document.getElementById('root'));
registerServiceWorker();
