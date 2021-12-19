var url = "https://api.mythbot.org/api/lanyard.php"; // URL of API
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