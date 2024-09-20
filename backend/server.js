const express = require('express')
const app = express()
const indexRouter = require('./routes')
// routes 폴더 안에 파일 이름이 index인 경우는 경로를 작성할 때 생략이 가능하나,
// 파일 이름이 다른 경우에는 정확하게 작성해줘야한다
// ex) ./routes/user
const path = require('path')

app.use(express.static(path.join(__dirname,'..','frontend','build')))

const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/',indexRouter)

app.set('port', process.env.PORT || 3001) // 환경변수
app.listen(app.get('port'),()=>{ // 지금 쓰고 있는 포트값을 가지고 와서 계속 듣고 있겠다.
    console.log(`Server is running on ${app.get('port')}`)
}) 