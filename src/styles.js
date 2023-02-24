import { Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
  link:{
   paddingRight: '20px' ,
   '&:hover':{
    color: 'lightgray'
  }
  },

  card:{
    backgroundColor: '#fff',
    borderRadius: '10px',
    '&:hover':{
      backgroundColor: 'lightgray'
    }
  },

  card__img:{
    textAlign: 'center'
  },

  card__types:{
    display: 'flex',
    justifyContent: 'center'
  },

  card__type:{
    padding: '5px 10px',
    margin: '10px 10px 10px',
    borderRadius: '5px',
    color: '#fff'
  },
  
  card__name:{
    textAlign: 'center',
    fontWeight: '800',
    textTransform: 'uppercase'
  },
  
  card__info:{
    marginLeft: '10px',
    textAlign: 'center'
  },

  inputLabel:{
    fontWeight: '200'
  }

}))

export default useStyles;