module.exports = (SequelizeMock) => {
  return SequelizeMock.define("token", {
    userId: 1,
    token: "test"
  });
};

