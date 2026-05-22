import express from 'express';
import cors from 'cors';
import eventRoutes from './routes/eventRoute';
import categoryRoutes from './routes/categoryRoute';
import pembicaraRoutes from './routes/pembicaraRoute';  

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

