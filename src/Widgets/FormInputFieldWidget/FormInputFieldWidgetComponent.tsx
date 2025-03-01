import {
  ContentTag,
  InPlaceEditingOff,
  isInPlaceEditingActive,
  provideComponent,
} from 'scrivito'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import { getFieldName } from '../FormContainerWidget/utils/getFieldName'
import { isCustomType } from '../FormContainerWidget/utils/isCustomType'
import { FormInputFieldWidget } from './FormInputFieldWidgetClass'

provideComponent(FormInputFieldWidget, ({ widget }) => {
  const id = `form_text_input_widget_${widget.id()}`

  const fieldName = getFieldName(widget)
  const labelOptions: { htmlFor?: string } = {}
  if (!isInPlaceEditingActive()) labelOptions.htmlFor = id

  return (
    <div className="mb-3">
      <ContentTag
        content={widget}
        attribute="label"
        tag="label"
        className="form-label"
        {...labelOptions}
      />
      {widget.get('required') ? (
        <OverlayTrigger
          placement="top"
          overlay={
            <Popover>
              <Popover.Body>mandatory</Popover.Body>
            </Popover>
          }
        >
          <span className="text-mandatory">*</span>
        </OverlayTrigger>
      ) : null}

      {widget.get('helpText') ? (
        <>
          {' '}
          <OverlayTrigger
            placement="top"
            overlay={
              <Popover>
                <Popover.Body>
                  <InPlaceEditingOff>
                    <ContentTag content={widget} attribute="helpText" />
                  </InPlaceEditingOff>
                </Popover.Body>
              </Popover>
            }
          >
            <i className="bi bi-question-circle"></i>
          </OverlayTrigger>
        </>
      ) : null}

      {isCustomType(widget) && widget.get('customType') === 'multi_line' ? (
        <textarea
          className="form-control"
          id={id}
          rows={3}
          name={fieldName}
          placeholder={widget.get('placeholder')}
          required={widget.get('required')}
        />
      ) : (
        <input
          className="form-control"
          id={id}
          name={fieldName}
          maxLength={calculateMaxLength(fieldName)}
          placeholder={widget.get('placeholder')}
          type={calculateType(fieldName)}
          required={widget.get('required')}
        />
      )}
    </div>
  )
})

function calculateMaxLength(fieldName: string) {
  switch (fieldName) {
    case 'phone_number':
      return 50
    case 'email':
      return 120
    default:
      return 250
  }
}

function calculateType(type: string) {
  if (type === 'email') return 'email'
  if (type === 'phone_number') return 'tel'

  return 'text'
}
