import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import MenuItem from 'components/MenuItem';
import Select from 'components/Select';
import TextField from 'components/TextField';
import Button from 'components/Button';
import {
  Link as RouterLink,
  useHistory,
  useParams,
} from 'react-router-dom';
import { fetchSavePlayer, fetchPlayerById } from '../actions/player';

const getClasses = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowcontainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  fullWidth: {
    width: '100%',
  },
  inputField: {
    width: '100%',
  },
}));

const Player = () => {
  const classes = getClasses();
  const dispatch = useDispatch();
  const history = useHistory();
  const routeParams = useParams();
  
  const {
    id,
    name,
    position,
    club,
  } = useSelector(({ reducer })=> reducer);

  const handleSaveClick = () => dispatch(fetchSavePlayer({
    id: id,
    name: name,
    position: position,
    clubId: club,
  })).then(() => history.push("/playersList"));

  useEffect(() => {
    if (routeParams.id) {
      dispatch(fetchPlayerById({
        id: routeParams.id,
      }));
    } else {
      dispatch({
        type: 'CLEAR_STATE',
      })
    }   
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.inputField}>
        <TextField
          fullWidth
          key="name"
          label='name'
          value={name}
          onChange={({ target }) => dispatch({
            type: 'CHANGE_STATE_NAME',
            name: target.value,
          })}          
        />
      </div>
      <div className={classes.inputField}>
        <TextField
          fullWidth
          key="position"
          label='position'
          value={position}
          onChange={({ target }) => dispatch({
            type: 'CHANGE_STATE_POSITION',
            position: target.value,
          })}
        />
      </div>
      <div className={classes.inputField}>
        <Select 
          fullWidth
          label="club"
          value={club}
          onChange={({ target }) => dispatch({
            type: 'CHANGE_STATE_CLUB',
            club: target.value,
          })}
          >
          <MenuItem value="1">Atalanta</MenuItem>
          <MenuItem value="2">Bologna</MenuItem>
          <MenuItem value="3">Cremonese</MenuItem>
        </Select>
      </div>
      <div>
        <Button
          onClick={handleSaveClick}
        >
          Save
        </Button>
        <Button
          component={RouterLink}
          to={"/playersList"}>
          Cancel
        </Button>
      </div>      
    </div>
  )
}

export default Player;