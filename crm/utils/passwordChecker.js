module.exports = (password) => {
  const report = {};

  // Regular Expressions ->
  const space = /\s/;
  //    ----------------------------------------------

  //   Prepare the validation report based on the RegEx match ->
  report.spacePresent = space.test(email);
  // ----------------------------------------------------------------------------------

  if (report.spacePresent) {
    return false;
  }

  return true;
};
