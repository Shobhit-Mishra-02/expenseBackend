import Expense from "../../lib/schema/Expense.schema";

const getActivityCount = async (req, res) => {
  if (req.method === "GET") {
    try {
      const activityCount = await Expense.aggregate([
        {
          $addFields: {
            formatedDate: {
              $dateToString: { format: "%Y-%m-%d", date: "$date" },
            },
          },
        },
        {
          $group: {
            _id: "$formatedDate",
            activityCount: { $sum: 1 },
          },
        },
        {
          $addFields: {
            date: "$_id",
          },
        },
        {
          $sort: {
            date: 1,
          },
        },
      ]).exec();

      res.status(200).json({
        status: "success",
        activityCount,
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

export default getActivityCount;
