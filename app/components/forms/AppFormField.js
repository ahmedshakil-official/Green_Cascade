import React from 'react';
import AppTextInput from '../AppTextInput';
import {useFormikContext} from 'formik';

function AppFormField({name, ...otherProps}) {
    const {setFieldTouched, handleChange, touched}= useFormikContext() 
    return (
        <>
        <AppTextInput
                    // autoCapitalized="none"
                    // autoCorrect={false}
                    // keyboardType="email-address"
                    onBlur={()=> setFieldTouched(name)}
                    // icon="email"

                    onChangeText={handleChange(name)}
                    {...otherProps}
                    // placeholder="Email" 
                    // textContentType="emailAddress"
                    />
        </>
    );
}

export default AppFormField;