// Get the sum of all trail miles
const totalTrailMiles = (trails) => {
    let total = 0;
    for (const trail of trails) {
      total += trail.length;
    }
  
    return total;
  };
  
  // Get the shortest of all trails
  const shortyTrail = (trailArray) => {
    let shortest = trailArray[0].length;
    for (const trail of trailArray) {
      if (trail.length < shortest) {
        shortest = trail.length;
      }
    }
  
    return shortest;
  };
  
  // Get the longest of all trails
  const longTrail = (allTrails) => {
    let longest = 0;
    for (const trail of allTrails) {
      if (trail.length > longest) {
        longest = trail.length;
      }
    }
  
    return longest;
  };
  
  //Get the sum of all rivers
  const totalMilesOfRivers = (rivers) => {
    let total = 0;
    for (const river of rivers) {
      total += river.length;
    }
    return total;
  };
  
  //Get the longest of all rivers
  const longestRiver = (riverIsLongest) => {
    let longest = 0;
    for (const river of riverIsLongest) {
      if (longest < river.length) {
        longest += river.length;
      }
    }
    return longest;
  };
  
  //Get the shortest of all rivers
  const shortestRiver = (riverIsShortest) => {
    let shortest = riverIsShortest[0].length;
    for (const river of riverIsShortest) {
      if (river.length < shortest) {
        shortest = river.length;
      }
    }
    return shortest;
  };
  //return the most expensive trails
      //trails that are $$$$ and higher
  const expensiveTrails = (trailIsExpensive) => {
    let expensive = []
    for (const trail of trailIsExpensive) {
      if (trail.price >= "$$$$")
      expensive += `${trail.trailName} \n`
      
    }
    return expensive
  }
      
  //return the least expensive trails
      //trails that are $
  const cheapTrails = (trailIsCheap) => {
    let cheap = []
    for (const trail of trailIsCheap) {
      if (trail.price === "$")
      cheap += `${trail.trailName} \n`
      
    }
    return cheap
  }
  //return the most expensive river trails
      //trails that are $$$$ and higher
      const expensiveRiverTrails = (riverIsExpensive) => {
        let expensive = []
        for (const riverTrail of riverIsExpensive) {
          if (riverTrail.price >= "$$$$")
          expensive += `${riverTrail.river} \n`
          
        }
        return expensive
      }
          
      //return the least expensive river trails
          //trails that are $
      const cheapRiverTrails = (riverIsCheap) => {
        let cheap = []
        for (const riverTrail of riverIsCheap) {
          if (riverTrail.price === "$")
          cheap += `${riverTrail.river} \n`
          
        }
        return cheap
      }
      module.exports = {
        totalTrailMiles, shortyTrail, longTrail,
        totalMilesOfRivers, shortestRiver, longestRiver,
        expensiveTrails, cheapTrails, expensiveRiverTrails,
        cheapRiverTrails
      }