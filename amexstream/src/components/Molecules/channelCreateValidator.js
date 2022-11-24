export default function validate(values) {
    let errors = {
        channelName: "",
        karmaPoints: 0,
        description:"",
        active:false

    };
    let isValid=true;
    console.log(values.channelName);
    if (values.channelName.length<=0) {
        errors.channelName = 'Name is required';
        isValid=false
    }
    if (!values.description) {
        errors.description = 'Description is required';
        isValid=false;
    } else if (values.description.length < 5) {
        errors.description = 'description must be 5 or more characters';
        isValid=false;
    }
    if (!values.karmaPoints>=0) {
        errors.karmaPoints = 'Karma Points required';
        isValid=false;
    }

    let errorObj={
        errorsValue:errors,
        status:isValid
    }
    return errorObj;
};
