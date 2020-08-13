class ParamError extends Error {
    constructor(msg) {
        super(msg);
        this.name = "ParamError";
    }
}
class HttpError extends Error {
    constructor(msg) {
        super(msg);
        this.name = "HttpError";
    }
}
//定义函数
function ajax(url) {
    return new Promise((resolve, reject) => {
        if (!/^http/.test(url)) {
            throw new ParamError("请求地址格式错误");
        }
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(JSON.stringify(this.responseText));
            } else if (xhr.status === 404) {
                reject(new HttpError("用户不存在"));
            } else {
                reject(new Error("加载失败"));
            };
        };
        xhr.onerror = function () {
            reject(new Error("error"));
        }
    });
};