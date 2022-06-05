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
            ...shared.default.en.common.validations
        }
    }
}

export default en;