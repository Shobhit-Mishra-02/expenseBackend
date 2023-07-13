import User from "../../lib/schema/User.schema.js";

const validateUser = async (req, res) => {
  if (req.method == "POST") {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email, password }, { password: 0 });

      if (user) {
        res.status(200).json({
          message: "User found",
          status: "success",
          user,
        });
      } else {
        res.status(404).json({
          message: "User not found",
          status: "error",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        status: "error",
      });
    }
  } else {
    res.status(405).json({
      message: "Method not allowed",
      status: "error",
    });
  }
};

export default validateUser;
