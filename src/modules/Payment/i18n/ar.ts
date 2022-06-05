import * as shared from "../../../container/i18n/data/common";

const ar = {
    payment: {
        title: 'الدفع',
        placeholder_name: 'إسم حامل البطاقة',
        card_number: 'رقم البطاقة',
        cvv: 'رمز التحقق',
        expiryDate: 'تاريخ اللإنتهاء',
        validations: {
            placeholder_name: {
                required: shared.default.ar.common.validations.required,
                pattern: shared.default.ar.common.validations.latin,
            },
            card_number: {
                required: shared.default.ar.common.validations.required,
                maxLength: 'رقم البطاقة يجب ان يتكون من 16 رقما',
                minLength: 'رقم البطاقة يجب ان يتكون من 16 رقما',
                invalid: 'ادخل رقم بطاقة فيزا او ماستر كارد صحيح'
            },
            cvv: {
                maxLength: 'رمز التحقق يجب ان يتكون من 3 ارقام صحيحة',
                minLength: 'رمز التحقق يجب ان يتكون من 3 ارقام صحيحة'
            },
            expiryDate: {
                required: shared.default.ar.common.validations.required
            }
        }
    }
}

export default ar;