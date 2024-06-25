import { Router } from 'express';
import Testimonial from '../models/Testimonial';

const router = Router();

// for all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get a single testimonial using current ID
router.get('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (testimonial) {
      res.json(testimonial);
    } else {
      res.status(404).send('Testimonial not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Add a new testimonial
router.post('/', async (req, res) => {
  try {
    const newTestimonial = new Testimonial(req.body);
    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update a testimonial
router.put('/:id', async (req, res) => {
  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedTestimonial) {
      res.json(updatedTestimonial);
    } else {
      res.status(404).send('Testimonial not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Delete a testimonial
router.delete('/:id', async (req, res) => {
  try {
    const deletedTestimonial = await Testimonial.findByIdAndRemove(req.params.id);
    if (deletedTestimonial) {
      res.status(204).send();
    } else {
      res.status(404).send('Testimonial not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
