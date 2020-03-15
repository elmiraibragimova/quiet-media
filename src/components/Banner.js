import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BannerModel from '../models/BannerModel'

class Banner extends Component {
  static propTypes = {
    banner: PropTypes.instanceOf(BannerModel).isRequired
  }

  getBannerAdv() {
    const title = (
      <h3 className="banner__title" key="title">
        <p>{this.props.banner.name}</p>
      </h3>
    )
    const btn = (
      <a
        key="btn"
        href={this.props.banner.targetLink}
        target="_blank"
        rel="noopener noreferrer"
        className="banner__button"
      >
        Перейти
      </a>
    )

    const result = [title, btn]
    if (this.props.banner.type === 'forward') {
      return result
    }
    return result.reverse()
  }

  render() {
    return (
      <article className="banner">
        <picture>
          <source
            srcSet={this.props.banner.horImage}
            media="(orientation: landscape)"
          />
          <source
            srcSet={this.props.banner.vertImage}
            media="(orientation: portrait)"
          />
          <img srcSet="default.jpg" alt="" />
        </picture>

        <section className="banner__content">{this.getBannerAdv()}</section>
      </article>
    )
  }
}

export default Banner
