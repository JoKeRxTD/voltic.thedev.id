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

