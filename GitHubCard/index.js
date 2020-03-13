/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

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


const cardTable = document.querySelector('.cards');



axios.get('https://api.github.com/users/LTims080913')
.then(response => {
  console.log(response.data);
    cardTable.append(githubCardMaker(response.data))
  })
  
.catch( error => {
  console.log('stupid dog you made me look bad', error)
})

// const followersArray = [
// 'cwilkison', 
// 'tajahouse', 
// 'jlc6290', 
// 'gordoncaister', 
// 'ashoffmann90', 
// 'vandesm14' ];

// followersArray.forEach(user => {
//   axios.get(`https://api.github.com/users/${user}`)
//   .then (data => {
//     const newCard = githubCardMaker(data.data)
//     const ppl = document.querySelector('.cards')
//     ppl.append(newCard)
//   })
// })

//!!!STRETCH GOAL
axios.get(`https:api.github.com/users/LTims080913/followers`)
.then (response => {
  response.data.forEach(item => {
    axios.get(item.url)
    .then( d => {
      cardTable.append(githubCardMaker(d.data))
      
    })
 })
  
})
.catch(error => {
  console.log('uh-oh spaghetti-o', error)
})

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
function githubCardMaker(data) {
  //create element
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const userInfo = document.createElement('div');
  userInfo.addEventListener('dblclick', () => {
    card.classList.toggle('more')
    email.classList.toggle('peek-a-boo')
    repos.classList.toggle('peek-a-boo')
    company.classList.toggle('peek-a-boo')
    expand.classList.toggle('peek-a-boo')
  })
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const anchor = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  const close = document.createElement('button');
  close.addEventListener('click', (e) => {
    expand.classList.toggle('peek-a-boo')
  })
  const repos = document.createElement('p');
 
  const email = document.createElement('p');
  
  const company = document.createElement('p');
 
  const expand = document.createElement('button');
  expand.addEventListener('click', (e) => {
    card.classList.toggle('more')
    email.classList.toggle('peek-a-boo')
    repos.classList.toggle('peek-a-boo')
    company.classList.toggle('peek-a-boo')
    expand.classList.toggle('peek-a-boo')
    
  })
  expand.style.marginTop = '2%';
  expand.style.borderRadius = '20px';
  expand.style.backgroundColor = '#1fc8db';
  expand.style.color = 'red';
  expand.style.height = '5vh';
  expand.style.width = '70px';




  //add classes to the elements
        card.classList.add('card');
        userInfo.classList.add('card-info');
        name.classList.add('name');
        username.classList.add('username');
        repos.classList.add('peek-a-boo')
        email.classList.add('peek-a-boo')
        company.classList.add('peek-a-boo')
        

  //append elements 
        card.append(userImg);
        card.append(userInfo);
        userInfo.append(name);
        userInfo.append(username);
        userInfo.append(location);
        userInfo.append(followers);
        userInfo.append(following);
        userInfo.append(profile);
        userInfo.append(bio);
        profile.append(anchor);
        userInfo.append(expand);
        userInfo.append(repos);
        userInfo.append(email);
        userInfo.append(company);
        

  //provide text content
        userImg.src = data.avatar_url;
        name.textContent = data.name;
        username.textContent = `User Name: ${data.login}`;
        location.textContent = `Location: ${data.location}`;
        profile.textContent = `Profile:`;
        anchor.href = data.url;
        anchor.textContent = 'https://api.github.com/users/LTims080913';
        followers.textContent = `Followers: ${data.followers}` ;
        following.textContent = `Following: ${data.following}`;
        bio.textContent = `Bio: ${data.bio}` ;
        expand.textContent = `Expand`;
        repos.textContent = `Number of Public Repos: ${data.public_repos}`;
        email.textContent = `Email: ${data.email}`;
        company.textContent = `Company: ${data.company}`;
        

        
  return card
}




/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
