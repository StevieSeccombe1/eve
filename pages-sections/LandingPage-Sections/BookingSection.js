import React, { useState } from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Datetime from "react-datetime";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import {Email, People, Phone, DateRange, Subject, Message} from "@material-ui/icons";
import Button from "../../components/CustomButtons/Button";
import axios from 'axios'
import moment from "moment";
import Card from "../../components/Card/Card";

const useStyles = makeStyles(styles);

export default function BookingSection() {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    })
    const [inputs, setInputs] = useState({
        email: '',
        message: '',
        name: '',
        subject: '',
        // dateFrom: moment.now().toString(),
        // dateTo: moment.now(),
        phone: ''
    })
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            })
            setInputs({
                email: '',
                message: '',
                name: '',
                subject: '',
                dateFrom: null,
                dateTo: null,
                phone: ''
            })
        } else {
            setStatus({
                info: { error: true, msg: msg },
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
            info: { error: false, msg: null },
        })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/xvovepnk',
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(
                    true,
                    'Thank you, your message has been submitted.'
                )
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error)
            })
    }
    const classes = useStyles();
    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <div id="booking">
                    <div className={classes.title}>
                        <h3>Pricing</h3>
                    </div>
                    <div className={classes.description}>
                        <p>The price per night per tent is £60.00.</p>
                        <p>The price per night per motor home is £25.00.</p>
                    </div>
                    <div className={classes.title}>
                        <h3>Booking Enquiry</h3>
                    </div>
                    <form className={classes.form} onSubmit={handleOnSubmit}>
                    <GridContainer>
                        <GridItem xs={12} sm={6} md={6} lg={6}>
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
                        <GridItem xs={12} sm={6} md={6} lg={6}>
                            <CustomInput
                                labelText="Email..."
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
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={6} md={6} lg={6}>
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
                        <GridItem xs={12} sm={6} md={6} lg={6}>
                            <CustomInput
                                labelText="Subject"
                                id="subject"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    onChange: (e) => handleOnChange(e),
                                    required: true,
                                    value: inputs.subject,
                                    type: "text",
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Subject className={classes.inputIconsColor}/>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={6} md={6} lg={6}>
                            <FormControl fullWidth className={classes.formControl}>
                                <Datetime
                                    inputProps={{
                                        // onChange: (e) => handleOnChange(e),
                                        // value: inputs.dateFrom,
                                        type: "text",
                                        placeholder: "Date From",
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <DateRange className={classes.inputIconsColor}/>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6} lg={6}>
                            <FormControl fullWidth className={classes.formControl}>
                                <Datetime
                                    inputProps={{
                                        // onChange: (e) => handleOnChange(e.target.value.toDate()),
                                        // value: inputs.dateTo,
                                        type: "text",
                                        placeholder: "Date To",
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <DateRange className={classes.inputIconsColor}/>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </FormControl>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={6} md={12} lg={12}>
                            <FormControl fullWidth className={classes.formControl}>
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
                            </FormControl>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={6} md={12} lg={12}>
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
