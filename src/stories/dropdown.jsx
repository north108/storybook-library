import React from 'react';
import styled from 'styled-components';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Wrapper = styled.div`
  font-size: 1.5em;
  text-align: left;
  background-color: LightBlue;
  padding: 1em;
`

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    const { age } = this.props
    return(
      <Wrapper>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={this.handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        {console.log(this.state)}
      </FormControl>
      </Wrapper>
    )
  }

  handleChange = (event) => {
    this.setState({value: event.target.value}) 
  }

}