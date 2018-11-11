import express from 'express';

import {
    listAllEvents,
    createEvent,
    getEventById,
    updateEvent,
    deleteEvent,
  } from '../controllers/events';
const router = express.Router();

console.log(createEvent)

router.get('/', listAllEvents);
router.post('/', createEvent);
router.get('/:id', getEventById);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;
