const { trails, rivers } = require("./data.js");
const {
  totalTrailMiles,
  shortyTrail,
  longTrail,
  totalMilesOfRivers,
  shortestRiver,
  longestRiver,
  expensiveTrails,
  cheapTrails,
  expensiveRiverTrails,
  cheapRiverTrails,
} = require("./functions.js");

console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`);

console.log("***************************************************");
console.log("*****              T R A I L S                *****");
console.log("***************************************************");
const trailTotal = totalTrailMiles(trails);
console.log(
  `We service ${trailTotal} miles of wilderness trails across the US`
);

const shortTrail = shortyTrail(trails);
console.log(`The shortest trail is ${shortTrail} kilometers`);

const longestTrail = longTrail(trails);
console.log(`The longest trail is ${longestTrail} kilometers\n`);

console.log("***************************************************");
console.log("*****               R I V E R S               *****");
console.log("***************************************************");
const totalRiver = totalMilesOfRivers(rivers);
console.log(
  `We offer expert guidance on ${totalRiver} miles of scenic rivers accross the US`
);

const shortRiver = shortestRiver(rivers);
console.log(`The shortest river tour is ${shortRiver} miles`);

const longRiver = longestRiver(rivers);
console.log(`The longest river tour is ${longRiver} miles\n`);

const mostExpensiveTrails = expensiveTrails(trails);
console.log(`The most expensive trails are \n${mostExpensiveTrails}\n`);

const leastExpensiveTrails = cheapTrails(trails);
console.log(`The least expensive trails are \n${leastExpensiveTrails}`);

const leastExpensiveRiverTrails = cheapRiverTrails(rivers);
console.log(
  `The least expensive river tours are \n${leastExpensiveRiverTrails}`
);

const mostExpensiveRiverTrails = expensiveRiverTrails(rivers);
console.log(
  `The most expensive river tours are \n${mostExpensiveRiverTrails}\n`
);
