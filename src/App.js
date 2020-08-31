import React from 'react';
import  './gadget.scss';

// import FirstView  from './render-components/FirstView.js'


export class App extends React.Component {
  constructor(){
    super();
    this.state={
      selectedView: 0,
      seconds: 0,
      minutes:0,
      hours:0,
      day: 0,
      month:0,
      year:0,
      NameMonth: 0
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        seconds: (new Date()).getSeconds(),
        minutes: (new Date()).getMinutes(),
        hours:  (new Date()).getHours(),
        day: (new Date()).getDate(),
        month: (new Date()).getMonth()+1,
        year: (new Date()).getFullYear(),
        NameMonth: (new Date()).toLocaleString('En', { month: 'long' })

      })
    }, 1000)
  }


  renderClock(){
    switch (this.state.selectedView) {
      case 0:
         return <div className="view">{`${this.state.hours}:${this.state.minutes}:${this.state.seconds}`+` ${this.state.hours<12?"AM":"PM"}`}</div>
      case 1:
         return <div  className="view">{`${this.state.day}/${this.state.month}/${this.state.year}`}</div>;
      case 2:
         return(
          <div>
           <div  className=" view third">{`${this.state.NameMonth} ${this.state.day}th ${(this.state.year).toString().slice(2)}`}</div>
          </div>);
      case 3:
        return <div className="view">{`${this.state.hours}:${this.state.minutes}`+` ${this.state.hours<12?"AM":"PM"}`}</div>
      default:
        break;
    }
  }

  changeView=()=>{
   
    let view = this.state.selectedView < 3 ? this.state.selectedView + 1 : 0;
    this.setState({
      selectedView: view
    })
  }
  render(){
    return( 
        <div onClick={this.changeView} className={`gadget col_${this.state.selectedView + 1}`}>
          {this.renderClock()}
          
        </div>);
  }
}

export default App;
