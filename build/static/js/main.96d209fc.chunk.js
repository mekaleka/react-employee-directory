(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{43:function(e,t,a){e.exports=a(90)},86:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(7),o=a.n(l),c=a(32),s=a(33),i=a(41),m=a(42),d=a(34),u=a.n(d),p=a(40),h=function(e){var t={columns:[{label:"Name",field:"name",sort:"asc",width:500},{label:"Email",field:"email",sort:"asc",width:500},{label:"Image",field:"image",sort:"asc",width:500},{label:"Phone",field:"phone",sort:"asc",width:300},{label:"DOB",field:"dob",sort:"asc",width:250}],rows:e.employees};return console.log("Props",e),r.a.createElement(p.c,{sorting:!0,striped:!0,bordered:!0,data:t})},f=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={employeeRecords:[]},e.componentDidMount=function(){u.a.get("https://randomuser.me/api/?results=500&nat=us").then((function(t){var a=t.data.results,n=[];console.log(a);for(var r=0;r<a.length;r++){var l={name:a[r].name.first+" "+a[r].name.last,email:a[r].email,image:a[r].picture.medium,phone:a[r].cell,dob:a[r].dob.date};n.push(l)}console.log(n),e.setState({employeeRecords:n})}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Employee Details"),r.a.createElement(h,{employees:this.state.employeeRecords}),">")}}]),a}(r.a.Component);a(86);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"jumotron"},"Staff Directory"),r.a.createElement(f,null))};a(87),a(88),a(89);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.96d209fc.chunk.js.map