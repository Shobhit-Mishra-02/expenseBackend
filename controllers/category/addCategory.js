import Category from "../../lib/schema/Category.schema";

const addCategory = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    try {
      await Category.create(data);

      res.status(200).json({
        message: "Added new category",
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

export default addCategory;
