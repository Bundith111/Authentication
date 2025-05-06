import {
  create,
  NButton,
  NForm,
  NFormItem,
  NInput,
  NSelect,
  NMessageProvider,
  NGradientText,
  useMessage,
} from 'naive-ui'

export const createNaiveUI = () => {
  return create({
    components: [NButton, NForm, NFormItem, NInput, NSelect, NMessageProvider, NGradientText],
  })
}
