import React, {useEffect} from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import { InputText } from 'primereact/inputtext';
import {Checkbox} from "primereact/checkbox";
import {Button} from "primereact/button";
import { classNames } from 'primereact/utils';
import './channelcreate.css'
import validate from "./channelCreateValidator";
//react hook version 16.8
export default function ChannelCreate(props){
    const { channelName: propsChannelName, karmaPoints:propsKarmaPoints, description: propsDescription,
        active:propsActive } = props;
    //define fields

    const [channelName, setChannelName] = useState( "");
    const [karmaPoints, setKarmaPoints] = useState( 0);
    const [description, setDescription] = useState( '');
    const [active, setActive] = useState( false);

    const [inputs, setInputs]= useState({});
    const [errors, setErrors] = useState({
        channelName: "",
        karmaPoints: 0,
        description:"",
        active:false
    });

    const [isAddDisabled, setIsAddDisabled] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    //STEP1
    const dispatch = useDispatch();



    const handleOnChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        console.log(name,value)
       setInputs(values=>({...values,[name]:value}))
        console.log(inputs)
        if((inputs.channelName.length>0)&&(inputs.description.length>5))
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
        */

        }

    }


    return(
        <div className="form-demo">
            <div className="flex justify-content-center">
                <div className="card">
            <form onSubmit={handleSubmit}   className="p-fluid">
                <fieldset>
                    <legend>Add Channel</legend>
                    <div className="field">

                    <label htmlFor="channelName" className="form-label">Channel Name</label>
                 <InputText  name="channelName" type="text"  value={channelName}
                             className="form-control"
                             onChange={handleOnChange}/>

                        {errors.channelName &&
                        <div style={{ color: "red", paddingBottom: 10 }}>
                            {errors.channelName}</div>
                        }

                </div>
                    <div className="field">

                    <label htmlFor="karmaPoints" className="form-label">Karma Points</label>
                    <InputText  name="karmaPoints"  type="number" value={karmaPoints}
                                className="form-control"
                                onChange={handleOnChange} />

                        {errors.karmaPoints &&
                        <div style={{ color: "red", paddingBottom: 10 }}>
                            {errors.karmaPoints}</div>
                        }
                </div>
                    <div className="field">

                         <label htmlFor="description" className="form-label">Description</label>
                          <InputText  name="description" type="text"  value={description}
                                      className="form-control"
                                      onChange={handleOnChange}/>

                        {errors.description &&
                        <div style={{ color: "red", paddingBottom: 10 }}>
                            {errors.description}</div>
                        }
                </div>
                    <div className="field">

                    <label htmlFor="active" className="form-label">Active</label>
                        <Checkbox inputId="active" name="active" value={active} onChange={handleOnChange} ></Checkbox>


                          {errors.active &&
                        <div style={{ color: "red", paddingBottom: 10 }}>
                            {errors.active}</div>
                        }
                </div>

                    <Button label="Submit" className="mt-3 form-control" aria-label="Submit"
                            type="submit" disabled={!isAddDisabled} />
                </fieldset>
            </form>
                </div>
            </div>
        </div>
    )


}
