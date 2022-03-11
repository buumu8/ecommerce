import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import MenuItem from '../MenuItem/MenuItem';
import DirectoryContainer from './Directory.styles';
// import './Directory.scss'

const Directory = ({sections}) => {

        return (
            <DirectoryContainer>
                { sections.map(({id,...otherSectionProps}) => 
                    <MenuItem key={id} 
                        {...otherSectionProps} />
                )}
            </DirectoryContainer>
        );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);