const headings = document.querySelectorAll('.heading')

headings.forEach((panel) =>{
    panel.addEventListener('click', ()=>{
        removeAll()
        panel.classList.add('active')
   })
})

function removeAll(){
    headings.forEach((panel) =>{
        panel.classList.remove('active')
    })
}


//i just wanna use a another way wich is way more easier than the first one but it is not a good way to do that kinda coding.

//const h2_1 = document.getElementById('h2-1')
//const h2_2 = document.getElementById('h2-2')
//const h2_3 = document.getElementById('h2-3')
//const h2_4 = document.getElementById('h2-4')

//h2_1.addEventListener('click', ()=>{
//    h2_1.classList.toggle('active')
//})

//h2_2.addEventListener('click', ()=>{
//   h2_2.classList.toggle('active')
//})

//h2_3.addEventListener('click', ()=>{
//    h2_3.classList.toggle('active')
//})

//h2_4.addEventListener('click', ()=>{
//    h2_4.classList.toggle('active')
//})