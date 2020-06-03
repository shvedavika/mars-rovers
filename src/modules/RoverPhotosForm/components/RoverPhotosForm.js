import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import { getCamerasById, validateRoverPhotosForm } from "../helpers/RoverPhotosFormHeper";
import './RoverPhotosForm.scss';

export default function RoverPhotosForm(props) {
  const { rover, roverPhotosInit, roverPhotosQueryStart } = props;
  const [ cameras, setCamerasById ] = useState(null);
  
  useEffect(() => {
    roverPhotosInit();
    const camerasToShow = getCamerasById(rover);
    setCamerasById(camerasToShow);
  }, []);
  
  if(!rover || !cameras) {
    return null;
  }

  return (
    <Formik
      initialValues={{
        solNumber: 0,
        cameraType: cameras[0].abr,
      }}
      validate={values => validateRoverPhotosForm(values, rover && rover.max_sol)}
      onSubmit={values => handleSubmit(values)}
    >
      {
        <Form className="roverForm">
          <div className="roverForm-block">
            <label className="roverForm-block__label" htmlFor="solNumber">Sol Number</label>
            <Field type="number" name="solNumber" />
            <span className="roverForm-block__details">{`Maximum Sol: ${rover && rover.max_sol}`}</span>
            <ErrorMessage name="solNumber" component="div" className="roverForm__error" />
          </div>
        
          <div className="roverForm-block">
            <label className="roverForm-block__label" htmlFor="cameraType">Choose a camera type</label>
            <Field as="select" name="cameraType">
              { cameras.map(camera => <option value={camera.abr} key={camera.abr}>{camera.name}</option>) }
            </Field>
            <ErrorMessage name="cameraType" component="div" className="roverForm__error" />
          </div>
        
          <div className="roverForm-block">
            <Button className="roverForm__button" variant="info" type="submit">Search</Button>
          </div>
        </Form>
      }
    </Formik>
  );
  
  function handleSubmit(values) {
    const parameters = {
      name: rover.name,
      page: 1,
      sol: values.solNumber,
      camera: values.cameraType,
    };
    roverPhotosInit();
    roverPhotosQueryStart(parameters);
  }
}
