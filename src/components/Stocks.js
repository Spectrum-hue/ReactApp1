import React from 'react'
import NavBar from './pageNav/NavBar'
import Button from 'react-bootstrap/Button'
import './page.css'

class Stocks extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      finances: null
    }
  }

  componentDidMount () {
    const financeApi =
      'https://api.twelvedata.com/time_series?symbol=AAPL,AMZN,GOOG,KO,MCD,BUD&interval=1min&apikey=apikey'
    fetch(financeApi)
      .then(res => res.json())
      .then(res => {
        this.setState({ finances: [res] })
      })
      .catch(err => console.log(err))
  }

  render () {
    console.log(this.state.finances)
    let dataDisplay
    let stocks = this.state.finances
    if (!stocks) {
      dataDisplay = (
        <div>
          <h3>Loading...</h3>
        </div>
      )
    } else {
      dataDisplay = stocks.map((finance, idx) => (
        <div key={idx} className='FinanceDiv'>
          <div className='Finance'>
            <div>
              <h3>APPLE INC: {finance.AAPL.meta.symbol}</h3>
            </div>
            <div>Exchange: {finance.AAPL.meta.exchange}</div>
            <div>Datetime: {finance.AAPL.values[0].datetime}</div>
            <div>Open: {finance.AAPL.values[0].open}</div>
            <div>High: {finance.AAPL.values[0].high}</div>
            <div>Low: {finance.AAPL.values[0].low}</div>
            <div>Close: {finance.AAPL.values[0].close}</div>
            <Button>Add To Favourites</Button>
          </div>
          <div className='Finance'>
            <div>
              <h3>AMAZON: {finance.AMZN.meta.symbol}</h3>
            </div>
            <div>Exchange: {finance.AMZN.meta.exchange}</div>
            <div>Datetime: {finance.AMZN.values[0].datetime}</div>
            <div>Open: {finance.AMZN.values[0].open}</div>
            <div>High: {finance.AMZN.values[0].high}</div>
            <div>Low: {finance.AMZN.values[0].low}</div>
            <div>Close: {finance.AMZN.values[0].close}</div>
            <Button>Add To Favourites</Button>
          </div>
          <div className='Finance'>
            <div>
              <h3>GOOGLE: {finance.GOOG.meta.symbol}</h3>
            </div>
            <div>Exchange: {finance.GOOG.meta.exchange}</div>
            <div>Datetime: {finance.GOOG.values[0].datetime}</div>
            <div>Open: {finance.GOOG.values[0].open}</div>
            <div>High: {finance.GOOG.values[0].high}</div>
            <div>Low: {finance.GOOG.values[0].low}</div>
            <div>Close: {finance.GOOG.values[0].close}</div>
            <Button>Add To Favourites</Button>
          </div>
          <div className='Finance'>
            <div>
              <h3>Coca-Cola: {finance.KO.meta.symbol}</h3>
            </div>
            <div>Exchange: {finance.KO.meta.exchange}</div>
            <div>Datetime: {finance.KO.values[0].datetime}</div>
            <div>Open: {finance.KO.values[0].open}</div>
            <div>High: {finance.KO.values[0].high}</div>
            <div>Low: {finance.KO.values[0].low}</div>
            <div>Close: {finance.KO.values[0].close}</div>
            <Button>Add To Favourites</Button>
          </div>
          <div className='Finance'>
            <div>
              <h3>MCDONALDS: {finance.MCD.meta.symbol}</h3>
            </div>
            <div>Exchange: {finance.MCD.meta.exchange}</div>
            <div>Datetime: {finance.MCD.values[0].datetime}</div>
            <div>Open: {finance.MCD.values[0].open}</div>
            <div>High: {finance.MCD.values[0].high}</div>
            <div>Low: {finance.MCD.values[0].low}</div>
            <div>Close: {finance.MCD.values[0].close}</div>
            <Button>Add To Favourites</Button>
          </div>
          <div className='Finance'>
            <div>
              <h3>BUDWIESER: {finance.BUD.meta.symbol}</h3>
            </div>
            <div>Exchange: {finance.BUD.meta.exchange}</div>
            <div>Datetime: {finance.BUD.values[0].datetime}</div>
            <div>Open: {finance.BUD.values[0].open}</div>
            <div>High: {finance.BUD.values[0].high}</div>
            <div>Low: {finance.BUD.values[0].low}</div>
            <div>Close: {finance.BUD.values[0].close}</div>
            <Button>Add To Favourites</Button>
          </div>
        </div>
      ))
    }
    return (
      <div className='mainStockDiv'>
        <NavBar />
        <h1>Stocks Page</h1>
        {dataDisplay}
      </div>
    )
  }
}

export default Stocks