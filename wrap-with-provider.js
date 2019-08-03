import React from 'react';
import { Provider } from 'mobx-react';

import TimestampStore from "./src/stores/timestampStore";

const stores = {
  timestampStore: new TimestampStore(),
}

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => (
  <Provider {...stores}>{element}</Provider>
);