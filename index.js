const farmAnimals = 'cow horse sheep pig chicken'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const sounds=farmAnimals.split(' ');
let moo=sounds[0];
let neigh=sounds[1];
let baa=sounds[2];
let oink=sounds[3];
let cluck=sounds[4];
// 2. Bolt the horse wandered off, so just give us four animals, and let's name them Bessie, Dolly, Babe, and Little.

let Bessie=sounds[0];
let Dolly=sounds[2];
let Babe=sounds[3];
let Little=sounds[4];

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of black_and_white, black, and pink.
let black_and_white =sounds[0];
let black =sounds[2];
let pink =sounds[3];

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
let red ="red"
let blue ="blue"
let yellow ="yellow"
let green ="green"
let purple ="purple"
let white ="white"
let brown ="brown"
let orange ="orange"
let indigo = "indigo"
let violet = "violet"
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
    let r="red"
    let o="orange"
    let y="yellow"
    let g="green"
    let b="blue"
    let v="violet"
    
    
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
let indg = "indigo"
// Objects
let Objects={name: "Kermit",
color:"green",
song:"The Rainbow Connection",
job:"Host of The Muppet Show",
partner:"Miss Piggy"}
// 7. Use destructuring to assign all appropriate variables using the keys as the variable names
let name = Objects.name;
let color = Objects.color;
let song = Objects.song;
let job = Objects.job;
let partner = Objects.partner;

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
let song_2= k_muppet.k_album.the_muppet_movie.song_2;
let song_4= k_muppet.k_album.the_muppet_movie.song_4;
let k_job= k_muppet.k_job;
let k_partner=k_muppet.k_partner