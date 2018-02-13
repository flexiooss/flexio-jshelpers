import {
  assert
} from './assert'
import {
  isNode
} from './is'

export const removeChildren = (node, start, end) => {
  assert(isNode(node),
    'removeChildren: `node` argument assert be Node')
  start = start || 0
  end = end || node.childNodes.length

  if (!node.hasChildNodes()) {
    return false
  }

  assert(!!(start <= end),
    'removeChildren: `start` assert be less than `end`')

  while (start < end) {
    node.removeChild(node.childNodes[start])
    end--
  }
}
