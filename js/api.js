console.log(44);

// fetch('https://www.googleapis.com/books/v1/volumes?q=quilting')
//     .then(resp => {
         
//         return resp.json();
//     })
//     .then(booksInfo =>{
//         console.log(booksInfo);
//     })
//     .catch(err =>{
//         console.log('Niestety blad', err);
//     })

class Doggo {

constructor(){
    this.apiUrl = 'https://dog.ceo/api/';
    this.imgEl = document.querySelector('.featured-dogs img'); 
    
    this.init();
}

listBreeds(){
   return fetch(`${this.apiUrl}/breeds/list/all`)
    .then(resp => resp.json())
    .then(data => {
        return data.message;
    });
}

getRandomImage(){
    return fetch(`${this.apiUrl}/breeds/image/random`)
    .then(resp => resp.json())
    .then(data =>  data.message);
}

getRandomImageByBreed(breed){
    return fetch(`${this.apiUrl}/breed/${breed}/images/random`)
    .then(resp => resp.json())
    .then(data =>  data.message);
}

init(){
    this.getRandomImage()
        .then(src => this.imgEl.setAttribute('src', src));

    this.listBreeds()
        .then(breeds => console.log(breeds));

}
    
}

document.addEventListener('DOMContentLoaded', ()=>{
    new Doggo
})

// const img = document.querySelector('img')

// getRandomImageByBreed('dachshund')
// .then(imgSrc => img.setAttribute('src', imgSrc))