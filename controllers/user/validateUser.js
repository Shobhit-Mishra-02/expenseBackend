// For validating the user

const validateUser = (req, res) => {
  res.status(200).json({
    message: "this is for validating the user",
  });
};

export default validateUser;
