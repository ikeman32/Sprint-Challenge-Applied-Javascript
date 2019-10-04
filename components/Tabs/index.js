// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get(' https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        //console.log(response.data.topics);
        for (i = 0; i < response.data.topics.length; i++) {
            document.querySelector('.topics')
                .appendChild(Topics(response.data.topics[i]));
        }
    })
    .catch(error => {
        alert(`So terribly sorry but there was an ${error}`);
    });

function Topics(topic) {
    const newTopic = document.createElement('div');

    newTopic.classList.add('tab');

    newTopic.textContent = topic;

    return newTopic;
}