import Taro from "@tarojs/taro";

export const Min=2;

// export default Request = {
//     //判断微信小程序和h5
//     isWexin: function () {
//         var ua = window.navigator.userAgent.toLowerCase();
//         if (ua.match(/MicroMessenger/i) == 'micromessenger') {      //判断是否是微信环境
//             //微信环境下
//             wx.miniProgram.getEnv(function (res) {
//                 if (res.miniprogram) {
//                     return true
//                 } else {
//                     return false;
//                 }
//             })
//         } else {
//             return false;
//         }
//     },
//     post: function (url, data, method = 'POST') {
//         console.log(this.isWexin());
//        return Taro.request({
//             method,
//             url,
//             data,
//             header: {
//                 'content-type': 'application/x-www-form-urlencoded'
//             },
//             success(res) {
//                 console.log(res.data);
//             }
//         })
//     },

//     get: function (url, method = 'GET') {
//        return Taro.request({
//             method,
//             url,
//             success(res) {
//                 console.log(res.data);
//             }
//         })
//     }
// }
