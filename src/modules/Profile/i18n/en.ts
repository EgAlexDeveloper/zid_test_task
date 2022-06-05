import * as shared from "../../../container/i18n/data/common";

const en = {
    profile: {
        title: 'Profile Page',
        nameAr: 'User arabic name',
        nameEn: 'User english name',
        gender: 'Gender',
        male: 'Male',
        female: 'Female',
        date_of_birth: 'Date Of Birth',
        validations: {
            nameAr: {
                required: shared.default.ar.common.validations.required,
                notLatin: shared.default.ar.common.validations.notLatin,
            },
            nameEn: {
                required: shared.default.ar.common.validations.required,
                latin: shared.default.ar.common.validations.latin,
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

export default en;