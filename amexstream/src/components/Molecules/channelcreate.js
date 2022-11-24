import React, {useEffect} from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import InputText from "primereact/primereact.all.esm";
import Checkbox from "primereact/primereact.all.esm";
import {classNames} from "primereact/utils";

//react hook version 16.8
export default function ChannelCreate(props){
    const { channelName: propsChannelName, karmaPoints:propsKarmaPoints, description: propsDescription,
        active:propsActive } = props;
    //define fields
    const [channelName, setChannelName] = useState( propsChannelName,"");
    const [karmaPoints, setKarmaPoints] = useState( propsKarmaPoints,0);
    const [description, setDescription] = useState( propsDescription,'');
    const [active, setActive] = useState( propsActive,false);

    const [inputs, setInputs]= useState({});
    const [errors, setErrors] = useState({
        channelName: "",
        karmaPoints: 0,
        description:"",
        active:false
    });

    const [isAddDisabled, setIsAddDisabled] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    //STEP1
    const dispatch = useDispatch();



    const handleOnChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        //console.log(name,value)
        setInputs(values=>({...values,[name]:value}))
        if((inputs.policyNo>0)&&(inputs.policyHolderName.length>5)&&(inputs.sumAssured>0))
            setIsAddDisabled(true);
    };

    const handleSubmit=(event)=> {
        event.preventDefault();

        console.log(inputs)
        //console.log(validate(inputs));
        let response= validate(inputs)
        setErrors(response.errorsValue);
        console.log(errors);
        let isValid=response.status;


        if(isValid) {
            setIsAddDisabled(false);
            /*
            axios.post(RestAPIUrl + "/addpolicy", inputs).then(res => {
                console.log(res);
                setPolicyNo("")
                setPolicyHolderName("")
                setFromDate("")
                setToDate("")
                setSumAssured("")
            }).catch(error => {
                throw(error);
            });
            */

            //Step6
            dispatch(createPolicy(inputs))
                .then(data => {
                    console.log(data);
                    setPolicyNo("")
                    setPolicyHolderName("")
                    setFromDate("")
                    setToDate("")
                    setSumAssured("")
                })
                .catch(e => {
                    console.log(e);
                });


        }

    }


    return(
        <div>
            <form onSubmit={handleSubmit}  className="form border border-primary shadow-none p-3 rounded">
                <fieldset>
                    <legend>Add Channel</legend>
                    <span className="mt-5">
                    <label htmlFor="channelName" className="form-label">Channel Name</label>
                 <InputText  name="channelName" type="text"  value={channelName}
                             className="form-control"
                             onChange={handleOnChange}/>
                        {errors.channelName &&
                        <div style={{ color: "red", paddingBottom: 10 }}>
                            {errors.channelName}</div>
                        }

                </span>
                    <span className="mt-5">
                    <label htmlFor="karmaPoints" className="form-label">Karma Points</label>
                    <InputText  name="karmaPoints"  type="number" value={karmaPoints}
                                className="form-control"
                                onChange={handleOnChange}/>
                        {errors.karmaPoints &&
                        <div style={{ color: "red", paddingBottom: 10 }}>
                            {errors.karmaPoints}</div>
                        }
                </span>
                    <span className="mt-5">
                         <label htmlFor="description" className="form-label">Description</label>
                          <InputText  name="description" type="text"  value={description}
                                      className="form-control"
                                      onChange={handleOnChange}/>
                        {errors.description &&
                        <div style={{ color: "red", paddingBottom: 10 }}>
                            {errors.description}</div>
                        }
                </span>
                    <span className="mt-5">
                    <label htmlFor="active" className="form-label">Active</label>
                         <Checkbox inputId="accept" name="accept"
                                    onChange={handleOnChange}
                                   className={classNames({ 'p-invalid': isFormFieldValid('accept') })} />

                          {errors.active &&
                        <div style={{ color: "red", paddingBottom: 10 }}>
                            {errors.active}</div>
                        }
                </span>

                    <Button label="Submit" className="mt-3 form-control" aria-label="Submit"
                            type="submit" disabled={!isAddDisabled} />
                </fieldset>
            </form>

        </div>
    )


}
