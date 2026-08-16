/***
 +----------------------------------------------------------------------
 | 网站定制开发 微信：woniu_2025 [ WE ARE THE BEST. 2021-06-26 ]
 +----------------------------------------------------------------------
 | Copyright (c) 2021 https://snailweb.cn All Rights Reserved.
 +----------------------------------------------------------------------
 | Licensed ( https://snailweb.cn )
 +----------------------------------------------------------------------
 | Author: snail <137224272@qq.com>
 +----------------------------------------------------------------------
 ***/
console.log("\n %c 网站定制开发加微信：woniu_2025 %c https://snailweb.cn \n", "color: #ffffff; background: #f1404b; padding:5px 0;", "background: #030307; padding:5px 0;");

var imgArr = [
'https://img12.360buyimg.com/ddimg/jfs/t1/298479/16/15724/70101/68ad38b8F75818930/760f9d29b1db967b.jpg',
'https://img10.360buyimg.com/ddimg/jfs/t1/338992/25/1871/99848/68ad38fbF62380e47/843f609ecd15447c.jpg',
'https://img11.360buyimg.com/ddimg/jfs/t1/336896/6/1873/47941/68ad38fcFb1de1de0/33bfc9bc26086d5d.jpg',
'https://img11.360buyimg.com/ddimg/jfs/t1/339041/23/1653/77800/68ad38fcF7d71904a/74af9da88ba4c95b.jpg',
'https://img14.360buyimg.com/ddimg/jfs/t1/334145/31/4383/52170/68ad38fdF9abe23a5/2228b36d15fb10f0.jpg',
'https://img11.360buyimg.com/ddimg/jfs/t1/325100/38/11124/41803/68ad38ffF5b079872/6e5661111bec84db.jpg',
'https://img10.360buyimg.com/ddimg/jfs/t1/325988/17/11026/66066/68ad3903F4272e534/019397d5829ab6ae.jpg',
'https://img11.360buyimg.com/ddimg/jfs/t1/338861/9/1888/65766/68ad3904Ff73574ba/c5c7df0d8b08e467.jpg',
'https://img13.360buyimg.com/ddimg/jfs/t1/323455/14/11251/122467/68ad3905F7c3121ba/c0f6ce5520b302d1.jpg',
'https://img14.360buyimg.com/ddimg/jfs/t1/323361/33/11422/87276/68ad3906Fd7cefbf5/9a2cfed2b9431799.jpg',
'https://img10.360buyimg.com/ddimg/jfs/t1/330357/26/4345/144926/68ad3908Fccdbb786/375f824fc116e3dc.jpg',
'https://img10.360buyimg.com/ddimg/jfs/t1/329286/13/4371/83235/68ad3909F2d250098/9d15e60873589d22.jpg',
'https://img13.360buyimg.com/ddimg/jfs/t1/337952/31/1896/101119/68ad390cF7ad0e896/453d8390c6f1f1ad.jpg',
'https://img10.360buyimg.com/ddimg/jfs/t1/286408/3/25678/116791/68ad3adcFc0353e92/64d1bf0135b4663d.jpg',
'https://img12.360buyimg.com/ddimg/jfs/t1/340187/38/1948/125511/68ad3addFbadbb15d/77c6d3bba8be5363.jpg',
'https://img10.360buyimg.com/ddimg/jfs/t1/340300/25/1915/157900/68ad3adfF818319be/c420ecf8e061a8b7.jpg',
'https://img12.360buyimg.com/ddimg/jfs/t1/337952/18/1874/182650/68ad3ae0F7d7509cc/453d8390c6f1f1ad.jpg',
'https://img11.360buyimg.com/ddimg/jfs/t1/334320/13/4301/109752/68ad3ae1F19c6ed7b/fa4c8873fc7cdbde.jpg',
'https://img12.360buyimg.com/ddimg/jfs/t1/336117/28/1937/73079/68ad3ae2F00998f57/414bc2db76a921b0.jpg',
'https://img11.360buyimg.com/ddimg/jfs/t1/330765/25/4374/66895/68ad3ae7F1c20788b/a58b812da67792b3.jpg',
'https://img12.360buyimg.com/ddimg/jfs/t1/329653/17/4415/97224/68ad3ae8F848bd1c4/75da9f54e000c2fd.jpg',
'https://img13.360buyimg.com/ddimg/jfs/t1/293169/36/26685/95568/68ad3aebF1f67eb92/7d6734daf55d05a7.jpg'
]
bgImg = imgArr[Math.floor(Math.random() * imgArr.length)];
$('.img-bg').css('background-image', 'url(' + bgImg + ')');
var theme = {
    "ajaxurl": "",
    "addico": "/static/index/picture/add.png",
    "order": "asc",
    "formpostion": "top",
    "defaultclass": "io-grey-mode",
    "isCustomize": "1",
    "icourl": "",
    "icopng": ".png",
    "urlformat": "1",
    "customizemax": "10",
    "newWindow": "0",
    "lazyload": "1",
    "minNav": "1",
    "loading": "1",
    "hotWords": "baidu",
    "classColumns": " col-sm-6 col-md-4 col-xl-5a col-xxl-6a ",
    "apikey": ""
};
var localize = {
    "liked": "您已经赞过了!",
    "like": "谢谢点赞!",
    "networkerror": "网络错误 --.",
    "selectCategory": "为什么不选分类。",
    "addSuccess": "添加成功。",
    "timeout": "访问超时，请再试试，或者手动填写。",
    "lightMode": "日间模式",
    "nightMode": "夜间模式",
    "editBtn": "编辑",
    "okBtn": "确定",
    "urlExist": "该网址已经存在了 --.",
    "cancelBtn": "取消",
    "successAlert": "成功",
    "infoAlert": "信息",
    "warningAlert": "警告",
    "errorAlert": "错误",
    "extractionCode": "网盘提取码已复制，点“确定”进入下载页面。"
};