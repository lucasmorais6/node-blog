const router= require('express').Router() 

router.get('/postagens', (req,res) => {
    res.json({
        titulo: 'Primeiro post',
        conteudo: 'Post legal',
        autor:'Lucas Morais'
    })
})

module.exports = router