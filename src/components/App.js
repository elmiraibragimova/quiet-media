import React, { Component } from 'react'
import '../css/main.css'

import Nav from './Nav'
import Form from './Form'
import Banner from './Banner'

import BannerModel from '../models/BannerModel'

class App extends Component {
  state = {
    currentBanner: new BannerModel(),
    savedBanner: null
  }

  updateBanner = updatedBanner => {
    this.setState({ currentBanner: updatedBanner })
  }

  submitBanner = event => {
    event.preventDefault()
    this.setState({ savedBanner: this.state.currentBanner })
    this.props.history.push('/preview')
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
