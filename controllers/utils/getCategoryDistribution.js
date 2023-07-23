import Expense from "../../lib/schema/Expense.schema";

const getCategoryDistribution = async (req, res) => {
  if (req.method === "GET") {
    try {
      const categoryCount = await Expense.aggregate([
        {
          $group: {
            _id: "$category",
            count: { $sum: 1 },
            totalAmount: { $sum: "$amount" },
          },
        },
      ]).exec();

      res.status(200).json({
        status: "success",
        categoryCount,
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

export default getCategoryDistribution;
