import * as shared from "../../../container/i18n/data/common";

const en = {
    payment: {
        title: 'Payment',
        placeholder_name: 'Placeholder name',
        card_number: 'Card number',
        cvv: 'CVV',
        expiryDate: 'Expiry Date',
        validations: {
            placeholder_name: {
                required: shared.default.ar.common.validations.required,
                pattern: shared.default.ar.common.validations.latin,
            },
            card_number: {
                required: shared.default.ar.common.validations.required,
                maxLength: 'Card Number should be 16 numbers',
                minLength: 'Card Number should be 16 numbers',
                invalid: 'Enter a valid Visa or Master Card number'
            },
            cvv: {
                maxLength: 'CVV should be 3 numbers',
                minLength: 'CVV should be 3 numbers',
            },
            expiryDate: {
                required: shared.default.ar.common.validations.required
            }
        }
    }
}

export default en;