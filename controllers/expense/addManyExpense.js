import Expense from "../../lib/schema/Expense.schema";

const addManyExpenses = async (req, res) => {
  if (req.method === "POST") {
    const { expenses } = req.body;

    const arrayOfExpenses = expenses.map((expense) => {
      return {
        ...expense,
        date: new Date(expense["date"]),
      };
    });

    try {
      const record = await Expense.insertMany(arrayOfExpenses, {
        ordered: false,
      });

      res.status(200).json({
        message: "Added in records",
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

export default addManyExpenses;
