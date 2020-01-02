let myImage = document.querySelector('img');

myImage.onclick = function()
{
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/profilePic.png'); 
	{
		myImage.setAttribute('src','images/fireFoxProfile.png');
	}
	else{
		myimage.setAttribute('src','images/profilePic.png');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

// initialisation code
  if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Learning is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

