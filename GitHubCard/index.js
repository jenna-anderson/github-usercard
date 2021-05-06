import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const jennaData = axios.get('https://api.github.com/users/jenna-anderson');
console.log(jennaData);

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(obj){

  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const personName = document.createElement('h3');
  const username = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const numFollowers = document.createElement('p');
  const numFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  personName.classList.add('name');
  username.classList.add('username');

  image.setAttribute('src', obj.avatar_url);
  personName.textContent = obj.name;
  username.textContent = obj.login;
  userLocation.textContent = (`Location: ${obj.location}`);
  address.textContent = (obj.html_url);
  address.setAttribute('href', obj.html_url);
  profile.textContent = `Profile: `;
  numFollowers.textContent = (`Followers: ${obj.followers}`);
  numFollowing.textContent = (`Following: ${obj.following}`);
  userBio.textContent = (`Bio: ${obj.bio}`);
  
  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(personName);
  cardInfo.appendChild(username);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(numFollowers);
  cardInfo.appendChild(numFollowing);
  cardInfo.appendChild(userBio);
  profile.appendChild(address);

  return card;
}

const cardsContainer = document.querySelector('div.cards');

axios
.get('https://api.github.com/users/jenna-anderson')
.then(res => {
  // console.log('RESPONSE: ', res);
  const profileInfo = res.data;
  const profileCard = cardMaker(profileInfo);
  cardsContainer.appendChild(profileCard); 
})
.catch(err => {
  console.log(err);
})


followersArray.forEach(elem => {
axios
.get(`https://api.github.com/users/${elem}`)
.then(res => {
  const profileInfo = res.data;
  const profileCard = cardMaker(profileInfo);
  cardsContainer.appendChild(profileCard);
})
.catch(err => {
  console.log(err);
})
})



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
