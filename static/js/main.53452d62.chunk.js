(this.webpackJsonptrivia=this.webpackJsonptrivia||[]).push([[0],[,,function(e,t,a){e.exports=a.p+"static/media/heart2.2bc746fd.png"},,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(4),o=a.n(n),i=(a(14),a(15),a(5)),l=a(6),d=a(1),h=a(8),c=a(7),m=a(2),u=a.n(m),b=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).getQuestions=function(){fetch("https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/questions").then((function(e){return e.json()})).then((function(t){e.setState({questions:t});for(var a,s,r=e.state.questions,n=r.length;n>0;)s=Math.floor(Math.random()*n),a=r[--n],r[n]=r[s],r[s]=a;e.setState({questions:r});var o=[e.state.questions[e.state.currentQuestionId].correctAnswer,e.state.questions[e.state.currentQuestionId].wrongAnswer1,e.state.questions[e.state.currentQuestionId].wrongAnswer2,e.state.questions[e.state.currentQuestionId].wrongAnswer3];for(n=o.length;n>0;)s=Math.floor(Math.random()*n),a=o[--n],o[n]=o[s],o[s]=a;e.setState({randomAnswers:o})}))},e.state={lives:3,questionNum:1,totalScore:0,questions:[{id:0,question:"loading...",correctAnswer:"loading...",wrongAnswer1:"loading...",wrongAnswer2:"loading...",wrongAnswer3:"loading..."}],currentQuestionId:0,notClicked:!0,randomAnswers:[],seconds:2e3,gameOver:!1,gameStarted:!1,name:"",leaderboard:[{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"}]},e.getQuestions=e.getQuestions.bind(Object(d.a)(e)),e.handleClick=e.handleClick.bind(Object(d.a)(e)),e.handleStart=e.handleStart.bind(Object(d.a)(e)),e.handleNameChange=e.handleNameChange.bind(Object(d.a)(e)),e.handleEndGame=e.handleEndGame.bind(Object(d.a)(e)),e.handleNewGame=e.handleNewGame.bind(Object(d.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getQuestions()}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleStart",value:function(){var e=this;this.state.name.length>0&&(this.setState({gameStarted:!0}),this.setState({seconds:2e3}),clearInterval(this.myInterval),this.myInterval=setInterval((function(){e.state.seconds>-300&&e.setState((function(e){return{seconds:e.seconds-1}})),0===e.state.seconds&&e.handleTimesUp()}),10))}},{key:"handleClick",value:function(e){var t=this;clearInterval(this.myInterval),e.target.textContent.substring(3).trim()===this.state.questions[this.state.currentQuestionId].correctAnswer.trim()?(e.target.style.backgroundColor="#79ff4d",this.setState((function(e){return{totalScore:e.totalScore+Math.floor(t.state.seconds/20)}}))):(e.target.style.backgroundColor="#ff4000",this.setState((function(e){return{lives:e.lives-1}}))),this.setState({notClicked:!1}),setTimeout((function(){t.state.questionNum===t.state.questions.length||0===t.state.lives?t.handleEndGame():t.nextQuestion()}),3e3)}},{key:"handleTimesUp",value:function(){var e=this;clearInterval(this.myInterval),this.setState((function(e){return{lives:e.lives-1}})),setTimeout((function(){e.state.questionNum===e.state.questions.length||0===e.state.lives?e.handleEndGame():e.nextQuestion()}),3e3)}},{key:"nextQuestion",value:function(){var e=this;this.setState((function(e){return{questionNum:e.questionNum+1}})),this.setState((function(e){return{currentQuestionId:e.currentQuestionId+1}})),this.setState({notClicked:!0});for(var t,a,s=[this.state.questions[this.state.currentQuestionId].correctAnswer,this.state.questions[this.state.currentQuestionId].wrongAnswer1,this.state.questions[this.state.currentQuestionId].wrongAnswer2,this.state.questions[this.state.currentQuestionId].wrongAnswer3],r=s.length;r>0;)a=Math.floor(Math.random()*r),t=s[--r],s[r]=s[a],s[a]=t;this.setState({randomAnswers:s}),this.setState({seconds:2e3}),this.myInterval=setInterval((function(){e.state.seconds>-300&&e.setState((function(e){return{seconds:e.seconds-1}})),-300===e.state.seconds&&e.handleTimesUp()}),10)}},{key:"handleEndGame",value:function(){var e=this;this.setState({questions:null}),this.setState({gameOver:!0}),fetch("https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/addscore?name=".concat(this.state.name.toUpperCase().trim(),"&score=").concat(this.state.totalScore)),this.setState({seconds:3}),this.myInterval=setInterval((function(){e.state.seconds>0&&e.setState((function(e){return{seconds:e.seconds-1}})),0===e.state.seconds&&(fetch("https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/leaderboard").then((function(e){return e.json()})).then((function(t){return e.setState({leaderboard:t})})),fetch("https://tlmy7kec05.execute-api.us-east-2.amazonaws.com/Prod/deletescore"),e.setState((function(e){return{seconds:e.seconds-1}})))}),1)}},{key:"handleNewGame",value:function(){this.setState({lives:3,questionNum:1,totalScore:0,questions:[{id:0,question:"loading...",correctAnswer:"loading...",wrongAnswer1:"loading...",wrongAnswer2:"loading...",wrongAnswer3:"loading..."}],currentQuestionId:0,notClicked:!0,randomAnswers:[],seconds:2e3,gameOver:!1,gameStarted:!1,name:"",leaderboard:[{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"},{name:"n/a",score:"n/a"}]}),this.getQuestions()}},{key:"displayLives",value:function(){var e;for(e=0;e<this.state.lives;e++)return r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("img",{src:u.a,width:"40px",alt:"error"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"game"},r.a.createElement("div",{style:{display:this.state.gameStarted?"none":"block"}},r.a.createElement("h1",{className:"headline-njit"},"NJIT"),r.a.createElement("h1",{className:"headline-snd"},"Swimming & Diving"),r.a.createElement("h1",{className:"headline"},"Trivia Game"),r.a.createElement("input",{className:"name-input",type:"text",minLength:"1",maxLength:"10",placeholder:"Enter your name",value:this.state.name,onChange:this.handleNameChange,style:{width:200,margin:"1rem auto",fontWeight:"bold"}}),r.a.createElement("div",{className:"start-button",onClick:this.handleStart},"start!")),r.a.createElement("div",{style:{display:this.state.questions&&this.state.gameStarted?"block":"none"}},r.a.createElement("table",{style:{display:this.state.questions&&this.state.gameStarted?"block":"none"},className:"table-bar"},r.a.createElement("tr",null,r.a.createElement("td",{className:"td-bar"},this.state.totalScore),r.a.createElement("td",{className:"td-bar"},"Question ",this.state.questionNum),r.a.createElement("td",{className:"td-bar"},this.state.seconds>0?1+(this.state.seconds/100|0):"Time's up!"),r.a.createElement("td",{className:"td-bar"},r.a.createElement("div",null,r.a.createElement("div",{style:{display:this.state.lives>0?"inline-block":"none"}},r.a.createElement("img",{src:u.a,width:"25rem",alt:"error"})),r.a.createElement("div",{style:{display:this.state.lives>1?"inline-block":"none"}},r.a.createElement("img",{src:u.a,width:"25rem",alt:"error"})),r.a.createElement("div",{style:{display:this.state.lives>2?"inline-block":"none"}},r.a.createElement("img",{src:u.a,width:(window.innerWidth,"25rem"),alt:"error"})))))),r.a.createElement("br",{style:{display:this.state.questions&&this.state.seconds>-300?"block":"none"}}),r.a.createElement("div",{className:"question",style:{display:this.state.questions&&this.state.seconds>-300?"block":"none"}},this.state.questions&&this.state.questions[this.state.currentQuestionId].question),r.a.createElement("br",{style:{display:this.state.questions&&this.state.seconds>-300?"block":"none"}}),r.a.createElement("div",{className:"div-answer",onClick:this.state.notClicked&&this.state.seconds>0&&this.handleClick,style:{display:this.state.questions&&this.state.seconds>-300?"block":"none",backgroundColor:2e3===this.state.seconds&&""}}," A: ",this.state.questions&&this.state.randomAnswers[0]),r.a.createElement("br",{style:{display:this.state.questions&&this.state.seconds>-300?"block":"none"}}),r.a.createElement("div",{className:"div-answer",onClick:this.state.notClicked&&this.state.seconds>0&&this.handleClick,style:{display:this.state.questions&&this.state.seconds>-300?"block":"none",backgroundColor:2e3===this.state.seconds&&""}},"B: ",this.state.questions&&this.state.randomAnswers[1]),r.a.createElement("br",{style:{display:this.state.questions&&this.state.seconds>-300?"block":"none"}}),r.a.createElement("div",{className:"div-answer",onClick:this.state.notClicked&&this.state.seconds>0&&this.handleClick,style:{display:this.state.questions&&this.state.seconds>-300?"block":"none",backgroundColor:2e3===this.state.seconds&&""}},"C: ",this.state.questions&&this.state.randomAnswers[2]),r.a.createElement("br",{style:{display:this.state.questions&&this.state.seconds>-300?"block":"none"}}),r.a.createElement("div",{className:"div-answer",onClick:this.state.notClicked&&this.state.seconds>0&&this.handleClick,style:{display:this.state.questions&&this.state.seconds>-300?"block":"none",backgroundColor:2e3===this.state.seconds&&""}},"D: ",this.state.questions&&this.state.randomAnswers[3]),r.a.createElement("br",{style:{display:this.state.questions&&this.state.seconds>-300?"block":"none"}})),r.a.createElement("div",{style:{display:this.state.gameOver&&this.state.gameStarted&&!this.state.questions?"block":"none"}},r.a.createElement("h1",{className:"final-score",style:{display:this.state.gameOver?"block":"none"}},"Final Score: ",this.state.totalScore),r.a.createElement("h1",{className:"leaderboard-headline"},"Top 10 leaderboard"),r.a.createElement("table",{className:"leaderboard-table",style:{display:this.state.leaderboard?"block":"none",backgroundColor:"#e6e6e6",width:"19rem",margin:"1rem auto",border:"1px solid black",borderRadius:25,padding:"1rem"}},r.a.createElement("tr",null,r.a.createElement("td",{style:{width:"2rem"}},"#"),r.a.createElement("td",{style:{width:"10rem"}},"name"),r.a.createElement("td",{style:{width:"5rem"}},"score")),r.a.createElement("tr",{style:{display:this.state.leaderboard.length>0?"block":"none"}},r.a.createElement("td",{style:{color:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&"red",width:"2rem"}},"1"),r.a.createElement("td",{style:{color:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&"red",width:"10rem"}},this.state.leaderboard.length>0&&this.state.leaderboard[0].name),r.a.createElement("td",{style:{color:this.state.leaderboard.length>0&&this.state.name.toUpperCase().trim()===this.state.leaderboard[0].name.toUpperCase().trim()&&"red",width:"5rem"}},this.state.leaderboard.length>0&&this.state.leaderboard[0].score)),r.a.createElement("tr",{style:{display:this.state.leaderboard.length>1?"block":"none"}},r.a.createElement("td",{style:{color:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&"red",width:"2rem"}},"2"),r.a.createElement("td",{style:{color:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&"red",width:"10rem"}},this.state.leaderboard.length>1&&this.state.leaderboard[1].name),r.a.createElement("td",{style:{color:this.state.leaderboard.length>1&&this.state.name.toUpperCase().trim()===this.state.leaderboard[1].name.toUpperCase().trim()&&"red",width:"5rem"}},this.state.leaderboard.length>1&&this.state.leaderboard[1].score)),r.a.createElement("tr",{style:{display:this.state.leaderboard.length>2?"block":"none"}},r.a.createElement("td",{style:{color:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&"red",width:"2rem"}},"3"),r.a.createElement("td",{style:{color:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&"red",width:"10rem"}},this.state.leaderboard.length>2&&this.state.leaderboard[2].name),r.a.createElement("td",{style:{color:this.state.leaderboard.length>2&&this.state.name.toUpperCase().trim()===this.state.leaderboard[2].name.toUpperCase().trim()&&"red",width:"5rem"}},this.state.leaderboard.length>2&&this.state.leaderboard[2].score)),r.a.createElement("tr",{style:{display:this.state.leaderboard.length>3?"block":"none"}},r.a.createElement("td",{style:{color:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&"red",width:"2rem"}},"4"),r.a.createElement("td",{style:{color:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&"red",width:"10rem"}},this.state.leaderboard.length>3&&this.state.leaderboard[3].name),r.a.createElement("td",{style:{color:this.state.leaderboard.length>3&&this.state.name.toUpperCase().trim()===this.state.leaderboard[3].name.toUpperCase().trim()&&"red",width:"5rem"}},this.state.leaderboard.length>3&&this.state.leaderboard[3].score)),r.a.createElement("tr",{style:{display:this.state.leaderboard.length>4?"block":"none"}},r.a.createElement("td",{style:{color:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&"red",width:"2rem"}},"5"),r.a.createElement("td",{style:{color:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&"red",width:"10rem"}},this.state.leaderboard.length>4&&this.state.leaderboard[4].name),r.a.createElement("td",{style:{color:this.state.leaderboard.length>4&&this.state.name.toUpperCase().trim()===this.state.leaderboard[4].name.toUpperCase().trim()&&"red",width:"5rem"}},this.state.leaderboard.length>4&&this.state.leaderboard[4].score)),r.a.createElement("tr",{style:{display:this.state.leaderboard.length>5?"block":"none"}},r.a.createElement("td",{style:{color:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&"red",width:"2rem"}},"6"),r.a.createElement("td",{style:{color:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&"red",width:"10rem"}},this.state.leaderboard.length>5&&this.state.leaderboard[5].name),r.a.createElement("td",{style:{color:this.state.leaderboard.length>5&&this.state.name.toUpperCase().trim()===this.state.leaderboard[5].name.toUpperCase().trim()&&"red",width:"5rem"}},this.state.leaderboard.length>5&&this.state.leaderboard[5].score)),r.a.createElement("tr",{style:{display:this.state.leaderboard.length>6?"block":"none"}},r.a.createElement("td",{style:{color:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&"red",width:"2rem"}},"7"),r.a.createElement("td",{style:{color:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&"red",width:"10rem"}},this.state.leaderboard.length>6&&this.state.leaderboard[6].name),r.a.createElement("td",{style:{color:this.state.leaderboard.length>6&&this.state.name.toUpperCase().trim()===this.state.leaderboard[6].name.toUpperCase().trim()&&"red",width:"5rem"}},this.state.leaderboard.length>6&&this.state.leaderboard[6].score)),r.a.createElement("tr",{style:{display:this.state.leaderboard.length>7?"block":"none"}},r.a.createElement("td",{style:{color:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&"red",width:"2rem"}},"8"),r.a.createElement("td",{style:{color:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&"red",width:"10rem"}},this.state.leaderboard.length>7&&this.state.leaderboard[7].name),r.a.createElement("td",{style:{color:this.state.leaderboard.length>7&&this.state.name.toUpperCase().trim()===this.state.leaderboard[7].name.toUpperCase().trim()&&"red",width:"5rem"}},this.state.leaderboard.length>7&&this.state.leaderboard[7].score)),r.a.createElement("tr",{style:{display:this.state.leaderboard.length>8?"block":"none"}},r.a.createElement("td",{style:{color:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&"red",width:"2rem"}},"9"),r.a.createElement("td",{style:{color:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&"red",width:"10rem"}},this.state.leaderboard.length>8&&this.state.leaderboard[8].name),r.a.createElement("td",{style:{color:this.state.leaderboard.length>8&&this.state.name.toUpperCase().trim()===this.state.leaderboard[8].name.toUpperCase().trim()&&"red",width:"5rem"}},this.state.leaderboard.length>8&&this.state.leaderboard[8].score)),r.a.createElement("tr",{style:{display:this.state.leaderboard.length>9?"block":"none"}},r.a.createElement("td",{style:{color:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&"red",width:"2rem"}},"10"),r.a.createElement("td",{style:{color:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&"red",width:"10rem"}},this.state.leaderboard.length>9&&this.state.leaderboard[9].name),r.a.createElement("td",{style:{color:this.state.leaderboard.length>9&&this.state.name.toUpperCase().trim()===this.state.leaderboard[9].name.toUpperCase().trim()&&"red",width:"5rem"}},this.state.leaderboard.length>9&&this.state.leaderboard[9].score))),r.a.createElement("div",{className:"start-button",onClick:this.handleNewGame},"play agian!")))}}]),a}(r.a.Component);var p=function(){return r.a.createElement("div",null,r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.53452d62.chunk.js.map