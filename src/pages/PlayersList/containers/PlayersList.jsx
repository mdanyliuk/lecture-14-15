import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import {
  Link as RouterLink,
} from 'react-router-dom';
import Typography from 'components/Typography';
import Button from 'components/Button';
import { fetchDeletePlayerById, fetchPlayersList } from '../actions/player';

const getClasses = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowcontainer: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

const PlayersList = () => {
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const classes = getClasses();
  const {
    players,
    refresh,
  } = useSelector(({ reducer })=> reducer);
  const dispatch = useDispatch();
    
  useEffect(() => {
    dispatch(fetchPlayersList());    
  }, [refresh]);

  function deletePlayerById(id) {
    dispatch(fetchDeletePlayerById(id))
      .then(setCurrentPlayer(null));
  }
  
  return (
    <div className={classes.rowcontainer}>
      <div className={classes.container}>
        <Button
          component={RouterLink}
          to={"/player"}>
          Create player
        </Button>
        {players && players.map((item, index) => (
          <Typography 
            onMouseOver={() => setCurrentPlayer(item)}
            >
          {item.name}
          </Typography>
        ))}
        {!players && (
          <Typography>
            Не могу ничего показать :(
          </Typography>
        )}
      </div>
      <div className={classes.container}>
        {currentPlayer && (
          <div>
            <Typography>
              Name: {currentPlayer.name}
            </Typography>
            <Typography>
              Club: {currentPlayer.clubName}
            </Typography>
            <Typography>
              Position: {currentPlayer.position}
            </Typography>
            <Button
              onClick = {() => deletePlayerById(currentPlayer.id)}>
              Delete
            </Button>
            <Button
              component={RouterLink}
              to={"/player/".concat(currentPlayer.id)}>
              Edit
            </Button>
          </div>
        )}
        {!players && (
          <Typography>
            
          </Typography>
        )}
      </div>
    </div>
    
  )
};

export default PlayersList;
