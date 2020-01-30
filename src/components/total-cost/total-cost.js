import {useSelector} from 'react-redux'
import {getDish} from '../../fixtures-api'

function TotalCost(props) {
  return useSelector(state =>
    Object.entries(state.cart).reduce(
      (acc, [id, amount]) => acc + amount * getDish(id).price,
      0
    )
  )
}

export default TotalCost
