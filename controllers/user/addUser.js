import User from "../../lib/schema/User.schema";

const addUser = async (req, res) => {
  if (req.method == "POST") {
    const userDetails = req.body;

    try {
      const newUser = await User.create(userDetails);

      res.status(201).json({
        message: "User created successfully",
        status: "success",
      });
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

export default addUser;
