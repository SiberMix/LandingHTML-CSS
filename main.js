// const posts = [
//     {
//         title: 'Heading post',
//         content: 'TEST TEST'
//     },
//     {
//         title: 'Heading post',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, cumque doloremque expedita facilis'
//     },
//     {
//         title: 'Heading post',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, cumque doloremque expedita facilis'
//     },
// ]
const articleSection = document.querySelector('section')
async function fetchPosts(){
    try{
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
        const posts = await responce.json()
        articleSection.innerHTML = posts.map(post => getArticleElement(post.title,post.body)).join('')
    } catch (error){
        alert('error fetch', error)
    }
}

const getArticleElement = (title, body) =>
    `<article><h2>${title}</h2><div><p>${body}</p></div></article>`
fetchPosts()



