import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import MenuIcon from '@material-ui/icons/Menu';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import axios from 'axios';
import PropertiesGrid from '../components/properties-grid/properties-grid';
import PropertiesTable from '../components/properties-table/properties-table';


function PropertyList(props) {

    const [isGrid, setGrid] = useState(true);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get('https://samplerspubcontent.blob.core.windows.net/public/properties.json').then((res) => {
            let response = res.data.properties;
            setProperties(response);
        });
        
    },[])

    const handleChange = (event, isGrid) => {
        setGrid(isGrid);
      };

    return (
        <div className="page-wrap">
            <div className="toggle-buttons" style={{backgroundColor: '#ffffff', margin:'10px'}}>
                <ToggleButtonGroup value={isGrid} exclusive onChange={handleChange}>
                    <ToggleButton value={false}>
                        <MenuIcon></MenuIcon>
                    </ToggleButton>
                    <ToggleButton value={true}>
                        <ViewModuleIcon></ViewModuleIcon>
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="page-wrap" style={{backgroundColor: '', margin: '100px 300px'}}>
                {isGrid 
                ? <PropertiesGrid properties={properties}/> 
                : <PropertiesTable properties={properties}/>
                }
            </div>
        </div> 
    )
}

PropertyList.propTypes = {

}

export default PropertyList

