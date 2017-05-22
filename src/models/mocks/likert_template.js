module.exports = function(SequelizeMock) {
  return SequelizeMock.define('likert_template', {
    name: "Default",
    max_value: 5,
    description: "The default likert scale for the MoodMusic Application"
  });
};