import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button, Container} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
   root: {
     '& .MuiTextField-root': {
       margin: theme.spacing(1),
       width: '25ch',
     },
   },
 }));

const JsDemo = () => {
  const classes = useStyles();
  const [comps, setComps] = useState([]);
  /**
   * Renders the registration form
   * @return {Container} - Returns the rendered registration form
   */

  const createComponent = (inObj) => {
     return (
      <Container>

      </Container>
     )
  }

  const createForm = (form) => {
     let children = [];
     let selectChild = []
     let axiosCb = async (event) => {
         let cb = form.Callback;
         let data = {};
         console.log("event.target.value: ", event.target.value)
         for (let d of cb.body) {
            data[d] = event.target.value;
         }
         let res = await axios({
            url: cb.url,
            method: cb.method,
            params: {
               country: event.target.value
            }
         })
         console.log('im being calledback')
         console.log(cb.url);
         console.log(cb.method);
         console.log(data);
         console.log(res.data)
         setComps(parseJs(res.data.Components));
     }

     let select = React.createElement(TextField, { label: form.Title, 
      select: true, onChange: form.Callback ? axiosCb : ()=>{}, 
      width:'500'}, 
      [selectChild]);

     children.push(select);
     for (let option of form.Content) {
        selectChild.push(React.createElement(MenuItem, 
         {key: option, value: option}, [option]));
     }

     return React.createElement(FormControl, 
      {className: classes.root}, children);
  }

  const parseJs = (components) => {
      let children = [];
      let props = [];

      for (let comp of components) {
         let childs = [];
         
         childs.push(React.createElement('h2', [], [comp.Title]));
         for (let field of comp.Fields) {
            childs.push(createForm(field))
         }
         children.push(React.createElement(Container, {}, childs));
      }
      let outObj = React.createElement(Container, {width:'500'}, children);
      return outObj;
  }

  const fetchJs = async () => {
     let retObj = {};
     try {
         retObj = await axios.get('/fakeVendor/form')
     } catch {
         console.log('fetch failed');
     }
     setComps(parseJs(retObj.data.Components));
  }

  return (
    <Container maxWidth='sm'>
      <Container maxWidth='sm'>
        <h2>Foreign JS execution demo</h2>
      </Container>
      {comps}
      <Button
        onClick={fetchJs}
        fullWidth
        variant="contained"
        color="primary"
      >
         Retrieve UI from Vendor
      </Button>
    </Container>
  );
};

export default withRouter(JsDemo);

