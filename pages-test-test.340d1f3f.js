(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-test-test"],{"0283":function(e,t,n){"use strict";function a(e,t){var n=!1;return wx.login({success:function(e){var t=e.code;uni.setStorageSync("code",t)}}),wx.getUserProfile({lang:"zh_CN",desc:"用于完善会员资料",success:function(n){n.userInfo;var a=uni.getStorageSync("code"),u={code:a,encryptedData:n.encryptedData,iv:n.iv,password:"",productCode:"TICKETSTORE",username:""};t.$u.post(t.api.serverUrls.authLogin,u).then((function(n){200==n.code&&(t.cache.put("access_token",n.data.userToken.tokenValue),t.cache.put("openId",n.data.userInfo.openId),t.cache.put("userId",n.data.userInfo.userId),t.cache.put("userInfo",n.data.userInfo),t.cache.put("prove",n.data.userInfo.sysUser.status),uni.reLaunch({url:e}))}))},fail:function(e){}}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.wx_login=a},"088e":function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.myLogin=void 0;var u=a(n("d0bb")),o=function(){return(0,u.default)({url:"​/api/auth​/login",method:"get"})};t.myLogin=o},"1e93":function(e,t,n){"use strict";n.r(t);var a=n("8487"),u=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=u.a},2305:function(e,t,n){"use strict";n.r(t);var a=n("7063"),u=n("1e93");for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);n("4eea");var s,c=n("f0c5"),r=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,"3da9963c",null,!1,a["a"],s);t["default"]=r.exports},2335:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".active[data-v-3da9963c]{background-color:#007aff!important;color:#fff}",""]),e.exports=t},4412:function(e,t,n){var a=n("2335");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var u=n("4f06").default;u("2701ead1",a,!0,{sourceMap:!1,shadowMode:!1})},"4eea":function(e,t,n){"use strict";var a=n("4412"),u=n.n(a);u.a},7063:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"box"},[n("v-uni-view",[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toMyComponents.apply(void 0,arguments)}}},[e._v("我的组件库")])],1),n("v-uni-view",[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getUsers.apply(void 0,arguments)}}},[e._v("模拟数据")])],1)],1)},o=[]},8487:function(e,t,n){"use strict";(function(e){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n("eaa0")),n("088e"),n("0283");var u={data:function(){return{}},onLoad:function(){},methods:{toMyComponents:function(){uni.navigateTo({url:"../../my_components/components_lib/components_lib"})},handleUsersPost:function(){uni.request({url:"https://uniapp-shop.vercel.app/api/test",method:"POST",data:{username:"jack",age:20},success:function(t){e("log","res",t," at pages/test/test.vue:71")},fail:function(){},complete:function(){}})},handleUsers:function(){uni.request({url:"https://uniapp-shop.vercel.app/api/user/getUsers",method:"GET",data:{},success:function(t){e("log","res",t," at pages/test/test.vue:85")},fail:function(){},complete:function(){}})},handleLogin:function(){wx.login({success:function(t){e("log","res",t," at pages/test/test.vue:96");var n=t.code;wx.request({url:"http://123.207.32.32:3000/login",method:"POST",data:{code:n},success:function(t){e("log","data",t," at pages/test/test.vue:106")}})}})},getUsers:function(){uni.request({url:"/category/allCategory",method:"GET",data:{},success:function(t){e("log","res",t," at pages/test/test.vue:121")},fail:function(){},complete:function(){}})},login:function(t){e("log","login..."," at pages/test/test.vue:130"),uni.login({success:function(t){e("log","res",t," at pages/test/test.vue:135"),uni.setStorageSync("code",t.code)}}),uni.getUserProfile({desc:"用于完善会员资料",success:function(t){var n=uni.getStorageSync("code"),a={code:n,encryptedData:t.encryptedData,iv:t.iv,rawData:t.rawData,signature:t.signature};e("log","params",a," at pages/test/test.vue:154"),uni.request({url:"https://www.uinav.com/api/public/v1/users/wxlogin",method:"POST",data:a,success:function(t){e("log","res",t," at pages/test/test.vue:163")},fail:function(){},complete:function(){}})}})}}};t.default=u}).call(this,n("0de9")["log"])},d0bb:function(e,t,n){"use strict";function a(e){return new Promise((function(t,n){var a=localStorage.getItem("token");uni.request({url:e.url,method:e.method,data:e.data,header:{Authorization:"Bearer "+a},success:function(e){t(e)},fail:function(e){n(e)},complete:function(){}})}))}n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},eaa0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{username:"aaa",age:30},{username:"bbb",age:20},{username:"ccc",age:40},{username:"ddd",age:50}];t.default=a}}]);