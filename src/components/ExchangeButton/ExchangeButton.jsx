import { PropTypes } from 'react';

import './ExchangeButton.less';

const Button = ({ children, ...rest }) => (
  <button tabIndex="0" className="exchange-button" {...rest}>
    <div className="innerButton">
      <span>{children}</span>
    </div>
  </button>
);

Button.propTypes = {
  children : PropTypes.node,
};

export default Button;
