module.exports=function(){const e=require("./paths.js"),{ipcRenderer:t}=require("electron"),{domContentLoadedThen:o,createArrayOf:n,getHostname:i,arrayShuffle:r}=require("./util.js"),{onLogin:s,isLoggedIn:a,onAutoLogin:c}=require("./login.js"),{getUsableScoreMethods:l,getTheGapOf:u,showScore:g}=require("./score.js"),{lock:d,unlock:h,islocked:f}=require("./lock.js"),{TaskList:p,taskBundles:k,taskTypes:m}=require("./tasks.js"),q=require("./update.js"),j=["oapi.dingtalk.com","login.dingtalk.com","h5.dingtalk.com"],w="https://login.dingtalk.com/login/index.htm?goto="+encodeURIComponent(e.passwdLoginPage);o(async()=>{const o=t.sendSync("getAutoLoginSettings");if(location.href.startsWith(e.loginPage))return void s();if(location.href.startsWith(w)&&o)return void c(o);if(j.includes(i()))return;if(!a())return void(location.href=o?w:"https://pc.xuexi.cn/points/login.html?ref=https://www.xuexi.cn/");if(!f()){q();const[t,o,i,s]=await l();p.clear();let a=[];if(a.push(...n(k[1],u(t)),...n(k[2],u(i))),a.push(...n(k[4],u(o)),...n(k[5],u(s))),0==a.length)return;if(a=r(a),p.add(...a.reduce((e,t)=>e.concat(t),[])),d(),location.href.startsWith(e.myStudyPage))return void(location.href=e.homePage)}g();const y=p.getAll();await p.doAll2(y),0==y.length&&(h(),m[6]())})}();