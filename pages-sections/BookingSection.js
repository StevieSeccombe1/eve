import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import {Email, People, Phone, Message} from "@material-ui/icons";
import Button from "../components/CustomButtons/Button";
import axios from 'axios'

const useStyles = makeStyles(styles);

export default function BookingSection() {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: {error: false, msg: null},
    })
    const [inputs, setInputs] = useState({
        email: '',
        message: '',
        name: '',
        subject: 'New Enquiry',
        phone: ''
    })
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: {error: false, msg: msg},
            })
            setInputs({
                email: '',
                message: '',
                name: '',
                phone: ''
            })
        } else {
            setStatus({
                info: {error: true, msg: msg},
            })
        }
    }
    const handleOnChange = (e) => {
        e.persist()
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: {error: false, msg: null},
        })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        setStatus((prevStatus) => ({...prevStatus, submitting: true}))
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/mbjqznzy',
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(
                    true,
                    'Thank you, your enquiry has been submitted.'
                )
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error)
            })
    }
    const classes = useStyles();
    return (
        <div className={classes.sections}>
            <div style={{ textAlign: "center" }} className={classes.container}>
            <h2 className={classes.title}>Make an Enquiry</h2>
                <div id="enquiries">
                    Get in touch by phone, email or using the contact form below.
                    <form className={classes.form} onSubmit={handleOnSubmit}>
                        <GridContainer>
                            <GridItem xs={12} sm={4} md={4} lg={4}>
                                <CustomInput
                                    labelText="Name"
                                    id="name"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        onChange: (e) => handleOnChange(e),
                                        required: true,
                                        value: inputs.name,
                                        type: "text",
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <People className={classes.inputIconsColor}/>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={4} lg={4}>
                                <CustomInput
                                    labelText="Email"
                                    id="email"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        name: "_replyto",
                                        onChange: (e) => handleOnChange(e),
                                        required: true,
                                        value: inputs.email,
                                        type: "email",
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Email className={classes.inputIconsColor}/>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={4} md={4} lg={4}>
                                <CustomInput
                                    labelText="Phone"
                                    id="phone"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        onChange: (e) => handleOnChange(e),
                                        value: inputs.phone,
                                        type: "phone",
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Phone className={classes.inputIconsColor}/>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={6} md={12} lg={12}>
                                <CustomInput
                                    labelText="Message"
                                    id="message"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        onChange: (e) => handleOnChange(e),
                                        required: true,
                                        value: inputs.message,
                                        type: "textarea",
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Message className={classes.inputIconsColor}/>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={6} md={12} lg={12}>
                                <div style={{textAlign: 'center'}}>
                                    <Button
                                        type="submit"
                                        disabled={status.submitting}
                                    >
                                        {!status.submitting
                                            ? !status.submitted
                                                ? 'Submit'
                                                : 'Submitted'
                                            : 'Submitting...'}
                                    </Button>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </form>
                    {status.info.error && (
                        <div className="error">Error: {status.info.msg}</div>
                    )}
                    {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
                </div>
            </div>
        </div>
    );
}
