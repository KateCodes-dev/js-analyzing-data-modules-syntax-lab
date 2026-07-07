require("datejs");

function combineUsers(...args) {
  // Initialize return object
  const combinedObject = {
    users: []
  };

  // Loop through each array in args
  for (const userArray of args) {
    // Merge the arrays using the spread operator
    combinedObject.users.push(...userArray);
  }

  // Add today's date
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  // Return the completed object
  return combinedObject;
}
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};