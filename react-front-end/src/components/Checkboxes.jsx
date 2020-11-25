import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export function Checkboxes(props) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  

  const handleSetSelectedId = (event) => {
    props.setSelectedId(props.id);
  };

  return (
    <div>
      <Checkbox
        onClick={handleSetSelectedId}
        onChange={handleChange}
        defaultunchecked="true"
        style={{color:"#7BCDC8"}}
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
    </div>
  );
}

