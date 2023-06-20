import React from 'react';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import SaveIcon from '@mui/icons-material/Save';

import withHocs from './MoviesFormHoc';


class MoviesForm extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  handleSave = () => {
    const { selectedValue, onClose, addMovie, updateMovie } = this.props;
    const { id, name, genre, rate, directorId, watched } = selectedValue;
    id ? updateMovie({id, name, genre, rate: Number(rate), directorId, watched: Boolean(watched)}) :
         addMovie({ name, genre, rate: Number(rate), directorId, watched: Boolean(watched)})
    onClose();
  };

  render() {
    const { data ={}, classes, open, handleChange, handleSelectChange, handleCheckboxChange, selectedValue = {} } = this.props;
    const { name, genre, rate, directorId, watched } = selectedValue;
    const {directors = []} = data;

    return (
      <Dialog onClose={this.handleClose} open={open} aria-labelledby="simple-dialog-title">
        <DialogTitle className={classes.title} id="simple-dialog-title">Movie information</DialogTitle>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField}
            value={name}
            onChange={handleChange('name')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-genre"
            label="Genre"
            className={classes.textField}
            value={genre}
            onChange={handleChange('genre')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-rate"
            label="Rate"
            value={rate}
            onChange={handleChange('rate')}
            type="number"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <FormControl variant="outlined" className={classes.formControlSelect}>
            <InputLabel
              ref={ref => { this.InputLabelRef = ref; }}
              htmlFor="outlined-age-simple"
            >
              Director
            </InputLabel>
            <Select
              value={directorId}
              onChange={handleSelectChange}
              input={<OutlinedInput name="directorId" id="outlined-director" labelWidth={57} />}
            >
            {directors.map(director => <MenuItem key={director.id} value={director.id}>{director.name}</MenuItem>)}
            </Select>
          </FormControl>
          <div className={classes.wrapper}>
            <FormControlLabel
              control={<Checkbox checked={watched} onChange={handleCheckboxChange('watched')} value="watched" />}
              label="Watched movie"
            />
            <Button onClick={this.handleSave} variant="contained" color="primary" className={classes.button}>
              <SaveIcon /> Save
            </Button>
          </div>
        </form>
      </Dialog>
    );
  }
};

  export default withHocs(MoviesForm);
