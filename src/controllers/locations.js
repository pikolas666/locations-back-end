import LocationModel from "../models/location.js";

const ADD_LOCATION = async (req, res) => {
  try {
    const location = new LocationModel({
      title: req.body.title,
      description: req.body.description,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      location_photo_url: req.body.location_photo_url,
      owner_id:  req.body.userId
    });

    const response = await location.save();

    return res.status(200).json({ response: response });
  } catch (error) {
    console.error("Error adding location:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const GET_LOCATIONS = async (req, res) => {
  const locations = await LocationModel.find({owner_id: req.body.userId});
  console.log(req.body.userId)
  return res.status(200).json({ locations: locations });
};

const GET_LOCATION_BY_ID = async (req, res) => {
  const location = await LocationModel.findOne({ _id: req.params.id });
  return res.status(200).json({ location: location });
};

const DELETE_LOCATION = async (req, res) => {
  const response = await LocationModel.deleteOne({ _id: req.params.id });
  return res.status(200).json({ response: response });
};

const EDIT_LOCATION = async (req, res) => {
    try {
      const locationId = req.params.id;
  
      const existingLocation = await LocationModel.findById(locationId);
  
      if (!existingLocation) {
        return res.status(404).json({ error: "Location not found" });
      }
  
      const updatedLocation = await LocationModel.findByIdAndUpdate(
        locationId,
        { ...existingLocation, ...req.body },
        { new: true, runValidators: true }
      );
  
      return res.status(200).json({ response: updatedLocation });
    } catch (error) {
      console.error("Error updating location:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const GET_RANDOM_LOCATION = async (req, res) => {
    try {

      const allLocations = await LocationModel.find();
  
      if (!allLocations || allLocations.length === 0) {
        return res.status(404).json({ error: "No locations found" });
      }
  
        const randomIndex = Math.floor(Math.random() * allLocations.length);
  
        const randomLocation = allLocations[randomIndex];
  
      return res.status(200).json({ randomLocation });
    } catch (error) {
      console.error("Error retrieving random location:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

export { ADD_LOCATION, GET_LOCATIONS, GET_LOCATION_BY_ID, DELETE_LOCATION, EDIT_LOCATION, GET_RANDOM_LOCATION };
