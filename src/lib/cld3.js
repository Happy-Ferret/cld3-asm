var Module = function(Module) {
  Module = Module || {};
  var Module = Module; // included code may refer to Module (e.g. from file packager), so alias it






  return Module;
};
// Export the function if this is for Node (or similar UMD-style exporting), otherwise it is lost.
if (typeof module === "object" && module.exports) {
  module['exports'] = Module;
};