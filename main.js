let App = React.createClass({
  getInitialState() {
    return{
      val1: Math.floor((Math.random() * 50) + 1),
      val2: Math.floor((Math.random() * 50) + 1),
      answer: [],
      string: (""),
      stringFinal: ("0"),
      symbol: "+",
      score: (0)
    }
  },

  changeAnswer0() {
    let {val1, val2, answer, string, stringFinal} = this.state;
    console.log("I've been clicked!")
    let zero = 0
    console.log("zero = ", zero)
    answer.push(zero)
    string = answer.toString()
    stringFinal = string.split(",").join("")
    console.log('stringFinal: ',stringFinal)
    this.refs.answer.innerHTML = stringFinal;
    console.log(answer,string,stringFinal)
    console.log("I am zero: ", zero)
    },  

  changeAnswer1() {
    let {val1, val2, answer, string, stringFinal} = this.state;
    console.log("I've been clicked!")
    let one = 1
    console.log("one = ", one)
    answer.push(one)
    string = answer.toString()
    stringFinal = string.split(",").join("")
    console.log('stringFinal: ',stringFinal)
    this.refs.answer.innerHTML = stringFinal;
  },

  changeAnswer2() {
    let {val1, val2, answer, string, stringFinal} = this.state;
    console.log("I've been clicked!")
    let two = 2
    console.log("two = ", two)
    answer.push(two)
    string = answer.toString()
    stringFinal = string.split(",").join("")
    console.log('stringFinal: ',stringFinal)
    this.refs.answer.innerHTML = stringFinal;
  },

  changeAnswer3() {
    let {val1, val2, answer, string, stringFinal} = this.state;
    console.log("I've been clicked!")
    let three = 3
    console.log("three = ", three)
    answer.push(three)
    string = answer.toString()
    stringFinal = string.split(",").join("")
    console.log('stringFinal: ',stringFinal)
    this.refs.answer.innerHTML = stringFinal;
  },

  changeAnswer4() {
    let {val1, val2, answer, string, stringFinal} = this.state;
    console.log("I've been clicked!")
    let four = 4
    console.log("four = ", four)
    answer.push(four)
    string = answer.toString()
    stringFinal = string.split(",").join("")
    console.log('stringFinal: ',stringFinal)
    this.refs.answer.innerHTML = stringFinal;
  },

  changeAnswer5() {
    let {val1, val2, answer, string, stringFinal} = this.state;
    console.log("I've been clicked!")
    let five = 5
    console.log("five = ", five)
    answer.push(five)
    string = answer.toString()
    stringFinal = string.split(",").join("")
    console.log('stringFinal: ',stringFinal)
    this.refs.answer.innerHTML = stringFinal;
  },

  changeAnswer6() {
    let {val1, val2, answer, string, stringFinal} = this.state;
    console.log("I've been clicked!")
    let six = 6
    console.log("six = ", six)
    answer.push(six)
    string = answer.toString()
    stringFinal = string.split(",").join("")
    console.log('stringFinal: ',stringFinal)
    this.refs.answer.innerHTML = stringFinal;
  },

  changeAnswer7() {
    let {val1, val2, answer, string, stringFinal} = this.state;
    console.log("I've been clicked!")
    let seven = 7
    console.log("seven = ", seven)
    answer.push(seven)
    string = answer.toString()
    stringFinal = string.split(",").join("")
    console.log('stringFinal: ',stringFinal)
    this.refs.answer.innerHTML = stringFinal;
  },

  changeAnswer8() {
    let {val1, val2, answer, string, stringFinal} = this.state;
    console.log("I've been clicked!")
    let eight = 8
    console.log("eight = ", eight)
    answer.push(eight)
    string = answer.toString()
    stringFinal = string.split(",").join("")
    console.log('stringFinal: ',stringFinal)
    this.refs.answer.innerHTML = stringFinal;
  },

  changeAnswer9() {
    let {val1, val2, answer, string, stringFinal} = this.state;
    console.log("I've been clicked!")
    console.log(answer, string, stringFinal)
    let nine = 9
    console.log("nine = ", nine)
    answer.push(nine)
    string = answer.toString()
    stringFinal = string.split(",").join("")
    console.log('stringFinal: ',stringFinal)
    this.refs.answer.innerHTML = stringFinal;
  },

  reset() {
    let {val1, val2, answer, string, stringFinal,symbol, finalAnswer} = this.state;
    this.state.answer = []
    this.state.string = "0"
    this.state.stringFinal = "0"
    this.refs.answer.innerHTML = stringFinal;

/*    location.reload();
*/  },

  checkAnswer() {
    let {val1, val2, answer, string, stringFinal,symbol, finalAnswer, score} = this.state;
    console.log(answer[0])
    console.log('symbol: ',symbol)
    if (symbol == "-"){
      finalAnswer = val1-val2
    } else {
      finalAnswer = val1+val2
    }
    console.log('stringFinal: ',answer)
    string = answer.toString()
    stringFinal = string.split(",").join("")
    console.log('stringFinal: ',stringFinal)
    if(stringFinal == finalAnswer ) {
    score = this.state.score+1
    this.state.score=score
    this.refs.score.innerHTML = "Your score is "+score
    this.refs.firstLine.innerHTML = "Well Done!";
    this.refs.secondLine.innerHTML = "You were right!"
    } else {
    score = this.state.score-1
    this.state.score=score  
    this.refs.score.innerHTML = "Your score is "+score
    this.refs.firstLine.innerHTML = "So unlucky!";
    this.refs.secondLine.innerHTML = "The answer was " + finalAnswer;
    }
    setTimeout(() => {
      val1 = Math.floor((Math.random() * 50) + 1);
      console.log(val1)
      val2 = Math.floor((Math.random() * 50) + 1);
      console.log(val2)
      this.state.val1=val1
      this.state.val2=val2
      this.refs.firstLine.innerHTML = "Number One = "+val1;
      this.refs.secondLine.innerHTML = "Number Two = "+val2;
      this.state.symbol = "+";
      this.refs.symbol.innerHTML = val1 + symbol + val2;
      this.state.answer = [];
      this.state.string = "";
      this.state.stringFinal = "";
      this.refs.answer.innerHTML = stringFinal;  
    },3000);
  },

  skip() {
    let {val1, val2, answer, string, stringFinal,symbol, finalAnswer, score} = this.state;
    console.log(answer[0])
    if (symbol=="-"){
      finalAnswer = val1-val2
    } else {
      finalAnswer = val1+val2
    }
    console.log('stringFinal: ',answer)
    string = answer.toString()
    stringFinal = string.split(",").join("")
    console.log('stringFinal: ',stringFinal)
    this.refs.firstLine.innerHTML = "Maybe next time...";
    this.refs.secondLine.innerHTML = "The answer was " + finalAnswer;
    score = this.state.score-1
    this.state.score=score  
    this.refs.score.innerHTML = "Your score is "+score
    setTimeout(() => {
      val1 = Math.floor((Math.random() * 50) + 1);
      console.log(val1)
      val2 = Math.floor((Math.random() * 50) + 1);
      console.log(val2)
      this.state.val1=val1
      this.state.val2=val2
      this.refs.firstLine.innerHTML = "Number One = "+val1;
      this.refs.secondLine.innerHTML = "Number Two = "+val2;
      this.state.symbol = "+";
      this.refs.symbol.innerHTML = val1 + symbol + val2;
      this.state.answer = [];
      this.state.string = "";
      this.state.stringFinal = "";
      this.refs.answer.innerHTML = stringFinal;  
    },3000);

  },

  plusSign() {
    let {val1, val2, answer, string, stringFinal, symbol, finalAnswer} = this.state;
    symbol = "+";
    this.refs.symbol.innerHTML = val1+" "+symbol+" "+val2 ;
    this.state.symbol = "+"
    finalAnswer = val1 + val2
    console.log('Final Answer: ', finalAnswer)


  },

  minusSign() {
    let {val1, val2, answer, string, stringFinal, symbol, finalAnswer} = this.state;
    symbol = "-";
    this.refs.symbol.innerHTML = val1+" "+symbol+" "+val2
    this.state.symbol = "-"
    finalAnswer = val1 - val2
    console.log('Final Answer: ', finalAnswer)

  },

  negative() {
    let {val1, val2, answer, string, stringFinal, symbol, finalAnswer} = this.state;
    answer.unshift("-")
    string = answer.toString()
    stringFinal = string.split(",").join("")
    console.log('stringFinal: ',stringFinal)
    this.refs.answer.innerHTML = stringFinal;  
  },



  render() {

    let {val1, val2, answer, string, stringFinal, symbol, finalAnswer, score} = this.state;

    console.log('val1 = ', val1, ' val2 = ', val2, ' val1 + val 2 = ', val1 + val2);

    return(
      <div>
      <br/>
      <div className="jumbotron" id="jumbo"><hr/>
      <h1 ref="score">Your Score is {score}</h1>
      <hr/>
      <h1 ref="firstLine">Number One = {val1}</h1>
      <h1 ref="secondLine">Number Two = {val2}</h1>
      <hr/>

      <h1 ref="symbol">{val1} {symbol} {val2}</h1>
      <hr/>
      <h1>= <button className="btn btn-warning btn-lg" ref="answer" id="buttonValue">0</button></h1><hr/>
      <span id="addSubtractText">Do you want to add or subtract? </span>
      <button className="btn btn-primary" ref="plus" id="plusSign" onClick={this.plusSign}> + </button> <span>   </span>
      <button className="btn btn-primary" ref="minus" id="minusSign" onClick={this.minusSign}> - </button> <br/><hr/>
      <span id="clickToAnswer">Click to answer : </span>
      <button className="btn btn-info" ref="negative" onClick={this.negative}>-</button> <span> </span>
      <button className="btn btn-success" ref="zero" onClick={this.changeAnswer0}>0</button> <span> </span>
      <button className="btn btn-success" ref="one" onClick={this.changeAnswer1}>1</button><span> </span>
      <button className="btn btn-success" ref="two" onClick={this.changeAnswer2}>2</button><span> </span>
      <button className="btn btn-success" ref="three" onClick={this.changeAnswer3}>3</button><span> </span>
      <button className="btn btn-success" ref="four" onClick={this.changeAnswer4}>4</button><span> </span>
      <button className="btn btn-success" ref="five" onClick={this.changeAnswer5}>5</button><span> </span>
      <button className="btn btn-success" ref="six" onClick={this.changeAnswer6}>6</button><span> </span>
      <button className="btn btn-success" ref="seven" onClick={this.changeAnswer7}>7</button><span> </span>
      <button className="btn btn-success" ref="eight" onClick={this.changeAnswer8}>8</button><span> </span>
      <button className="btn btn-success" ref="nine" onClick={this.changeAnswer9}>9</button><span> </span>
      <br/><hr/>
      <button className="btn btn-info btn-lg btn-block" ref="reset" onClick={this.reset}>Reset</button>
      <hr/>
      <button className="btn btn-lg btn-block" ref="skip" onClick={this.skip}>Skip</button>
      <hr/>
      <button className="btn btn-danger btn-lg btn-block" onClick={this.checkAnswer}>Submit</button><hr/>
      </div>
      </div>
      )
  }


})



ReactDOM.render(
  <App/>,
  document.getElementById('root')
  )
