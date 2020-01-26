import React from 'react'
import PropTypes from 'prop-types'
import Restaurants from '../restaurants'
import {Layout} from 'antd'
import Header from '../header'

const App = ({restaurants}) => (
  <div>
    <Layout>
      <Header />
      <Layout.Content>
        <Restaurants restaurants={restaurants} />
      </Layout.Content>
    </Layout>
  </div>
)

App.propTypes = {
  restaurants: PropTypes.array.isRequired,
}

App.defaultProps = {
  restaurants: [],
}

export default App
