import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CardActionArea from '@material-ui/core/CardActionArea';
import AddIcon from '@material-ui/icons/Add';
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
    if (!userServices.includes(serviceId)) {
      setUserServices([...userServices, serviceId]);
      try {
        await axios.post('/users/vendors', {vendorId: serviceId});
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("remove service");
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
        console.log(userResponse);
        setServices(serviceResponse.data);
        setUserServices(userResponse.data.map((vendor) => vendor.vid));
        console.log(userResponse.data.map((vendor) => vendor.vid))
        console.log(userServices);
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
              <CardActionArea>
                <CardHeader
                  title={`${elem.name}`}
                />
                <CardContent>
                </CardContent>
              </CardActionArea>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => addUserService(elem.vid)}>
                  {userServices.includes(elem.vid) ?
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
