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
                { this.state.sections.map(({id,title,imageUrl,size}) => 
                    <MenuItem key={id} 
                        title={title} 
                        imageUrl={imageUrl}
                        size={size} />
                )}
            </div>);
    }
}

export default Directory;