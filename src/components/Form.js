import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UrlInput from './UrlInput'
import BannerModel from '../models/BannerModel'

class Form extends Component {
  static propTypes = {
    banner: PropTypes.instanceOf(BannerModel).isRequired,
    submitBanner: PropTypes.func.isRequired,
    updateBanner: PropTypes.func.isRequired
  }

  handleChange = event => {
    const updatedBanner = this.props.banner.setField(
      event.currentTarget.name,
      event.currentTarget.value
    )
    this.props.updateBanner(updatedBanner)
  }

  render() {
    return (
      <form className="form" onSubmit={this.props.submitBanner}>
        <div className="form__group">
          <label htmlFor="bannerName">Название баннера</label>
          <input
            id="bannerName"
            type="text"
            name="name"
            value={this.props.banner.name}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="form__group">
          <label htmlFor="bannerType">Тип баннера</label>
          <select
            id="bannerType"
            value={this.props.banner.type}
            name="type"
            onChange={this.handleChange}
          >
            <option value="forward">Прямой</option>
            <option value="reverse">Обратный</option>
          </select>
        </div>

        <div className="form__group">
          <label htmlFor="bannerVertImage">
            Изображение вертикальное (ссылка)
          </label>
          <UrlInput
            id="bannerVertImage"
            name="vertImage"
            value={this.props.banner.vertImage}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="form__group">
          <label htmlFor="bannerHorImage">
            Изображение горизонтальное (ссылка)
          </label>
          <UrlInput
            id="bannerHorImage"
            name="horImage"
            value={this.props.banner.horImage}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="form__group">
          <label htmlFor="bannerTarget">Целевая ссылка</label>
          <UrlInput
            id="bannerTarget"
            name="targetLink"
            value={this.props.banner.targetLink}
            onChange={this.handleChange}
            required
          />
        </div>

        <button className="button" type="submit">
          Показать
        </button>
      </form>
    )
  }
}

export default Form
