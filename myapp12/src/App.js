import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      square: [0,1,2,3,4,5,6,7,8].fill(null),
      count: 0,
      results: 'none',
      winner:'',
      winnerX: 0,
      winner0: 0,
      display: '',
      one: '',
      start: false,
      startO: false,
    }
    this.winArray = [
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
    ]
  }



  refrech =()=>{                   //  ====================   кнопка рестарта
    this.setState({display: 'block'})
    this.setState({square: this.state.square = [0,1,2,3,4,5,6,7,8].fill(null)})
    this.setState({count: this.state.count = 0})
    this.setState({winner: ''})
    this.setState({results: 'none'})
  }
  drawGame =()=>{                      //======================= если ничья
  if( this.state.count === 8 ){
      this.setState({winner: "НИЧЬЯ"})
      this.setState({display: 'none'})
    this.setState({results: 'block'})
    }
  }
  gameWinner =(e)=>{               //========================== если есть победитель 
  let s = (this.state.count % 2 === 0 ) ? 'x' : '0'
  for (let i = 0; i < 8; i++){
    let line = this.winArray[i];
    if(this.state.square[line[0]] === s
      &&this.state.square[line[1]] === s
      &&this.state.square[line[2]] === s){
       this.setState({winner: s + ' ПОБЕДИТЕЛЬ'})
      if(s == 'x'){                         //================= счетчик побед на несколько раундов
        this.setState({winnerX: this.state.winnerX + 1})
          this.setState({display: 'none'})
          this.setState({results: 'block'})
        return false
      } else if(s == '0') {
        this.setState({winner0: this.state.winner0 + 1})
        this.setState({display: 'none'})
        this.setState({results: 'block'})
        return false
      }
      } else {
        this.drawGame();
      }
    }
}
  gameProject =(e)=>{                       //=================== рисуем кресики и нолики
  let data = e.target.getAttribute('data');
  console.log(this.state.square)
  if(this.state.square[data] === null){
    this.state.square[data] = (this.state.count % 2 === 0  ) ? 'x' : '0'
  this.setState({square: this.state.square});
  this.setState({count: this.state.count + 1})
} else {
  alert(' stop ')
}
this.gameWinner()
}
revClickO=()=>{                                       //=============делаем 0 для первого хода
if(this.state.count === 0 && this.state.start === false){
  this.setState({count: 1, startO: true})
}
}
revClickX=()=>{
  if(this.state.count === 0 && this.state.start === false){
    this.setState({count: 0, startO: false})
  }
  }


  render(){
  return (
    <div className="App">     
      <div className='xZero'>
        <div className='minXzero' onClick={this.gameProject} style={{display: this.state.display}} data='0'>{this.state.square[0]}</div>
        <div className='minXzero' onClick={this.gameProject} style={{display: this.state.display}} data='1'>{this.state.square[1]}</div>
        <div className='minXzero' onClick={this.gameProject} style={{display: this.state.display}} data='2'>{this.state.square[2]}</div>
        <div className='minXzero' onClick={this.gameProject} style={{display: this.state.display}} data='3'>{this.state.square[3]}</div>
        <div className='minXzero' onClick={this.gameProject} style={{display: this.state.display}} data='4'>{this.state.square[4]}</div>
        <div className='minXzero' onClick={this.gameProject} style={{display: this.state.display}} data='5'>{this.state.square[5]}</div>
        <div className='minXzero' onClick={this.gameProject} style={{display: this.state.display}}data='6'>{this.state.square[6]}</div>
        <div className='minXzero' onClick={this.gameProject} style={{display: this.state.display}}data='7'>{this.state.square[7]}</div>
        <div className='minXzero' onClick={this.gameProject} style={{display: this.state.display}} data='8'>{this.state.square[8]}</div>
       <div style={{display: this.state.results}}>
        <p> {this.state.winner}</p>
        <p> Победа Х:  {this.state.winnerX}</p>
        <p> Победа 0:  {this.state.winner0}</p>
        </div>
        
        
        </div>
        <button onClick={this.refrech}  >НАЧАТЬ ЗАНОВО</button>
        <button onClick={this.revClickX}> First - X</button>
        <button onClick={this.revClickO}> First - 0</button>
    </div>
  );
}
}
export default App;



// .App {
//   text-align: center;
//   font-size: 30px;
// }
// .xZero{
//   border: 2px solid black;
//   width: 270px;
//   height: 270px;
//   margin: 50px;
// }
// .minXzero{
//   box-sizing: border-box;
//   border: 2px solid black;
//   width: 90px;
//   height: 90px;
//   float: left;
//   font-size: 50px;
//   background: maroon;
//   color: aquamarine;
// }
// button{
//   position: relative;
//   background: red;
//    top: -300px;
//   right: 200px;
//   padding: 10px;
//   margin: 2px; 
// }
// .results{
//   display: none;
// }
// button:hover{
//   background: lightseagreen;
//   cursor: pointer;
  
// }