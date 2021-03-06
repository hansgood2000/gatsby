import React from "react"
import { rhythm } from "../utils/typography"
import presets, { colors, space } from "../utils/presets"

const bgDefault = `#edebf0`
const bgFeatureAvailability = colors.accent

const getBackground = num => {
  switch (num) {
    case `2`: {
      return `linear-gradient(90deg, transparent 50%, ${bgDefault} 50%)`
    }
    case `1`: {
      return `linear-gradient(180deg, transparent 50%, ${bgDefault} 50%), linear-gradient(90deg, transparent 50%, ${bgDefault} 50%)`
    }
    case `3`:
    case `0`:
    case ``:
    case `N/A`:
    default: {
      return `none`
    }
  }
}

const basicStyling = {
  height: rhythm(space[6]),
  width: rhythm(space[6]),
  borderRadius: `50%`,
  margin: `0 auto`,
  [presets.Xs]: {
    height: rhythm(0.875),
    width: rhythm(0.875),
  },
}

const EvaluationCell = ({ num, style }) => (
  <div
    css={{
      ...basicStyling,
      backgroundColor:
        [`N/A`, `0`, ``].indexOf(num) !== -1
          ? bgDefault
          : bgFeatureAvailability,
      backgroundImage: getBackground(num),
      ...(style || {}),
    }}
  />
)

export default EvaluationCell
