import { PropTypes, Component } from 'react';
import { isNumber } from '../../utils/isNumber';
import { formatMoney } from '../../utils/formatMoney';
import ExchangeRate from '../ExchangeRate/ExchangeRate';

import './ExchangeBlock.less';

class ExchangeBlock extends Component {
  static propTypes = {
    from: PropTypes.bool,
    amount: PropTypes.string,
    balance: PropTypes.string,
    code: PropTypes.string,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    reverseFrom: PropTypes.string,
    reverseTo: PropTypes.string,
    reverseRate: PropTypes.string,
  };

  onInputChange = (event) => {
    const newValue =  event.currentTarget.value.replace('-', '');
    if (!isNumber(newValue)) { return; }
    this.props.onChange(newValue);
  };

  blockFrom = () => {
    const { balance, code, amount, error } = this.props;
    return (
      <div>
        <div className="exchange-block-row">
          <div className="exchange-block-currency-code">{code}</div>
          <input
            className={`exchange-block-input ${error ? 'exchange-block-input-error' : ''}`}
            value={(amount === '0' || amount === 0 || amount === '') ? '' : `-${amount}`}
            placeholder="0.00"
            onChange={this.onInputChange}
          />
        </div>
        <div className="exchange-block-row">
          <div className="exchange-block-balance">
            You have {formatMoney(code, balance)}
          </div>
          <div className="exchange-block-error">
            {error ? 'You don\'t have enough cash' : ''}
          </div>
        </div>
      </div>);
  }

  blockTo = () => {
    const { balance, code, reverseFrom, reverseTo, amount, reverseRate } = this.props;
    return (
      <div>
        <div className="exchange-block-row">
          <div className="exchange-block-currency-code">{code}</div>
          <span className="exchange-block-amount">{`${amount > 0 ? '+'+amount : ''}`}</span>
        </div>
        <div className="exchange-block-row">
          <div className="exchange-block-balance">
            You have {formatMoney(code, balance)}
          </div>
          <div className="exchange-block-reverse-rates">
            <ExchangeRate
              from={reverseFrom}
              to={reverseTo}
              rate={reverseRate}
            />
          </div>
        </div>
      </div>);
  }

  render() {
    const { from } = this.props;
    const classSelector = `exchange-block ${from ? 'exchange-block-from' : 'exchange-block-to'}`;

    return (
      <div className={classSelector}>
        { from ?
          this.blockFrom() :
          this.blockTo() }
      </div>
    );
  }
}

export default ExchangeBlock;
