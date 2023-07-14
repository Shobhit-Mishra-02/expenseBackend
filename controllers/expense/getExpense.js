import Expense from "../../lib/schema/Expense.schema";

const getExpense = async (req, res) => {
  if (req.method === "GET") {
    const { id } = req.params;
    try {
      const expenses = await Expense.find({ userId: id });

      res.status(200).json({
        status: "success",
        expenses,
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

export default getExpense;
