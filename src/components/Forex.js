import React from 'react'
import NavBar from './pageNav/NavBar'
import Table from 'react-bootstrap/Table'

class Curate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      finances: null
    }
  }

  componentDidMount () {
    const financeApi =
      //'https://api.twelvedata.com/time_series?symbol=JSE&interval=1min&apikey=63c1d781c4db483ba4b8f3f407bb375e'
    fetch(financeApi) //
      .then(res => res.json()) //
      .then(res => {//
        this.setState({ finances: [res] })//
      })//
      .catch(err => console.log(err))//
     
      

  }//

  render () {
    

    console.log(this.state.finances)
    // let dataDisplay
    // if (!this.state.finances) {
    //   dataDisplay = (
    //     <div>
    //       <h3>Loading...</h3>
    //     </div>
    //   )
    // } else {
    //   dataDisplay = this.state.finances.map((finance, idx) => (
    //     <div key={idx}>
    //       <Table>
    //         <thead className='tableHead'>
    //           <tr>
    //             <th>Currency: {finance.AAPL.meta.currency} </th>
    //             <th>Exchange: {finance.AAPL.meta.exchange}</th>               
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr>                
    //             <td>Datetime: {finance.AAPL.values[0, 1].datetime}</td>
    //             <td>Open: {finance.AAPL.values[0, 1].open}</td>
    //             <td>High: {finance.AAPL.values[0, 1].high}</td>
    //             <td>Low: {finance.AAPL.values[0, 1].low}</td>
    //             <td>Close: {finance.AAPL.values[0, 1].close}</td>
    //           </tr>
    //         </tbody>
    //       </Table>
    //     </div>
    //   ))
    // }
    return (
      <div className='Curate'>
        <NavBar />
        <h1>Curate Page!</h1>
        
        <footer>Curation Project</footer>
      </div>
    )
  }
}

export default Curate