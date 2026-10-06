//Example Code: Values, Data Types, and Operations
// With this code I am trying to use readline sync to gather inputs from users on their favorite genre and their favorite songs

const readline = require('readline-sync');
let genre = readline.question("What is your favorite music genre? ");
let favArtist = readline.question("Whose your favorite musician?");
let bestSong = readline.question("What are your top 5 songs of all times?")
let newArtist = readline.question("what's an artists you've heard one song from that you wish you'd heard mroe songs from?")
console.log(`Got! So you like a little bit of ${genre} with a twang of ${favArtist}. Don't worrry, I'm adding all of that to the pot to build you the playlist of your dreams`);



//Example Code: Stringing Characters Together
//With this code I am attempting to give users instructions on how to upload their existing playlists. I'll need each step of the instructions to be on a different line. I'll attempt to do this using template literals.

let welcomeMessage = `Welcome to Sonar! Please follow the steps below to upload your existing playlists:
1. Click on the "Upload Playlist" button on the main menu.
2. Select the playlist file from your device.
3. Confirm the upload and wait for the process to complete.
4. Once uploaded, you can view and edit your playlist and answered a few questions, we'll build your music flavor profile.
5. Enjoy your music!`;
console.log(welcomeMessage);


//Example Code: Control Structures and Logic
//With this code I will attempt to have users attempt to use premium features of the app. If they have a premium subscription, they will be displayed a message to continue, if they do not have a premium subscription, they will be shown and error message and be directed to sign up for a premium membership. I will use conditional statements to show this

subscriptionType = ["Sonar Plus", "Sonar Medium", "Sonar Minus", "Sonar Student", "Sonar Free"];
if (subscriptionType === "Sonar Plus") {
    console.log("Welcome to Sonar Plus! As a Plus Member, you have access to all premium features and an enhanced music experience.");
} else 
    if (subscriptionType === "Sonar Medium") {
        console.log("Welcome to Sonar Medium! You have access to most premium features and a really great music experience.");
    } else {
        if (subscriptionType === "Sonar Minus") {
            console.log("Welcome to Sonar Minus! You have access to some premium features and a great music experience.");
        } else {
            if (subscriptionType === "Sonar Student") {
                console.log("Welcome to Sonar Student! You have access to some premium features and a great music experience as a student price.");
            } else {
                if (subscriptionType === "Sonar Free") {
                    console.log("Welcome to Sonar Free! You have access to basic features! To unlock more features, consider upgrading to a premium subscription.");
                } else {
                    console.log("Error: Unrecognized subscription type. Please check your subscription status or contact support for assistance.");
                }
            }
    }
}

//Example Code: Building Arrays
//With this code, I will attempt to build mixed type arrays that log user account information and preferences

let userAccountInfo = [
  "MusicLover123",
  "musiclover123@gmail.com",
  "Sonar Plus",
  25,
  "$20.00",
  { genre: ["R&B", "Hip-Hop", "Pop"] },
  { favArtist: ["Tupac", "Drake", "Oasis"] },
  { bestSong: ["California Love", "God's Plan", "Wonderwall"] },
  { newArtist: ["Sia", "Billie Eilish", "The Weeknd"] }
];
console.log(userAccountInfo);

//Example Code: Using Arrays
// With this code, I will attempt to add new genres and favorite artists to a users music preferences profile

userAccountInfo[5].genre.push("Jazz");
userAccountInfo[6].favArtist.push("The Weeknd");

console.log("Updated User Preferences:");
console.log(userAccountInfo[5]);
console.log(userAccountInfo[6]);



//Example Code: Loops and Iteration
//With this code I will attempt to loop through the users favorite artists and give them a ranking based on the users preferences

let artistList = userAccountInfo[6];
console.log("Generating your custom artist radar...");

for (let i = 0; i < artistList.favArtist.length; i++) {
    console.log(`Artist #${i + 1}: ${artistList.favArtist[i]}`);
}


