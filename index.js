// công dụng của nodemon là để lắng nghe những thay đổi trong code và nó sẽ tự reload lại mà không cần ctrl c xong chạy lại úng dụng(node index.js)
// sau khi cài nodemon, vào package.json -> script thêm dòng "start": "nodemon index.js" và sau đó ta ra chạy dự án bằng: npm start
const express = require('express')
// import express từ thừ viện đã cài(npm)
// khởi tạo app = fuction express 
const app = express()
// khởi tạo cổng vào
const port = 3000
 // get là tuyến đường của các trang
 // send là nọi dung sẽ được hiển thị
app.get('/tin-tuc', (req, res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
  res.send('Hello World!')
})

// listen là sever đang lắng nghe port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})