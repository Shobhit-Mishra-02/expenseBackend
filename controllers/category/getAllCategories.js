import Category from "../../lib/schema/Category.schema";

const getAllCategories = async (req, res) => {
  if (req.method === "GET") {
    const categories = await Category.find({});

    res.status(200).json({
      status: "success",
      categories,
    });
  } else {
    res.status(405).json({
      message: "Method not allowed",
      status: "error",
    });
  }
};

export default getAllCategories;
