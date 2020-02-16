import React, {Component} from 'react'
import {Input, Button, Form} from 'antd'
import {connect} from 'react-redux'
import {sendOrder} from '../../store/action-creators'
import {Consumer} from '../../contexts/user'
import withTranslation from '../../decorators/withTranslation'

class OrderForm extends Component {
  state = {
    userName: '',
  }

  render() {
    const {t} = this.props
    return (
      <Form
        layout={'inline'}
        style={{padding: '24px'}}
        onSubmit={this.handleSubmit}
      >
        <h1 ref={this.setRefForSomeHTMLElement}>{'Form'}</h1>
        <Form.Item>
          <Consumer>
            {({name, handleUserChange}) => {
              return (
                <Input
                  ref={this.setInput}
                  placeholder={t['userName']}
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
            {t['sendOrder']}
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

  setRefForSomeHTMLElement = ref => {
    this.someHTMLElement = ref
  }

  setInput = ref => {
    this.userNameInput = ref
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.sendOrder(this.state)
  }
}

export default withTranslation(connect(null, {sendOrder})(OrderForm))
