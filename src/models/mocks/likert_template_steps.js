module.exports = function(SequelizeMock) {
  return SequelizeMock.define('likert_template_steps', {
    templateId: 1,
    step: 1,
    description: "Steps for the default Likert Scale (1-5)"
  });
};