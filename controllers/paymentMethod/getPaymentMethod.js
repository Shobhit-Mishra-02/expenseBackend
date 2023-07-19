import PaymentMethod from "../../lib/schema/PaymentMethod.schema";

const getPaymentMethod = async (req, res) => {
  if (req.method === "GET") {
    try {
      const methods = await PaymentMethod.find();

      res.status(200).json({
        status: "success",
        methods,
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

export default getPaymentMethod;
