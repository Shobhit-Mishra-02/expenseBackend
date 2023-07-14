import Expense from "../../lib/schema/Expense.schema";

const updateExpense = async (req, res) => {
  if (req.method === "POST") {
    const { id } = req.params;
    const dataToUpdate = req.body;

    const updateResult = await Expense.updateOne(
      {
        _id: id,
      },
      dataToUpdate
    );

    if (updateResult.modifiedCount == 1) {
      res.status(200).json({
        message: "Record updated",
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

export default updateExpense;
