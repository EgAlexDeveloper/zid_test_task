import * as shared from "../../../container/i18n/data/common";

const ar = {
    profile: {
        title: 'الملف الشخصي',
        nameAr: 'اسم المستخدم بالعربية',
        nameEn: 'اسم المستخدم بالإنجليزية',
        gender: 'النوع',
        male: 'ذكر',
        female: 'انثى',
        date_of_birth: 'تاريخ الميلاد',
        validations: {
            nameAr: {
                required: shared.default.ar.common.validations.required,
                pattern: shared.default.ar.common.validations.notLatin,
            },
            nameEn: {
                required: shared.default.ar.common.validations.required,
                pattern: shared.default.ar.common.validations.latin,
            },
            date_of_birth: {
                required: shared.default.ar.common.validations.required
            },
            gender: {
                required: shared.default.ar.common.validations.required
            }
        }
    }
}

export default ar;