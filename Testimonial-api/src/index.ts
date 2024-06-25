import express from 'express';
import connectDB from './mongoose';
import testimonialRoutes from './routes/testimonial';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
connectDB();
app.use('/api/testimonials', testimonialRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
