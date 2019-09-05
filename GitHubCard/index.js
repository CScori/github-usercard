
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const card = document.querySelector('.cards');

axios.get(`https://api.github.com/users/CScori`)
.then(response => {
response.data.forEach(date => {
  const newTab = cardContainer(date);
  cardContainer.appendChild(newTab);
})
})
.catch(err => {
  console.error(err)
});


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  {
    "login": "bayronpuac",
    "id": 53735140,
    "node_id": "MDQ6VXNlcjUzNzM1MTQw",
    "avatar_url": "https://avatars3.githubusercontent.com/u/53735140?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/bayronpuac",
    "html_url": "https://github.com/bayronpuac",
    "followers_url": "https://api.github.com/users/bayronpuac/followers",
    "following_url": "https://api.github.com/users/bayronpuac/following{/other_user}",
    "gists_url": "https://api.github.com/users/bayronpuac/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/bayronpuac/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/bayronpuac/subscriptions",
    "organizations_url": "https://api.github.com/users/bayronpuac/orgs",
    "repos_url": "https://api.github.com/users/bayronpuac/repos",
    "events_url": "https://api.github.com/users/bayronpuac/events{/privacy}",
    "received_events_url": "https://api.github.com/users/bayronpuac/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "Wais-A",
    "id": 12667453,
    "node_id": "MDQ6VXNlcjEyNjY3NDUz",
    "avatar_url": "https://avatars2.githubusercontent.com/u/12667453?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Wais-A",
    "html_url": "https://github.com/Wais-A",
    "followers_url": "https://api.github.com/users/Wais-A/followers",
    "following_url": "https://api.github.com/users/Wais-A/following{/other_user}",
    "gists_url": "https://api.github.com/users/Wais-A/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Wais-A/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Wais-A/subscriptions",
    "organizations_url": "https://api.github.com/users/Wais-A/orgs",
    "repos_url": "https://api.github.com/users/Wais-A/repos",
    "events_url": "https://api.github.com/users/Wais-A/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Wais-A/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "chelsabeth",
    "id": 23201598,
    "node_id": "MDQ6VXNlcjIzMjAxNTk4",
    "avatar_url": "https://avatars3.githubusercontent.com/u/23201598?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/chelsabeth",
    "html_url": "https://github.com/chelsabeth",
    "followers_url": "https://api.github.com/users/chelsabeth/followers",
    "following_url": "https://api.github.com/users/chelsabeth/following{/other_user}",
    "gists_url": "https://api.github.com/users/chelsabeth/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/chelsabeth/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/chelsabeth/subscriptions",
    "organizations_url": "https://api.github.com/users/chelsabeth/orgs",
    "repos_url": "https://api.github.com/users/chelsabeth/repos",
    "events_url": "https://api.github.com/users/chelsabeth/events{/privacy}",
    "received_events_url": "https://api.github.com/users/chelsabeth/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "itava0",
    "id": 40846384,
    "node_id": "MDQ6VXNlcjQwODQ2Mzg0",
    "avatar_url": "https://avatars0.githubusercontent.com/u/40846384?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/itava0",
    "html_url": "https://github.com/itava0",
    "followers_url": "https://api.github.com/users/itava0/followers",
    "following_url": "https://api.github.com/users/itava0/following{/other_user}",
    "gists_url": "https://api.github.com/users/itava0/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/itava0/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/itava0/subscriptions",
    "organizations_url": "https://api.github.com/users/itava0/orgs",
    "repos_url": "https://api.github.com/users/itava0/repos",
    "events_url": "https://api.github.com/users/itava0/events{/privacy}",
    "received_events_url": "https://api.github.com/users/itava0/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "afialydia",
    "id": 53787719,
    "node_id": "MDQ6VXNlcjUzNzg3NzE5",
    "avatar_url": "https://avatars3.githubusercontent.com/u/53787719?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/afialydia",
    "html_url": "https://github.com/afialydia",
    "followers_url": "https://api.github.com/users/afialydia/followers",
    "following_url": "https://api.github.com/users/afialydia/following{/other_user}",
    "gists_url": "https://api.github.com/users/afialydia/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/afialydia/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/afialydia/subscriptions",
    "organizations_url": "https://api.github.com/users/afialydia/orgs",
    "repos_url": "https://api.github.com/users/afialydia/repos",
    "events_url": "https://api.github.com/users/afialydia/events{/privacy}",
    "received_events_url": "https://api.github.com/users/afialydia/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "DevWarr",
    "id": 49497246,
    "node_id": "MDQ6VXNlcjQ5NDk3MjQ2",
    "avatar_url": "https://avatars1.githubusercontent.com/u/49497246?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/DevWarr",
    "html_url": "https://github.com/DevWarr",
    "followers_url": "https://api.github.com/users/DevWarr/followers",
    "following_url": "https://api.github.com/users/DevWarr/following{/other_user}",
    "gists_url": "https://api.github.com/users/DevWarr/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/DevWarr/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/DevWarr/subscriptions",
    "organizations_url": "https://api.github.com/users/DevWarr/orgs",
    "repos_url": "https://api.github.com/users/DevWarr/repos",
    "events_url": "https://api.github.com/users/DevWarr/events{/privacy}",
    "received_events_url": "https://api.github.com/users/DevWarr/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "JameaKidrick",
    "id": 50430635,
    "node_id": "MDQ6VXNlcjUwNDMwNjM1",
    "avatar_url": "https://avatars3.githubusercontent.com/u/50430635?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/JameaKidrick",
    "html_url": "https://github.com/JameaKidrick",
    "followers_url": "https://api.github.com/users/JameaKidrick/followers",
    "following_url": "https://api.github.com/users/JameaKidrick/following{/other_user}",
    "gists_url": "https://api.github.com/users/JameaKidrick/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/JameaKidrick/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/JameaKidrick/subscriptions",
    "organizations_url": "https://api.github.com/users/JameaKidrick/orgs",
    "repos_url": "https://api.github.com/users/JameaKidrick/repos",
    "events_url": "https://api.github.com/users/JameaKidrick/events{/privacy}",
    "received_events_url": "https://api.github.com/users/JameaKidrick/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "emilyelri",
    "id": 46936014,
    "node_id": "MDQ6VXNlcjQ2OTM2MDE0",
    "avatar_url": "https://avatars1.githubusercontent.com/u/46936014?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/emilyelri",
    "html_url": "https://github.com/emilyelri",
    "followers_url": "https://api.github.com/users/emilyelri/followers",
    "following_url": "https://api.github.com/users/emilyelri/following{/other_user}",
    "gists_url": "https://api.github.com/users/emilyelri/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/emilyelri/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/emilyelri/subscriptions",
    "organizations_url": "https://api.github.com/users/emilyelri/orgs",
    "repos_url": "https://api.github.com/users/emilyelri/repos",
    "events_url": "https://api.github.com/users/emilyelri/events{/privacy}",
    "received_events_url": "https://api.github.com/users/emilyelri/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "Chards79",
    "id": 53061869,
    "node_id": "MDQ6VXNlcjUzMDYxODY5",
    "avatar_url": "https://avatars2.githubusercontent.com/u/53061869?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Chards79",
    "html_url": "https://github.com/Chards79",
    "followers_url": "https://api.github.com/users/Chards79/followers",
    "following_url": "https://api.github.com/users/Chards79/following{/other_user}",
    "gists_url": "https://api.github.com/users/Chards79/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Chards79/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Chards79/subscriptions",
    "organizations_url": "https://api.github.com/users/Chards79/orgs",
    "repos_url": "https://api.github.com/users/Chards79/repos",
    "events_url": "https://api.github.com/users/Chards79/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Chards79/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "hillan1152",
    "id": 49995770,
    "node_id": "MDQ6VXNlcjQ5OTk1Nzcw",
    "avatar_url": "https://avatars1.githubusercontent.com/u/49995770?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hillan1152",
    "html_url": "https://github.com/hillan1152",
    "followers_url": "https://api.github.com/users/hillan1152/followers",
    "following_url": "https://api.github.com/users/hillan1152/following{/other_user}",
    "gists_url": "https://api.github.com/users/hillan1152/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hillan1152/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hillan1152/subscriptions",
    "organizations_url": "https://api.github.com/users/hillan1152/orgs",
    "repos_url": "https://api.github.com/users/hillan1152/repos",
    "events_url": "https://api.github.com/users/hillan1152/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hillan1152/received_events",
    "type": "User",
    "site_admin": false
  }
];
function newCard (data) {
  //adding new elements
  const cardContainer = document.createElement('div');
  const cardClass = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardName = document.createElement('h3');
  const cardUser = document.createElement('p');
  const cardLocation = document.createElement('p');
  const cardAdd = document.createElement('p');
  const follow = document.createElement('p');
  const fling = document.createElement('p');
  const bio = document.createElement('p');

  //adds class names
  cardContainer.classList.add('card');
  cardClass.classList.add('card-info');
  cardName.classList.add('name');
  cardUser.classList.add('username');
  
  // adding in chain order
  cardClass.appendChild(cardContainer);
  cardImg.appendChild(cardContainer);
  cardName.appendChild(cardClass);
  cardUser.appendChild(cardClass);
  cardLocation.appendChild(cardClass);
  cardAdd.appendChild(cardClass);
  follow.appendChild(cardClass);
  fling.appendChild(cardClass);
  bio.appendChild(cardClass);

  //adding text content from api and word
  cardImg.src = `${data.avatar_url}`
  cardName.textContent = `Cori`
  cardUser.textContent = `${data.login}`
  cardLocation.textContent = `${data.location}`
  cardAdd.textContent = `${data.html_url}`
  follow.textContent = `Followers: ${data.follower}`
  fling.textContent = `Following: ${data.following}`
  bio.textContent = `Bio: ${data.bio}`

  return cardContainer
};

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
