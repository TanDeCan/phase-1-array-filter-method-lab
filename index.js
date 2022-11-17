// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
      return drivers.filter((r) => string.toLowerCase() === r.toLowerCase() ) 
}

function fuzzyMatch(drivers, query) {
  return drivers.filter((r) =>r.startsWith(query));
}

function matchName(drivers, string) {
  return drivers.filter((r) => r.name === string)
}