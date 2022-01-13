var url = "https://api.lanyard.rest/v1/users/116730818822537225"; // URL of API
fetch(url).then(function (response) {
  if (response.ok) {
    // Check if response went through
    response.json().then(function (data) {
      var discordStatusHTML = document.getElementById("discordStatus_socials");
      var status = `${
        data.data.active_on_discord_desktop
          ? data.data.activities[0].emoji.name +
            ` ${data.data.activities[0].state
              .split("", 30)
              .reduce(
                (o, c) => (o.length === 29 ? `${o}${c}...` : `${o}${c}`),
                ""
              )}`
          : "JoKeR#0001" 
      }`;
      discordStatusHTML.innerHTML += status;  
    });
  } else {
    console.log("Response failed?");
  }
});

var url2 = "https://api.lanyard.rest/v1/users/116730818822537225"; // URL of API
fetch(url2).then(function (response) {
  if (response.ok) {
    // Check if response went through
    response.json().then(function (data) { 
      // var jokerAvatarHTML = document.getElementById("joker_avatar");
      var jokerAvatarHTML = document.getElementById("joker_avatar").href;
      
      var avatar = `${
        data.data.discord_user.avatar
          ? `https://cdn.discordapp.com/avatars/116730818822537225/${data.data.discord_user.avatar}.png`
          : "Discord API Error 404" 
      }`;
      jokerAvatarHTML.innerHTML += avatar; 
    });
  } else {
    console.log("Response failed?");
  }
}); 

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


