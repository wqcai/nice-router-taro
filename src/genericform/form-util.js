import isObject from 'lodash/isObject'
import merge from 'lodash/merge'

function getValue(fileValue) {
  let value = fileValue
  if (fileValue && isObject(fileValue.target)) {
    value = fileValue.target.value
  }
  return value
}

const VerticalField = {
  layout: 'vertical',
  inline: false,
}
const BaseField = {
  // disabled:true
}
const fieldConfig = {
  textarea: VerticalField,
  longtext: VerticalField,
  image: VerticalField,
}

function mergeConfig(field) {
  // 注意使用merge的时候，是后面的merge到前面的对象上，所有不会新增对象，
  // 前面的对象如果是global，有单例问题
  return merge({}, BaseField, fieldConfig[field.type], field)
}

const FormUtil = {
  mergeConfig,
  getValue,
}

export default FormUtil
