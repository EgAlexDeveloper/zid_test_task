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
            ...shared.default.ar.common.validations
        }
    }
}

export default ar;