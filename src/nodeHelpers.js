import {
  should
} from './should'
import {
  isNode
} from './is'

export const removeChildren = (node, start, end) => {
  should(isNode(node),
    'removeChildren: `node` argument should be Node')
  start = start || 0
  end = end || node.childNodes.length

  if (!node.hasChildNodes()) {
    return false
  }

  should(!!(start <= end),
    'removeChildren: `start` should be less than `end`')

  while (start < end) {
    node.removeChild(node.childNodes[start])
    end--
  }
}
