import React from "react";
import { Dropdown, Button, Input, Label } from "semantic-ui-react";

const nums = [
  {key: "3", text: "3", value: "3"},
  {key: "4", text: "4", value: "4"},
  {key: "5", text: "5", value: "5"},
  {key: "6", text: "6", value: "6"},
  {key: "7", text: "7", value: "7"},
  {key: "8", text: "8", value: "8"},
  {key: "9", text: "9", value: "9"},
  {key: "10", text: "10", value: "10"}
]

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let placeholder = null
    if (!this.props.selectednode ||
        Object.keys(this.props.selectednode).length == 0 ||
        !this.props.selectednode.hasOwnProperty('url')){
      placeholder = "doi, arxivId, or S2 Paper Id..."
    } else{
      let accessor = this.props.selectednode['url'].split('/')
      placeholder = accessor[accessor.length-1]
      console.log(placeholder)
    }
    return (
    <div style = {{display: "inline-block"}}>
      <Input
        name = "accessor"
        label = {<Dropdown/>}
        onChange = {this.props.handleMessage}
        placeholder={placeholder}>
      <Label>
        <Dropdown 
          name = "breadth" 
          onChange = {this.props.handleChange}
          defaultValue = "3" 
          options={nums}/>
      </Label>
      <input style = {{width:"250px"}}></input>
      <Button onClick={this.props.addnode}>Search</Button>
      </Input>
    </div>  
  )};
}

export default Searchbar;
