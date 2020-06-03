import camerasMap from "../../../enums/cameras";

export function validateRoverPhotosForm(values, maxSol) {
  let errors = {};
  if (!values.solNumber && values.solNumber !== 0) {
    errors.solNumber = 'Sol number is required';
  }
  if(values.solNumber > maxSol) {
    errors.solNumber = `Sol number cant be more than ${maxSol}`;
  }
  if(values.solNumber < 0) {
    errors.solNumber = `Sol number cant be negative`;
  }
  return errors;
}

export function getCamerasById(rover) {
  const camerasToRender = camerasMap.find(camera => {
    return camera.name === (rover && rover.name && rover.name.toLowerCase())
  });
  return camerasToRender && camerasToRender.cameras;
}

export function normalizeQuery(parameters) {
  return {
    page: parameters.page || 1,
    sol: parameters.sol || 0,
    camera: parameters.camera.toLowerCase(),
  };
}
