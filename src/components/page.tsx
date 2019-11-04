import React from 'react'
import { Services } from '../services/types'
import { createServices } from '../services'

export interface BasePageLayoutDependencies {
  services: Services
}

// Generally, we avoid singletons like this. But, at least we keep some form of isolation this way
const dependenciesSingleton = (() => {
  const dependencies: BasePageLayoutDependencies = {
    services: createServices(),
  }

  return () => {
    return dependencies
  }
})()

export interface PageProps {
  services?: Services
}

export default class Page<State extends {} = {}> extends React.Component<
  PageProps,
  State
  > {
  protected getServices() {
    return this.props.services || dependenciesSingleton().services
  }
}
