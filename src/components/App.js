import React, { Component } from 'react'
import PropTypes from 'prop-types'
import scrollToElement from 'scroll-to-element'
import '../css/main.css'

import Nav from './Nav'
import Form from './Form'
import Banner from './Banner'

import BannerModel from '../models/BannerModel'

import { SECTION_PARAMS, SECTION_PREVIEW } from '../constants'

class App extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    }).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string
    }).isRequired
  }

  state = {
    currentBanner: new BannerModel(),
    savedBanner: null
  }

  componentDidMount() {
    if (
      !this.isPreviewAvailable() &&
      this.getSectionName() === SECTION_PREVIEW
    ) {
      this.props.history.push(`/${SECTION_PARAMS}`)
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname &&
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      this.scrollToSection(this.getSectionName())
    }
  }

  getSectionName() {
    return this.props.location.pathname.substr(1)
  }

  submitBanner = event => {
    const { history } = this.props
    event.preventDefault()
    this.setState(prevState => ({ savedBanner: prevState.currentBanner }))
    history.push(`/${SECTION_PREVIEW}`)
    this.scrollToSection(SECTION_PREVIEW)
  }

  updateBanner = updatedBanner => {
    this.setState({ currentBanner: updatedBanner })
  }

  scrollToSection = section => {
    scrollToElement(`section#${section}`, {
      ease: 'out-bounce',
      duration: 1000
    })
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
          <section id={SECTION_PARAMS} className="screen">
            <h2 className="screen__title">Параметры</h2>
            <Form
              banner={this.state.currentBanner}
              updateBanner={this.updateBanner}
              submitBanner={this.submitBanner}
            />
          </section>

          {this.isPreviewAvailable() && (
            <section id={SECTION_PREVIEW} className="screen">
              <>
                <h2 className="screen__title">Предпросмотр</h2>
                <div className="screen__container">
                  <Banner banner={this.state.savedBanner} />
                </div>
              </>
            </section>
          )}
        </main>
      </section>
    )
  }
}

export default App
