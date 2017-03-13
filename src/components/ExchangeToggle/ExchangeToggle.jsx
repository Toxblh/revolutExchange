import { PropTypes } from 'react';
import classnames from 'classnames';

import './ExchangeToggle.less';

const ExchangeToggle = ({ currencies, to, from, onChange, ...rest }) => (
  <div className="currencies" {...rest}>
    {
      currencies.map((item) => {
        const classSelector = classnames('currencies-item',
          from ?
          item === from && 'currencies-item-active' :
          item === to && 'currencies-item-active'
        );

        return (
          <button
            key={item}
            className={classSelector}
            onClick={() => {
              onChange({
                direction: from ? 'from' : 'to',
                currency: item
              });
            }}
          >
            {item}
          </button>);
      }
      )
    }
  </div>
);

ExchangeToggle.propTypes = {
  onChange : PropTypes.func,
  currencies: PropTypes.array,
  from: PropTypes.string,
  to: PropTypes.string
};

export default ExchangeToggle;
