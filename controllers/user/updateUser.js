import User from "../../lib/schema/User.schema";

const updateUser = async (req, res) => {
  if (req.method === "POST") {
    const { id } = req.params;
    const userDataToUpdate = req.body;

    const updateResult = await User.updateOne(
      {
        _id: id,
      },
      userDataToUpdate
    );

    if (updateResult.modifiedCount == 1) {
      res.status(200).json({
        message: "User updated",
        status: "success",
        updateResult,
      });
    } else {
      res.status(404).json({
        message: "No update",
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

export default updateUser;
