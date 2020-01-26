import React from 'react'
import PropTypes from 'prop-types'
import {useAmount} from '../custom-hooks/use-amount'

function counterDecorator(OriginalComponent) {
  return props => {
    const {amount, decrease, increase} = useAmount(0)

    return (
      <OriginalComponent
        {...props}
        amount={amount}
        decrease={decrease}
        increase={increase}
      />
    )
  }
}

counterDecorator.propTypes = {
  amount: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
}

counterDecorator.defaultProps = {
  amount: 0,
  increase: () => {},
  decrease: () => {},
}

export default counterDecorator
