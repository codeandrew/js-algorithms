// Simple, remove the spaces from the string, then return the resultant string.

const noSpace = x => x.split(' ').join('')



" Best Practice "
const noSpace = x => x.replace(/ /g, "")
