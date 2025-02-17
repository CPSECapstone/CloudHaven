import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardHeader, Grid, CardActions, IconButton} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    paddingTop: 25,
    paddingLeft: 100,
  },
  card: {
    maxWidth: 345,
  },
});

/**
   * Renders cards for applications on homepage
   * @param {searchInput} props - text from the search bar
   * @return {Grid} - Returns Grid of cards
   */
export default function Content(props) {
  const classes = useStyles();
  const [userServices, setUserServices] = useState([]);
  const [services, setServices] = useState([]);
  const data = services.filter((service) =>
    service.name.toLowerCase().includes(
        props.searchInput.toLowerCase()));

  const addUserService = async (serviceId) => {
    props.setUpdateSideBar(true)
    if (!userServices.includes(serviceId)) {
      setUserServices([...userServices, serviceId]);
      try {
        await axios.post('/users/vendors', {vendorId: serviceId});
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.delete('/users/vendors', {data : {vendorId: serviceId}});
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    /** Obtains list of subscribed services
     *  @return {null} - Returns nothing, only updates state
     */
    async function fetchServices() {
      try {
        const serviceResponse = await axios.get('/vendors');
        const userResponse = await axios.get('users/vendors');
        setServices(serviceResponse.data);
        setUserServices(userResponse.data.map((vendor) => vendor._id));
      } catch (error) {
        console.log(error);
      }
    }

    fetchServices();
  }, [userServices]);

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {data.map((elem) => (
          <Grid item xs={3} key={data.indexOf(elem)}>
            <Card>
                <CardHeader
                  title={`${elem.name}`}
                />
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to subscribed services"
                  onClick={() => addUserService(elem._id)}>
                  {userServices.includes(elem._id) ?
                   <CheckCircleIcon /> : <AddIcon />}
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
