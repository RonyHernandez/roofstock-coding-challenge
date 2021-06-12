import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function PropertiesTable({properties}) {

    const columns = [
        { field: 'address', headerName: 'Address', width: 300 },
        { field: 'monthlyRent', headerName: 'Monthly Rent', width: 200 },
        { field: 'yearBuilt', headerName: 'Year Built', type: 'number', width: 200 },
        { field: 'listPrice', headerName: 'List Price', type: 'number', width: 200 },
        { field: 'grossYield', headerName: 'Gross Yield', type: 'number', width: 200 },
      ];
      
      
    const createRows = () => {
        var rows = [];
        properties.map((property) => {
            if(property.mainImageUrl){
                rows.push({
                    id: property.id, 
                    address: `${property.address.address1}, ${property.address.city}, ${property.address.state}`,
                    monthlyRent: `$${(property.financial.monthlyRent).toFixed(2)}`,
                    yearBuilt: property.physical.yearBuilt,
                    listPrice: `$${(property.financial.listPrice).toFixed(2)}`,
                    grossYield: `%${(((property.financial.monthlyRent * 12) / property.financial.listPrice) * 100).toFixed(1)}`,
                    mainImageUrl: property.mainImageUrl,
                });
            }
        });

        return rows;
    }

    var rows = createRows();

    return (

    <TableContainer component={Paper}>
    <Table size="small" aria-label="a dense table">
    <TableHead>
        <TableRow>
        <TableCell></TableCell>
        <TableCell align="left">Address </TableCell>
        <TableCell align="right">Monthly Rent</TableCell>
        <TableCell align="right">Year Built</TableCell>
        <TableCell align="right">List Price</TableCell>
        <TableCell align="right">Gross Yield</TableCell>
        <TableCell></TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {rows.map((row) => (
        <TableRow key={row.id}>
            <TableCell component="th" scope="row">
            <div>
                <img className="property-img-table" src={row.mainImageUrl} alt="property"/>
            </div>
            </TableCell>
            <TableCell align="left">{row.address}</TableCell>
            <TableCell align="right">{row.monthlyRent}</TableCell>
            <TableCell align="right">{row.yearBuilt}</TableCell>
            <TableCell align="right">{row.listPrice}</TableCell>
            <TableCell align="right">{row.grossYield}</TableCell>
            <TableCell align="right">
                <Button component={ Link } to={`/property-details/${row.id}/${row.address}`} variant="contained" color="primary">
                    SEE DETAILS
                </Button>
            </TableCell>

        </TableRow>
        ))}
    </TableBody>
    </Table>
    </TableContainer>

    )
}

export default PropertiesTable

