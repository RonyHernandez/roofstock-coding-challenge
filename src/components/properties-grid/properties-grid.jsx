import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import './index.css';

function PropertiesGrid({properties}) {

    return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <Grid container justify="left" spacing={2}>
          {
          properties.map( property => (
            <>    
                {
                property.mainImageUrl ?
                <Grid key={property.id} item xs={3}>
                {/*this can be a separate component */}
                 <Paper style={{height:'382px'}}>
                    <Link to={`/property-details/${property.id}/${property.address.address1}, ${property.address.city} ${property.address.state}`}>
                    <img src={property.mainImageUrl} style={{width:'100%', height:'250px'}} alt=""/>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={0} style={{padding:0}}>
                            <Grid item xs={6}>
                                <Paper variant="outlined" square>
                                    <span className="prop-spec">Monthly Rent:</span> 
                                    <span className="prop-spec-value">${(property.financial.monthlyRent).toFixed(2)}</span> 
                                </Paper>             
                            </Grid>
                            <Grid item xs={6}>
                                <Paper variant="outlined" square>
                                    <span className="prop-spec">Year Built:</span>
                                    <span className="prop-spec-value">{property.physical.yearBuilt}</span>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={0} style={{padding:0}}>
                            <Grid item xs={6}>
                                <Paper variant="outlined" square>
                                    <span className="prop-spec">List Price:</span>
                                    <span className="prop-spec-value"> ${(property.financial.listPrice).toFixed(2)}</span>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper variant="outlined" square>
                                    <span className="prop-spec">Gross Yield:</span>
                                    <span className="prop-spec-value">%{(((property.financial.monthlyRent * 12) / property.financial.listPrice) * 100).toFixed(1)}</span>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={0} style={{padding:0}}>
                            <Grid item xs={12}>
                                <Paper>
                                    <span className="prop-spec-address">Address:</span>
                                    <span className="prop-spec-value-address">{property.address.address1}, {property.address.city}</span>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Link>
                </Paper>
                </Grid>   
                : false
                }                
            </>
          ))}
        </Grid>
      </Grid>
    </Grid>
    )
}

/*PropertiesGrid.propTypes = {
    properties: PropTypes.array,
}*/

export default PropertiesGrid

