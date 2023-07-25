import React from 'react'

const Calculator = () => {
  return (
    <div className='calculator'>
      <div className='transactions'>Transaction</div>
      <div className='keys'>
        <div className='row'>
          <div className='col'>{`(`}</div>
          <div className='col'>{`)`}</div>
          <div className='col'>{`%`}</div>
          <div className='col'>{`AC`}</div>
        </div>
        <div className='row'>
          <div className='col'>{`7`}</div>
          <div className='col'>{`8`}</div>
          <div className='col'>{`9`}</div>
          <div className='col'>{`/`}</div>
        </div>
        <div className='row'>
          <div className='col'>{`4`}</div>
          <div className='col'>{`5`}</div>
          <div className='col'>{`6`}</div>
          <div className='col'>{`x`}</div>
        </div>
        <div className='row'>
          <div className='col'>{`1`}</div>
          <div className='col'>{`2`}</div>
          <div className='col'>{`3`}</div>
          <div className='col'>{`-`}</div>
        </div>
        <div className='row'>
          <div className='col'>{`0`}</div>
          <div className='col'>{`.`}</div>
          <div className='col'>{`=`}</div>
          <div className='col'>{`+`}</div>
        </div>
      </div>
    </div>
  )
}

export default Calculator