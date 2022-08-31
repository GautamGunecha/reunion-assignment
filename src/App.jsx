import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";

import MyRoutes from "./routes/MyRoutes";
import { HouseData } from "./assets/data/HouseData";
import { getHouseListsAction } from "./redux/actions/getHouseAction";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHouseListsAction(HouseData));
  }, [dispatch]);
  return (
    <Fragment>
      <MyRoutes />
    </Fragment>
  );
};

export default App;
