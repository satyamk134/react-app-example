import React,{ useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './product.scss'
import ButtonLink from './ButtonLink'
import ProductService from '../http/Product.service'
import Product from'./product'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width:'90%',
      margin:'auto',
      marginTop:'5%'
    },
    paper: {
      padding: theme.spacing(1),
     
      color: theme.palette.text.secondary,
    },
    
  }));
const Products = ()=>{

  const classes = useStyles();
  const [products,setProducts1] = useState([]);  

  const getProducts = () => {
    return ProductService.getProducts()
    
  }
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    getProducts()
    .then(response=>{
      
        let data = response.data.data
        setProducts1(data);
    })
  },[]);

  function FormRow() {
    return (
   
      <React.Fragment>
        
        {products.map((product,index)=>(<Grid key = {index} item xs={3}>
            <Product  product={product}/>
        </Grid>))
        }
      </React.Fragment>
  
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
          
        </Grid>
        
      </Grid>
    </div>
  );

}
export default Products