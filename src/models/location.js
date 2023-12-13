import mongoose from "mongoose";

const LocationSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  location_photo_url: { type: String, required: true },
  owner_id: { type: String, required: true }
 
});

export default mongoose.model('locations', LocationSchema);