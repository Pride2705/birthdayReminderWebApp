import React from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const PickDate = (props) => {
  const [selected, setSelected] = React.useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selected) {

    props.filterSelectedValue(format(selected, 'dd/MM') );
    footer = <p >You picked {format(selected, 'PP')}.</p>;
  }

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}
export default PickDate;