(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{44:function(e,a,t){"use strict";var n=t(0),s=t.n(n);t(45);a.a=s.a.memo(({link:e,children:a,onClick:t})=>{const n=s.a.createElement("button",{onClick:t,className:"button"},a);return e?s.a.createElement("a",{href:e},n):n})},45:function(e,a,t){},55:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(6),o=t(44);const l=["No userbots, spamming, or macros","No sharing exploits","No coin storage accounts/farming accounts (alts)","Offensive/advertising names on the leaderboard will be wiped and blacklisted","Do not use the bot for racism, homophobia, or advertising","Coins are not to be used in scams or invite servers. Example: giving people meme coins to invite as many people as possible","Selling meme coins, especially mass advertising, is strictly forbidden","Not applicable"];var r={"Server Ban":["Keep it Discord TOS friendly","Don't be rude or toxic, there's a difference between joking and being a dick.","No advertising ANYTHING, including servers ran by our mods, or things mentioned in announcements in the past. This also means no dm advertising unless specifically requested.","Keep bot usage in relevant bot command channels, the bot doesn't work in general-chat","Emotes/Images/Reactions that break any of these rules (or can be triggers for epilepsy) are forbidden",'Racism, Homophobia, or any other kind of targeted hate is not okay even as a joke, this includes telling certain groups to "die"',"Alt accounts/Ban evading is against the rules","Tagging developers for anything short of an emergency is bannable if they see fit","No relationship roleplaying (fake relationships). It's gross.","No mass nickname trends (and bypassing this by matching all your usernames is also against the rules, smartasses)","No asking other users for coins, this isn't a charity server.","Voice chat needs to stay clean too. All of the rules apply there, with the addition of not ear-raping other members.","Fan art only in the #dank-memer-fan-art channel","New movie/game spoilers are not allowed, including even if you use spoiler tags. Allow at least 2 weeks before talking about them.","The bot is in English, only speak English here","Not applicable"],"Bot Ban":l,"Bot Blacklist":l};t(55);a.default=Object(i.b)(e=>e.login)(class extends n.Component{constructor(e){super(e),this.textAreaRef=s.a.createRef(),this.state={banType:"Bot Ban",brokenRules:[]}}async send(){if(!this.state.banType)return alert("You have to select the kind of ban you'd like to appeal.");if(this.textAreaRef.current.value.split(" ").length<20)return alert("Your appeal must be at least 20 words.");if(0===this.state.brokenRules.length)return alert('You must tick at least one broken rule. If you feel like you haven\'t broken any, select "Not Applicable".');switch((await fetch("/api/appeal",{credentials:"same-origin",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({banType:this.state.banType,body:this.textAreaRef.current.value,rules:this.state.brokenRules})})).status){case 429:return this.setState({finished:s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"header"},"You've already recently appealed."),"You have to wait before you try again.")});case 200:return this.setState({finished:s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"header"},"Your appeal has been sent."),"Make sure you keep your direct messages with the bot open.",s.a.createElement("br",null),"If we have any information to give you, the bot will send you a direct message.",s.a.createElement("br",null),"If your appeal is approved or denied, you may not receive a response either way.")});case 403:return this.setState({finished:s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"header"},"You have been banned from sending appeals."),"Appeal bans are un-appealable. Good job. I'm proud of you.")})}}handleRadio(e){this.setState({banType:e.target.value})}handleCheckbox(e){this.setState(a=>({brokenRules:a.brokenRules.includes(e)?a.brokenRules.filter(a=>a!==e):a.brokenRules.concat(e)}))}render(){return this.props.loggedIn?this.state.finished?s.a.createElement("div",{className:"content appeal"},this.state.finished):s.a.createElement("div",{className:"content appeal"},s.a.createElement("section",null,"What kind of ban would you like to appeal?",s.a.createElement("br",null),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"Bot Ban",checked:"Bot Ban"===this.state.banType,onChange:this.handleRadio.bind(this)}),"Bot Ban"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"Bot Blacklist",checked:"Bot Blacklist"===this.state.banType,onChange:this.handleRadio.bind(this)}),"Bot Blacklist"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"Server Ban",checked:"Server Ban"===this.state.banType,onChange:this.handleRadio.bind(this)}),"Server Ban")),s.a.createElement("section",null,"Which rules did you break?",s.a.createElement("br",null),r[this.state.banType].map((e,a)=>s.a.createElement("label",{key:e},s.a.createElement("input",{type:"checkbox",value:e,checked:this.state.brokenRules.includes(e),onChange:this.handleCheckbox.bind(this,e)}),`${a+1}. ${e}`))),s.a.createElement("section",null,s.a.createElement("label",null,"Write the body of your appeal below. Why should we appeal your ban?",s.a.createElement("br",null),s.a.createElement("textarea",{className:"textarea",ref:this.textAreaRef,rows:"12"}))),s.a.createElement("section",null,s.a.createElement(o.a,{onClick:this.send.bind(this)},"Send"))):s.a.createElement("div",{className:"content appeal"},s.a.createElement("header",{className:"header"},"You aren't logged in with your Discord account. ",s.a.createElement("a",{href:"/oauth/login?redirect=/appeals"},"Click this")," to log in."))}})}}]);