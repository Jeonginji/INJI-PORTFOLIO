const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req,res)=>{
    console.log('main router')
    res.sendFile(path.join(__dirname,'..','..','frontend','build','index.html'))
})

// Test.jsx 에서 보내온 데이터를 확인하는 backend router
router.post('getData/',(req,res)=>{
    console.log('getdata router')
})

module.exports = router; // 라우터 호출