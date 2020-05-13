import React from "react";
import { withRouter } from 'react-router'
import Button from '@material-ui/core/Button';
//const routeToloc = ()=>withRouter(({history})=>history.push('new-location'))


const ButtonLink = withRouter(({ history,link,text,color,onClick }) => (
    <Button variant="contained" color={color} type='button'
    onClick={() => { onClick() }}>
    {text} 
  </Button>

))
export default ButtonLink