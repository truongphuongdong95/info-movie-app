import React from 'react';
import Spinner from './spinner.gif';

function spinner() {
    return (
        <div>
            <img
            src={Spinner}
            style={{width:'200px', margin:'auto', display:'block'}}
            alt='loading...'
            />
        </div>
    )
}

export default spinner;
