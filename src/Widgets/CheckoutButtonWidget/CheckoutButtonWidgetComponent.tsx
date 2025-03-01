import {
  ContentTag,
  WidgetTag,
  isInPlaceEditingActive,
  provideComponent,
} from 'scrivito'
import { toast } from 'react-toastify'
import { CheckoutButtonWidget } from './CheckoutButtonWidgetClass'
import { checkoutCart, containsItems } from '../../Data/CartItem/Cart'
import { alignmentClassNameWithBlock } from '../../utils/alignmentClassName'

provideComponent(CheckoutButtonWidget, ({ widget }) => {
  if (!containsItems()) {
    if (isInPlaceEditingActive()) {
      return (
        <div className="alert alert-warning d-flex m-auto">
          <i className="bi bi-exclamation-circle bi-2x" aria-hidden="true"></i>
          <div className="my-auto mx-2">
            <b>Editor note:</b> The button is hidden if cart is empty.
          </div>
        </div>
      )
    }

    return null
  }
  const successMessage = widget.get('successMessage')
  const buttonClassNames = ['btn']
  buttonClassNames.push(widget.get('buttonColor') || 'btn-primary')

  const buttonSize = buttonSizeClassName(widget.get('buttonSize'))
  if (buttonSize) buttonClassNames.push(buttonSize)

  return (
    <WidgetTag className={alignmentClassNameWithBlock(widget.get('alignment'))}>
      <ContentTag
        content={widget}
        attribute="buttonText"
        tag="button"
        className={buttonClassNames.join(' ')}
        onClick={onClick}
      />
    </WidgetTag>
  )

  async function onClick(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()

    await checkoutCart()

    if (successMessage) toast.success(successMessage)
  }
})

function buttonSizeClassName(buttonSize: string | null) {
  if (buttonSize === 'small') return 'btn-sm'
  if (buttonSize === 'large') return 'btn-lg'
}
