import { PropTypes } from 'react';
import { getSymbolCode } from '../../utils/getSymbolCode';

import './exchangeRate.less';

const ExchangeRate = ({ from, to, rate, ...rest }) => (
  <div {...rest}>
    { `${getSymbolCode(from)} 1 = ${getSymbolCode(to)} ${rate}` }
  </div>
);

ExchangeRate.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  rate: PropTypes.string
};

export default ExchangeRate;
