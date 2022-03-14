const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    const result = drivers.filter(driversName => driversNames.toLowercase() === string.toLowercase)
    return result;
}

function fuzzyMatch(drivers, string) {
    const result = drivers.filter(driversNames => driversName.startsWith(string))
    return result;
}

function matchName(drivers, string) {
    constresult = drivers.filter(driversName=> driversName.match)
    return result;
}