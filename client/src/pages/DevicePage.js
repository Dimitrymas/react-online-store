import React, {useContext} from 'react';

const DevicePage = () => {
    const {d} = useContext("id")
    return (
        <div>
           DevicePage

            {d}
            PAPALOH
        </div>
    );
};

export default DevicePage;