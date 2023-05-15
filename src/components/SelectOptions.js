import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Select, { components } from 'react-select';
import { decrement, increment, selectCake } from '../reducer/actions';

const mapStateToProps = (state) => {
  return {
    options: state.cakesAvailable,
    selected_cake:state.selected_cake
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (payload) => dispatch(increment(payload)),
    decrement: (payload) => dispatch(decrement(payload)),
    selectMyCake: (payload) => dispatch(selectCake(payload))
  }
}

const Option = (props) => (
    <components.Option {...props}>
      <img src={props.data.image} alt={props.data.label} width="30" height="30" />
      {props.data.label} {props.data.price}
    </components.Option>
  );



  function SelectOptions(props) {

    useEffect(()=>{
      console.log(props.selected_cake)
    },[])

  return (
    <div>
        <Select
            options={props.options}
            components={{ Option }}
            onChange={(e)=>props.selectMyCake(e)}
        />
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectOptions);
