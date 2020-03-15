class BannerModel {
  constructor(
    name = '',
    vertImage = '',
    horImage = '',
    targetLink = '',
    type = 'forward'
  ) {
    this.name = name
    this.vertImage = vertImage
    this.horImage = horImage
    this.targetLink = targetLink
    this.type = type
  }

  setField(field, value) {
    const newInstance = new BannerModel(
      this.name,
      this.vertImage,
      this.horImage,
      this.targetLink,
      this.type
    )
    newInstance[field] = value
    return newInstance
  }
}

export default BannerModel
