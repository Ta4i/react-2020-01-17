import React, {Component} from 'react'
import {Input, Button, Form} from 'antd'
import {connect} from 'react-redux'
import {sendOrder} from '../../store/action-creators'
import {Consumer} from '../../contexts/user'
import {withLanguageContext} from '../../contexts/language'
import translations from '../../translations/components/order-form'

class OrderForm extends Component {
  state = {
    userName: '',
  }

  render() {
    const {languageContext} = this.props
    const {locale} = languageContext
    const localizedContent = translations[locale]

    return (
      <Form
        layout={'inline'}
        style={{padding: '24px'}}
        onSubmit={this.handleSubmit}
      >
        <h1>{localizedContent.submitOrder}</h1>
        <Form.Item>
          <Consumer>
            {({name, handleUserChange}) => {
              return (
                <Input
                  placeholder={localizedContent.userName}
                  value={name}
                  onChange={event => {
                    handleUserChange({
                      name: event.target.value,
                    })
                    this.handleUserNameInputChange(event)
                  }}
                  style={{width: '120px'}}
                />
              )
            }}
          </Consumer>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {localizedContent.sendOrder}
          </Button>
        </Form.Item>
      </Form>
    )
  }

  handleUserNameInputChange = ({target: {value}}) => {
    this.setState({
      userName: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.sendOrder(this.state)
  }
}

export default withLanguageContext(connect(null, {sendOrder})(OrderForm))
