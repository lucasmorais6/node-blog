const router= require('express').Router() 

router.get('/comentarios/:postid', (req,res) => {
    res.json({
        autor:'Autor Comentario',
        conteudo: 'Comentario Post',
    })
})

module.exports = router