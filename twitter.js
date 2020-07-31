let name;
let username;
let tweetContent;
let tweetText;
function sgin(){
    let sginButton = document.getElementById('sgin-in-button');
    name = document.getElementById('input-name').value;
    username = document.getElementById('input-username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('input-password').value;
    if(name == '' || username == ''
    || email == '' || password == ''){
       alert('please fill ALL the fields :)') 
    }
    else{
        document.getElementById('main-container').style.display = 'none';
    }
}
function creatTweet(){
    let x = document.getElementById('post-button');
    tweetText = document.getElementById('add-tweet').value;
    if(tweetText != ''){
        document.getElementById('first-line').style.display = 'block';
        let insertPlace = document.getElementById('newsfeed');
        let myTweetBox = document.createElement('div');
        myTweetBox.setAttribute('class', 'tweet');
        myTweetBox.setAttribute('id', 'tweet');
        insertPlace.insertBefore(myTweetBox, insertPlace.childNodes[5]);
        let userInfo = document.createElement('div');
        userInfo.setAttribute('class', 'user-info');
        myTweetBox.appendChild(userInfo);
        let userImageDiv = document.createElement('div');
        userImageDiv.setAttribute('class', 'user-img');
        userInfo.appendChild(userImageDiv);
        let userImageContent = document.createElement('a');
        userImageContent.setAttribute('href', '#');
        userImageDiv.appendChild(userImageContent);
        let userphoto = document.createElement('img');
        userphoto.setAttribute('src', 'no-person.jpg');
        userphoto.setAttribute('alt', 'person image');
        userImageContent.appendChild(userphoto);
        let userNameDiv = document.createElement('div');
        userNameDiv.setAttribute('class', 'user-name');
        userNameDiv.setAttribute('id', 'user-name');
        userInfo.appendChild(userNameDiv);
        let userNameContent = document.createElement('h1');
        let firstName = document.createTextNode(name);
        userNameContent.appendChild(firstName);
        userNameDiv.appendChild(userNameContent);
        let userNameSecContent = document.createElement('h3');
        let secondName = document.createTextNode(username);
        userNameSecContent.appendChild(secondName);
        userNameDiv.appendChild(userNameSecContent);
        let postBetweenLine = document.createElement('hr');
        postBetweenLine.setAttribute('id', 'line');
        insertPlace.insertBefore(postBetweenLine, myTweetBox);
        // finished the user-info div information.
        let mainTweetContent = document.createElement('div');
        mainTweetContent.setAttribute('class', 'tweet-content');
        mainTweetContent.setAttribute('id', 'tweet-content');
        myTweetBox.appendChild(mainTweetContent);
        let tweetContentText = document.createTextNode(tweetText);
        mainTweetContent.appendChild(tweetContentText);
        //finished the tweet-content div.
        let tweetButtonsDiv = document.createElement('div');
        tweetButtonsDiv.setAttribute('class', 'tweet-buttons');
        tweetButtonsDiv.setAttribute('id', 'tweet-buttons');
        myTweetBox.appendChild(tweetButtonsDiv);
        let likeButton = document.createElement('button');
        likeButton.setAttribute('id','like-button');
        likeButton.setAttribute('onclick','changelike()');
        tweetButtonsDiv.appendChild(likeButton);
        let buttonSpan = document.createElement('span');
        buttonSpan.setAttribute('id', 'change-like');
        likeButton.appendChild(buttonSpan);
        let outlinedLike = document.createElement('i');
        outlinedLike.setAttribute('class', 'fa fa-heart-o');
        outlinedLike.setAttribute('id', 'outlined-like');
        outlinedLike.setAttribute('aria-hidden', 'true');
        buttonSpan.appendChild(outlinedLike);
        let filledLike = document.createElement('i');
        filledLike.setAttribute('class', 'fa fa-heart');
        filledLike.setAttribute('id', 'filled-like');
        filledLike.setAttribute('aria-hidden', 'true');
        buttonSpan.appendChild(filledLike);
        let likeButtonText = document.createTextNode(' Like');
        likeButton.appendChild(likeButtonText);
        let retweetButton = document.createElement('button');
        retweetButton.setAttribute('id','retweet-button');
        retweetButton.setAttribute('onclick','retweet()');
        tweetButtonsDiv.appendChild(retweetButton);
        let repeatsymbol = document.createElement('i');
        repeatsymbol.setAttribute('class', 'fa fa-repeat');
        repeatsymbol.setAttribute('aria-hidden', 'true');
        retweetButton.appendChild(repeatsymbol);
        let retweetButtonText = document.createTextNode(' Retweet');
        retweetButton.appendChild(retweetButtonText);
        // finished the third div (buttons div)
        document.getElementById('no-posts').style.display = 'none';
        document.getElementById('newsfeed').style.justifyContent = 'flex-start';
        document.getElementById('tweet').style.display = 'block';
        document.getElementById('add-tweet').value = '';
        document.getElementById('newsfeed-text').style.display = 'block';
        document.getElementById('first-line').style.display = 'block';
    }
    else{
        return true;
    }
}
let posts = [];
let z = 0;
function AddToNewsfeed(){
    while(z != -1){
        creatTweet();
        break;
    }
    let myPost = tweetText;
    let objectPost = {userName: 'talal', postText: 'hi there'};
    let highestTweet = Object.create(objectPost);
    highestTweet.UserName = username;
    highestTweet.postText = myPost;
    posts.unshift(highestTweet);
    z++;
}
function changelike(){
    let filled = document.getElementById('filled-like');
    let outlined = document.getElementById('outlined-like');
    let likeButton = document.getElementById('like-button')
    let likeSpan = document.getElementById('change-like');
    let tweet_content = document.getElementById('tweet-content');
    if(likeButton.hasAttribute('class')){
        likeButton.removeAttribute('class');
        filled.style.display = 'none';
        outlined.style.display = 'inline';
        likeSpan.style.color = 'black';
        tweet_content.style.backgroundColor = 'rgb(235, 235, 235)';
        tweet_content.style.color = 'black';
    }
    else{
        likeButton.setAttribute('class', 'activeLike');
        filled.style.display = 'inline';
        outlined.style.display = 'none';
        likeSpan.style.color = 'red';
        tweet_content.style.backgroundColor = 'rgb(255, 180, 180)';
        tweet_content.style.color = 'white';
    }
}
function retweet(){
    myText = document.getElementById('tweet-content').textContent;
    document.getElementById('add-tweet').value = myText;
    AddToNewsfeed();
}