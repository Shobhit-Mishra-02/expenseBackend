import Expense from "../../lib/schema/Expense.schema";

function getAllMonthsData(data, targetYear) {
  let temp = {};

  data.forEach((element) => {
    temp[element.month] = element;
  });

  let result = [];
  for (let i = 0; i < 12; i++) {
    if (temp[i + 1]) {
      result.push(temp[i + 1]);
    } else {
      result.push({
        _id: i + 1,
        month: i + 1,
        totalAmount: 0,
        year: targetYear,
      });
    }
  }

  return result;
}

const getYearlyExpenses = async (req, res) => {
  if (req.method === "GET") {
    const targetYear = +req.params.year;

    try {
      const temp = await Expense.aggregate([
        {
          $addFields: {
            year: { $year: "$date" },
            month: { $month: "$date" },
          },
        },
        {
          $match: { year: targetYear },
        },
        {
          $group: {
            _id: "$month",
            totalAmount: { $sum: "$amount" },
          },
        },
        {
          $addFields: {
            month: "$_id",
            year: targetYear,
          },
        },
        {
          $sort: { month: 1 },
        },
      ]).exec();

      let yearlyExpenses = getAllMonthsData(temp, targetYear);

      res.status(200).json({
        status: "success",
        yearlyExpenses,
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

export default getYearlyExpenses;
