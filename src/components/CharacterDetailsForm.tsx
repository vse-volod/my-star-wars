import React, { useMemo, useCallback } from "react";
import { Formik, Form } from "formik";
import { ICharacter, CharacterValues } from "../types/character";
import FormikTextField from "./FormikTextField";
import { Grid, TextField, Button } from "@mui/material";
import {
  formatDateTime,
  joinArrayFields,
  splitArrayFields,
} from "./CharacterDetailsForm.utils";

interface CharacterDetailsFormProps {
  character: ICharacter;
  onSave: (updatedCharacter: ICharacter) => void;
}

const CharacterDetailsForm: React.FC<CharacterDetailsFormProps> = ({
  character,
  onSave,
}) => {
  const initialValues = useMemo(()=> joinArrayFields(character), [character]);

  const handleSubmit = useCallback((values: CharacterValues) => {
    onSave(splitArrayFields(values));
  }, [onSave]);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormikTextField fullWidth label="Name" name="name" />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField fullWidth label="Birth Year" name="birth_year" />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField fullWidth label="Eye Color" name="eye_color" />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField fullWidth label="Gender" name="gender" />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField fullWidth label="Hair Color" name="hair_color" />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField fullWidth label="Height" name="height" />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField fullWidth label="Mass" name="mass" />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField fullWidth label="Skin Color" name="skin_color" />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField fullWidth label="Homeworld" name="homeworld" />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField fullWidth label="Films" name="films" />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField fullWidth label="Starships" name="starships" />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField fullWidth label="Vehicles" name="vehicles" />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField fullWidth label="Species" name="species" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Created"
                value={formatDateTime(character.created)}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Edited"
                value={formatDateTime(character.edited)}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="URL"
                value={character.url}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default CharacterDetailsForm;
