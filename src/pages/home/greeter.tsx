import React from 'react'
import { UIServices } from '../../types'

export default class Greeter extends React.Component<{ services: UIServices<'auth'> }> {
  constructor(props) {
    super(props)
  }

  render() {
    const { props } = this

    // const user = props.services.auth.getAuthenticatedUser()
    const user = {
      displayName: 'Join Doe',
    };
    
    return <div>Hello {user ? user.displayName : 'World'}!</div>
  }
}
