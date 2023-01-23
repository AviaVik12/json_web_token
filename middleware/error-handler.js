const { StatusCodes } = require("http-status-codes");
const { CustomAPIError } = require("../errors");

const errorHandlerMiddleware = (error, request, response, next) => {
  if (error instanceof CustomAPIError) {
    return response.status(error.statusCode).json({ msg: error.message });
  }

  return response
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Something went wrong, try again later");
};

module.exports = errorHandlerMiddleware;
