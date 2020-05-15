import React from "react";
import { withRouter } from 'react-router'
import Button from '@material-ui/core/Button';
//const routeToloc = ()=>withRouter(({history})=>history.push('new-location'))


const ButtonLink = withRouter(({ history,link,text,color,onClick }) => {
  
  return (
    <Button variant="contained" color={color} type='button'
    onClick={() => onClick(history) }>
    {text} 
  </Button>

)})
export default ButtonLink