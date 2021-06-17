(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),l=a(7),i=a.n(l),c=(a(13),a(2)),s=a(3),o=a(5),u=a(4),p=(a(14),a(8)),h=a(0),b=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).cell={margin:"0px",width:"33.33%",height:"33.33%",padding:"auto",border:"1px solid black",fontSize:"24px"},n}return Object(s.a)(a,[{key:"render",value:function(){var t=this;return Object(h.jsx)("button",{type:"button",style:this.cell,id:this.props.index,onClick:function(){return t.props.cellClick(t.props.id)},children:this.props.value})}}]),a}(r.a.Component),j=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(c.a)(this,a),n=e.call(this,t),console.log(t),n}return Object(s.a)(a,[{key:"render",value:function(){var t=this.props,e=t.currentPlayer,a=t.gameStatus;return Object(h.jsx)("label",{children:"won"===a?e+" Wins":e+"'s Trun"})}}]),a}(r.a.Component),d=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).div={backgroundColor:"black",color:"white",height:"300px",width:"500px",margin:"auto",padding:"20px"},n.turn={display:"flex",justifyContent:"center",alignContent:"center",backgroundColor:"black",color:"white",padding:"10px",marign:"auto",height:"50px"},n.victoryCheck=function(t,e,a){t=Number(t);for(var r=0;r<n.victoryLines[t].length;r++){var l=n.victoryLines[t][r];if(n.state.cells[l[0]]===e&&n.state.cells[l[1]]===e)return a}},n.handle=function(t){if(!n.state.cells[t]&&"won"!=n.state.gameStatus){var e=Object(p.a)(n.state.cells);e[t]=n.state.nextMove,n.victoryCheck(t,n.state.nextMove,n.state.player)===n.state.player&&n.setState({gameStatus:"won"});var a="O"===n.state.nextMove?"X":"O",r=n.state.player===n.props.player1?n.props.player2:n.props.player1;n.setState({cells:e,nextMove:a,player:r})}},n.state={player:n.props.player1,nextMove:"X",gameStatus:null,cells:[null,null,null,null,null,null,null,null,null]},n.victoryLines=[[[1,2],[4,8],[3,6]],[[0,2],[4,7]],[[0,1],[4,6],[5,8]],[[4,5],[0,6]],[[3,5],[0,8],[2,6],[1,7]],[[3,4],[2,8]],[[7,8],[2,4],[0,3]],[[6,8],[1,4]],[[6,7],[0,4],[2,5]]],n}return Object(s.a)(a,[{key:"render",value:function(){var t=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{style:this.div,children:this.state.cells.map((function(e,a){return Object(h.jsx)(b,{cellClick:t.handle,value:e,id:a},a)}))}),Object(h.jsx)("div",{style:this.turn,children:Object(h.jsx)(j,{currentPlayer:this.state.player,gameStatus:this.state.gameStatus})})]})}}]),a}(r.a.Component),y=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).div={backgroundColor:"black",display:"flex",alignItems:"center",flexDirection:"column",width:"500px",height:"20vh",marginBottom:"20px",padding:"20px"},n.handlePlayer1=function(t){n.setState({player1:t.target.value})},n.handlePlayer2=function(t){n.setState({player2:t.target.value})},n.handleSubmit=function(t){t.preventDefault(),n.props.getNames(n.state.player1,n.state.player2)},n.state={player1:"",player2:""},n}return Object(s.a)(a,[{key:"render",value:function(){var t=this;return Object(h.jsx)("div",{style:this.div,children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("lable",{style:{color:"white"},children:"Player 1 Name : "}),Object(h.jsx)("input",{type:"text",value:this.state.player1,onChange:function(e){return t.handlePlayer1(e)}}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{style:{color:"white"},children:"Player 2 Name : "}),Object(h.jsx)("input",{type:"text",value:this.state.player2,onChange:function(e){return t.handlePlayer2(e)}}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{style:{margin:"auto",marginTop:"15px"},type:"submit",children:"Start Game"})]})})}}]),a}(r.a.Component),v=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={player1:"",player2:""},n}return Object(s.a)(a,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"game",children:[Object(h.jsx)(y,{getNames:function(e,a){""===e||""===a?alert("Player Name Fields Cannot be Empty"):t.setState({player1:e,player2:a})}}),Object(h.jsx)(d,{player1:this.state.player1,player2:this.state.player2})]})}}]),a}(r.a.Component),x=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,l=e.getLCP,i=e.getTTFB;a(t),n(t),r(t),l(t),i(t)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.01aa97a1.chunk.js.map