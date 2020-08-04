// 原始的操作方式
// 将函数放入私有作用域里面 设置开放接口供外部调用
// (function(window){
//     function hd(){
//         console.log("4.1.js- hd");
//     }
//     function show(){
//         console.log("4.1.js- show");
//     }
//     window.js1 = {hd,show};
// })(window)


// 现在的操作方式 
{
    let hd = function(){
        console.log("4.1.js- hd");
    }
    let show = function (){
        console.log("4.1.js- show");
    }
    window.js1 = {hd, show};
}