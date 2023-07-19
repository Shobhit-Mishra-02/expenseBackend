import PaymentMethod from "../../lib/schema/PaymentMethod.schema";

const addPaymentMethod = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const newMethod = await PaymentMethod.create(data);

      res.status(200).json({
        status: "success",
        newMethod,
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

export default addPaymentMethod;
