import React,{Component} from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss'
import sections from './Directory.data';

class Directory extends Component {
    constructor(){
        super();
        this.state = {
            sections: sections
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                { this.state.sections.map(({id,...otherSectionProps}) => 
                    <MenuItem key={id} 
                        {...otherSectionProps} />
                )}
            </div>);
    }
}

export default Directory;