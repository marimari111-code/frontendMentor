

const markAll = document.querySelector('#mark-all');
const numberElemnet = document.querySelector('#number');
const posts = document.querySelectorAll('.post')

posts.forEach(post => {
    post.addEventListener('click', () => {
        post.querySelector('.status').classList.remove('not-read')
       prueba()
    }) 

})

markAll.addEventListener('click', ()=>{
   const notReadElements = document.querySelectorAll('.not-read')
   notReadElements.forEach(notReadElements => {
    notReadElements.classList.remove('not-read')
   })
   prueba()
 
   
})

const prueba = () => {
    const notReadElementsActual = document.querySelectorAll('.not-read');
    numberElemnet.innerText = notReadElementsActual.length;
}

