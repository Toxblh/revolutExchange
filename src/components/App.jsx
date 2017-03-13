import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import fx from 'money';
import ExchangeRate from './ExchangeRate/ExchangeRate';
import ExchangeBlock from './ExchangeBlock/ExchangeBlock';
import ExchangeButton from './ExchangeButton/ExchangeButton';
import ExchangeToggle from './ExchangeToggle/ExchangeToggle';
import { changeValue, switchCurrency, exchange } from '../redux/exchange';
import { calculateExchange, getExchangeState, getRates, getCash, isNotError, getExchangeParams } from '../utils/selectors';

import '../assets/styles/normalize.css';
import './App.less';

class App extends Component {
  static propTypes ={
    from: PropTypes.string,
    to: PropTypes.string,
    value: PropTypes.string,
    rate: PropTypes.string,
    rateReverse: PropTypes.string,
    currencies: PropTypes.array,
    cashFrom: PropTypes.string,
    cashTo: PropTypes.string,
    exchangeResult: PropTypes.string,
    onChange: PropTypes.func,
    onSwitch: PropTypes.func,
    onExchange: PropTypes.func,
    error: PropTypes.bool,
    exchangeParams: PropTypes.object
  }

  render() {
    const {
      from, to, value, rate, rateReverse, currencies, cashFrom, cashTo, exchangeResult, onChange, onSwitch, onExchange, error, exchangeParams
    } = this.props;

    return (
      <div className="main">
        <ExchangeRate
          className="exchange-current-rate"
          from={from}
          to={to}
          rate={rate}
        />
        <ExchangeToggle
          onChange={onSwitch}
          from={from}
          currencies={currencies}
        />
        <ExchangeBlock
          from
          amount={value}
          code={from}
          balance={cashFrom}
          error={error}
          onChange={onChange}
        />
        <ExchangeBlock
          code={to}
          reverseFrom={to}
          reverseTo={from}
          amount={exchangeResult}
          balance={cashTo}
          reverseRate={rateReverse}
        />
        <ExchangeToggle
          onChange={onSwitch}
          to={to}
          currencies={currencies}
        />
        <div className="exchange-wrap-button">
          <ExchangeButton
            onClick={() => {
              onExchange(exchangeParams);
            }}
            disabled={error || to === from}
          >
            Exchange
          </ExchangeButton>
        </div>
      </div>
    );
  }
}


export default connect(state => ({
  exchangeResult: calculateExchange(state),
  currencies: state.exchange.get('currencies').toJS(),
  ...getExchangeState(state),
  ...getRates(state),
  ...getCash(state),
  ...isNotError(state),
  exchangeParams: { ...getExchangeParams(state) },
}), {
  onChange: changeValue,
  onSwitch: switchCurrency,
  onExchange: exchange
})(App);
