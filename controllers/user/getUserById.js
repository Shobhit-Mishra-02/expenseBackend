import User from "../../lib/schema/User.schema";

const getUserById = async (req, res) => {
  if (req.method === "GET") {
    const { id } = req.params;

    try {
      const user = await User.findById(id, { password: 0 });

      res.status(200).json({
        status: "success",
        message: "User found",
        user,
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

export default getUserById;
