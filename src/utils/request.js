import Taro from "@tarojs/taro";

export const testUrl ='http://localhost:3001';
//判断微信小程序和h5
export const isWexin = process.env.TARO_ENV === 'weapp';
export const post = (url, data, method = 'POST') => {
    let strUrl = isWexin ? testUrl+ url :url;
    return Taro.request({
        method,
        url: strUrl,
        data,
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        success(res) {
            console.log(res.data);
        }
    })
}

export const get = (url, method = 'GET') => {
    let strUrl = isWexin ? testUrl+ url :url;
    return Taro.request({
        method,
        url:strUrl,
        success(res) {
            console.log(res.data);
        }
    })
    
}
// }
