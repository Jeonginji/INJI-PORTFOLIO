const express = require('express')
const router = express.Router()
const path = require('path')
const conn = require('../config/db')

router.get('/', (req,res)=>{
    console.log('main router')
    res.sendFile(path.join(__dirname,'..','..','frontend','build','index.html'))
})

// 회원가입 기능 라우터
router.post('/handleJoin',(req,res)=>{
    console.log('join router', req.body)
    let {userName, id, pw} = req.body

    let sql = "INSERT INTO PORT_MEMBER VALUES (?,?,?)"
    conn.query(sql, [userName, id, pw], (err, rows)=>{
        console.log('rows',rows)
        if(rows){
            res.json({result : 'success'})
        } else {
            res.json({result : 'failed'})
        }
    })
})

// 로그인 기능 라우터
router.post('/handleSubmit', (req,res)=>{
    console.log('handleSubmit',req.body)
    let {id, pw} = req.body
    let sql = "SELECT ID FROM PORT_MEMBER WHERE ID=? AND PW=?"
    conn.query(sql, [id,pw], (err,rows)=>{
        console.log('rows', rows)
        if(rows.length > 0){
            res.json({result : 'success', id : rows[0].ID})
        } else {
            res.json({result : 'failed'})
        }
    })

})

module.exports = router;