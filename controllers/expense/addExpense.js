import Expense from "../../lib/schema/Expense.schema";

const addExpense = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    data["date"] = new Date(data["date"]);

    try {
      const record = await Expense.create(data);

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

export default addExpense;
