var netflix = {
    id: 9,
    name: "Super Store",
    season1: {
        seasonInfo: {
            episodeInfo : [
                { episode: 1, episodeName: "Pilot"},
                { episode: 2, episodeName: "Magazine Profile"},
                { episode: 3, episodeName: "Shots and Salsa"},
                { episode: 4, episodeName: "Mannequin"},
                { episode: 5, episodeName: "Shoplifter"},
                { episode: 6, episodeName: "Secret Shopper"},
                { episode: 7, episodeName: "Color Wars"},
                { episode: 8, episodeName: "Wedding Day Sale"},
                { episode: 9, episodeName: "All-Nighter"},
                { episode: 10, episodeName: "Demotion"},
                { episode: 11, episodeName: "Labor"}
            ]
        }
    },
    season2: {},
    season3: {}
};

// console.log("all data: "+ netflix); //prints the type (object)

// console.log("id:", netflix.id); //prints id 9 

// console.log(netflix.season1.seasonInfo); //prints all of the seasons info

// console.log(netflix.season1.seasonInfo.episodeInfo[0].episodeName); //prints just season 1, episode name

// Challenge: Pick an episode to show. Using dot notation, walk through the netflix object and print off the episode and the episode name

// console.log(netflix.id.name.season1.episodeInfo.episodeInfo[2].episode.episodeName);

//JSON object below

var json = {
    "workbench.colorTheme": "One Dark+ (Sublime)",
    "window.zoomLevel": 3,
    "files.exclude": {
      "**/.git": true,
      "**/.DS_Store": true,
      "**/*.js": {
        "when": "$(basename).ts"
      },
      "**/*.js.map": {
        "when": "$(basename)"
      }
    },
    "editor.fontFamily": "Monaco, 'Courier New', monospace",
    "editor.detectIndentation": false,
    "editor.letterSpacing": 0,
    "editor.tabSize": 2,
    "files.autoSave": "off",
    "editor.wordWrap": "on",
    "extensions.ignoreRecommendations": true,
    "[html]": {},
    "files.associations": {
      "*.html": "html",
      "*.js": "javascriptreact"
    },
    "html.format.indentInnerHtml": true,
    "editor.fontSize": 11,
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.port": 3500,
    "[javascriptreact]": {}
  }

  //Space Jam object below

  let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevel: 'Tasmanian Devil',

      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }
// console.log(spaceJam.toonSquad.bird);
// console.log(object.keys(spaceJam.toonSquad));
// console.log(Object.keys(spaceJam.toonSquad));
// console.log(Object.keys(spaceJam.toonSquad.duck));
// console.log(Object.values(spaceJam.toonSquad));
// console.log(Object.keys(spaceJam.toonSquad).toString());

//square bracket notation -- like, notation, a methos for grabbing object keys

let garden = {
    vegetable: "zucchini",
    flower: "sun flower",
    fruit: "grape",
    water: true,
    sun: true,
    size: 10
}

// console.log(garden.vegetable);

let key = "vegetable";

// console.log(garden["vegetable"]);

// console.log(garden["size"]);


let baking = {};
baking.banana = "banana bread is yummy!";
baking["zucchini"] = "better make some zuchchini bread!";

// console.log(Object.keys(baking));
// console.log(Object.values(baking));

let garden = {
    vegetable: "zucchini",
    flower: "sun flower",
    fruit: "grape",
    water: true,
    sun: true,
    size: 10
}

let key = "water"

Object.keys(garden).forEach(g =>  {
    if (key === g){
        console.log(garden[keys])
    }
})    


var info = { 
  personIdentity: [
      { name: "Ieshia", age: 30, hometown: "Indianapolis", isCapricorn: true}
      ]
};

console.log(info.personIdentity);

var info = { name: "Ieshia", age: 30, hometown: "Indianapolis", isCapricorn: true}
var newInfo =Array.prototype.reverse.apply(info);

console.log(info);

function swap(json){
  var ret = { name: "Ieshia", age: 30, hometown: "Indianapolis", isCapricorn: true}
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}

var info = { age: 30, name: "Ieshia", hometown: "Indianapolis", isCapricorn: true,}
var newInfo = Object.keys(info).reduce(function(obj,key){
   obj[ info[key] ] = key;
   return obj;
  },{});
console.log(newInfo);