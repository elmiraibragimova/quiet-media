import React, { Component } from 'react'
import UrlInput from './UrlInput'

class Form extends Component {
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
          <label htmlFor="">Название баннера</label>
          <input
            type="text"
            name="name"
            value={this.props.banner.name}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="form__group">
          <label htmlFor="">Тип баннера</label>
          <select
            value={this.props.banner.type}
            name="type"
            onChange={this.handleChange}
          >
            <option value="forward">Прямой</option>
            <option value="reverse">Обратный</option>
          </select>
        </div>

        <div className="form__group">
          <label htmlFor="">Изображение вертикальное (ссылка)</label>
          <UrlInput
            name="vertImage"
            value={this.props.banner.vertImage}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="form__group">
          <label htmlFor="">Изображение горизонтальное (ссылка)</label>
          <UrlInput
            name="horImage"
            value={this.props.banner.horImage}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="form__group">
          <label htmlFor="">Целевая ссылка</label>
          <UrlInput
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
