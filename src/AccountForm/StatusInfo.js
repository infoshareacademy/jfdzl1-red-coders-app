import React from 'react';
import Typography from 'material-ui/Typography';

const StatusInfo = (props) => {
    return(
        <Typography component="p">
                        {props.statusText}
        </Typography>
    )
}

export default StatusInfo;
