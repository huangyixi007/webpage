// const Mock = require('mockjs');
// const Random = Mock.Random;
// const produceNewsData = function() {
//     let articles = [];
//     for (let i = 0; i < 100; i++) {
//         let newArticleObject = {
//             title: Random.csentence(5, 30), // Random.csentence( min, max )
//             thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
//             author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
//             date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//         }
//         articles.push(newArticleObject)
//     }

//     return {
//         articles: articles,
//         code: 2000,
//         success: '请求成功'
//     }
// }

// let List = [];
// for (let i = 0; i < 100; i++) {
//     let newArticleObject = {
//         title: Random.csentence(5, 30), // Random.csentence( min, max )
//         thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
//         author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
//         date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//     }
//     List.push(newArticleObject)
// }

// let requests = [
//     {
//         url: '/Navigation/getIndexCarouselList',
//         type: 'post',
//         response: (config) =>{
//             return {
//                 data: List,
//                 code: 2000,
//                 success: 'success'
//             }
//         }
//     }
// ]

// export default requests;

// Mock.mock('/Navigation/getIndexCarouselList', 'post', produceNewsData);