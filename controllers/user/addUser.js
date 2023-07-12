// For creating new users

const addUser = (req, res) => {
  res.status(200).json({
    message: "This is for adding new user",
  });
};

export default addUser;
