import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/main.css'

import Nav from './Nav'
import Form from './Form'
import Banner from './Banner'

import BannerModel from '../models/BannerModel'

class App extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    }).isRequired
  }

  state = {
    currentBanner: new BannerModel(),
    savedBanner: null
  }

  updateBanner = updatedBanner => {
    this.setState({ currentBanner: updatedBanner })
  }

  submitBanner = event => {
    const { history } = this.props
    event.preventDefault()
    this.setState(prevState => ({ savedBanner: prevState.currentBanner }))
    history.push('/preview')
  }

  isPreviewAvailable() {
    return this.state.savedBanner instanceof BannerModel
  }

  render() {
    return (
      <section className="layout">
        <aside className="layout__sidebar">
          <Nav isPreviewAvailable={this.isPreviewAvailable()} />
        </aside>
        <main className="layout__content">
          <section id="params" className="screen">
            <Form
              banner={this.state.currentBanner}
              updateBanner={this.updateBanner}
              submitBanner={this.submitBanner}
            />
          </section>

          <section id="preview" className="screen">
            {this.isPreviewAvailable() && (
              <Banner banner={this.state.savedBanner} />
            )}
          </section>
        </main>
      </section>
    )
  }
}

export default App
