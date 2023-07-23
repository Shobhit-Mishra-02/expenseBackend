import Expense from "../../lib/schema/Expense.schema";

const getActiveYears = async (req, res) => {
  if (req.method === "GET") {
    try {
      const activeYears = await Expense.aggregate([
        {
          $addFields: {
            year: { $year: "$date" },
          },
        },
        {
          $group: {
            _id: "$year",
          },
        },
        {
          $addFields: {
            year: "$_id",
          },
        },
        {
          $sort: { year: 1 },
        },
      ]).exec();

      res.status(200).json({
        status: "success",
        activeYears,
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

export default getActiveYears;
