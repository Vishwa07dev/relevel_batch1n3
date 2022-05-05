/**
 * Please refer to the following article for the validation rules used in this validation logic ->
 * https://help.returnpath.com/hc/en-us/articles/220560587-What-are-the-rules-for-email-address-syntax-
 * */
module.exports = (email) => {
  const report = {};

  // Regular Expressions ->
  const space = /\s/;
  const specialCharacterLead = /^[!-/]/;
  const specialCharacterTrail = /[!-/]$/;
  const consecutiveSpecialCharacters = /([!-/_])\1/;
  const repeatingAtTheRate = /[@]{2}/;
  const otherSpecialCharacters = /[\( \) \, \: \; \< \> \[ \ \] \{ \} \`]/;
  const emailStructure = /[a-zA-Z0-9!-/]@[a-zA-Z0-9\-\.].[a-zA-Z0-9\-\.]/; // recipientName@domainName.subdomainName
  //   ----------------------------------------------

  //   Prepare the validation report based on the RegEx match ->
  report.spacePresent = space.test(email);
  report.firstCharacterIsSpecial = specialCharacterLead.test(email);
  report.lastCharacterIsSpecial = specialCharacterTrail.test(email);
  report.consecutiveSpecialCharacters =
    consecutiveSpecialCharacters.test(email);
  report.repeatingAtTheRate = repeatingAtTheRate.test(email);
  report.otherSpecialCharacters = otherSpecialCharacters.test(email);
  report.emailStructureIsValid = emailStructure.test(email);
  // ----------------------------------------------------------------------------------

  let invalidCharacters =
    report.spacePresent ||
    report.firstCharacterIsSpecial ||
    report.lastCharacterIsSpecial ||
    report.consecutiveSpecialCharacters ||
    report.repeatingAtTheRate ||
    report.otherSpecialCharacters;

  if (invalidCharacters) {
    return {
      valid: false,
      message: "Characters in the email is invalid",
    };
  }

  if (report.emailStructureIsValid) {
    return {
      valid: true,
      message: "Email is valid",
    };
  }
};
