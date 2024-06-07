import React from "react";
import { buyItem } from "./redux/Action";
import { Button } from "common/Components";
import { connect } from "react-redux";

const Connect = ({ buyItem, bakery }: any) => {
  return (
    <div>
      <span className="font-bold">Bakery</span>
      <div>Total Items : {bakery.items}</div>
      <div>
        <Button onClick={buyItem} title="Buy" />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    buyItem: () => dispatch(buyItem()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Connect);
