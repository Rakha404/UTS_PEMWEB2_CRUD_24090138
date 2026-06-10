import express from 'express';
import cors from 'cors';
import eventRoutes from './routes/eventRoute.js';
import categoryRoutes from './routes/categoryRoute.js';
import pembicaraRoutes from './routes/pembicaraRoute.js';  
import authRoute from './routes/authRoute.js'

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("ini adalah api untuk invofest");
});

app.use("/events", eventRoutes);
app.use("/categories", categoryRoutes);
app.use("/pembicara", pembicaraRoutes);
app.use("/auth", authRoute);  


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

