require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/db");
const PORT = process.env.PORT;
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");
const logger = require("./config/logger");
const fs = require("fs");
const path = require("path");


const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());
app.use(cors({
    origin: "*",
}));
app.use(helmet());

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "logs/combined.log"),
  { flags: "a" }
);

app.use(morgan("combined", { stream: accessLogStream }));
connectDB();

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);



app.listen(PORT || 8080, () => { 
    logger.info(`Server running on port ${PORT}`);
});

module.exports = app;