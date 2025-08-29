import { SERVER } from "./app";

const exitHandler = () => {
  if (SERVER) {
    SERVER.close(() => {
      SERVER.log.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: Error) => {
  SERVER.log.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  SERVER.log.info("SIGTERM received");
  if (SERVER) {
    SERVER.close();
  }
});