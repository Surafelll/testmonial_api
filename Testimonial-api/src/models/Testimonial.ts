import mongoose, { Schema, Document } from 'mongoose';

export interface ITestimonial extends Document {
  First_name: string;
  Last_name: string;
  message: string;
  image?: string; 

}

const TestimonialSchema: Schema = new Schema({
    First_name: { type: String, required: true },
    Last_name: { type: String, required: true },
  message: { type: String, required: true },
  image: { type: String, required: false } //it is false pcuz it might not ness
});

export default mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);
