

const setImage=(id)=> {
    const images=['geralt_livro.jpg', 'geralt_TW1.jpg', 'geralt_TW2.png', 'geralt_TW3.png', 'geralt_netflix.png']
   // let btn=document.querySelector(`.btnSelecionado`)
    let imgAtual=document.getElementById('imgAtual')
    
   
    //btn.classList.add('.btnSelecionado2')
    imgAtual.src=`../imagens/${images[id]}`
   
   
    /*for(let i=0;i<4;i++){//tira a cor dos que estão não são selecionados
        if(i!=id){
            document.getElementById(`btn${id}`).style.backgroundColor='black'
        }
    }*/

}