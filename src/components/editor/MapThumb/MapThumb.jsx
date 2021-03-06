import React, { Component, PropTypes } from 'react'

import style from './MapThumb.css'

class MapThumb extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.props.handleMapSelect(this.props.code)
  }

  render() {
    const { code, displayName } = this.props

    return (
      <div className={style.container}>
        <div
          className={style.imagewrapper}
          onClick={this.handleClick}
        >
          <img
            className={style.image}
            src={`/images/maps/${code}.jpg`}
            alt={displayName}
          />
        </div>

        <h4 className={style.title}>
          {displayName}
        </h4>
      </div>
    )
  }
}

MapThumb.propTypes = {
  code: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleMapSelect: PropTypes.func.isRequired,
}

export default MapThumb
