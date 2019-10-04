// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get(' https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        //console.log(res.data.articles.javascript);
        //res.data.articles.javascript;
        // for (let i = 0; i < theTopics.length; i++) {
        //     console.log(theTopics[i]);
        // }
        for (let [key, value] of Object.entries(res.data.articles)) {
            console.log(`${key}: ${value}`);
        }


    })
    .catch(error => {
        alert(`So terribly sorry but there was an ${error} articles`);
    });
let theTopics = [];
const topics = axios.get(' https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        for (let [key, value] of Object.entries(response.data.topics)) {

        }

    })
    .catch(error => {
        alert(`So terribly sorry but there was an ${error} topics`);
    });



function Articles(headline, img, author) {
    //create elements
    const
        newCard = document.createElement('div'),
        newHeadline = document.createElement('div'),
        newAuthor = document.createElement('div'),
        newContainer = document.createElement('div'),
        newImg = document.createElement('img'),
        newBy = document.createElement();

    //Structure
    newCard.appendChild(newHeadline);
    newCard.appendChild(newAuthor);
    newAuthor.appendChild(newContainer);
    newAuthor.appendChild(newBy);
    newContainer.appendChild(newImg);

    //Classes
    newCard.classList.add('card');
    newHeadline.classList.add('headline');
    newAuthor.classList.add('author');
    newContainer.classList.add('img-container');

    //content
    newHeadline.textContent = headline;
    newImg.src = img;
    newBy.textContent = `By ${author}`;

    return newCard

}