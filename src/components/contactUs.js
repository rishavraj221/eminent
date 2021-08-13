import React from "react"
import { Formik, Form, Field } from "formik"
import { Box, MenuItem, InputAdornment } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { TextField } from "formik-material-ui"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import * as Yup from "yup"

import Icon from "../assets/Icons"
import "./contact.css"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: 16,
    },
  },
}))

const data = {
  desc1:
    "Schedule Your Complimentary Consultation for Your Interior Design Minneapolis Project Today!",
  desc2:
    "Once you schedule an in-home consultation, we will get to know you and learn about your goals and ideas for your home. During this visit, we will determine the initial scale of your project and help you understand the budgeting required. After the complimentary consultation, we will generally follow the project process discussed further on our blog.",
}

const services = [
  {
    value: "service-1",
    label: "Service 1",
  },
  {
    value: "service-2",
    label: "Service 2",
  },
  {
    value: "service-3",
    label: "Service 3",
  },
  {
    value: "service-4",
    label: "Service 4",
  },
]

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(100, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().length(10, "Enter a valid 10 digit number"),
  service: Yup.string().required("Required"),
})

const Footer = () => {
  const classes = useStyles()

  return (
    <div className="contact-us-container">
      <div className="contact-us-text">CONTACT US</div>
      <div className="desc1">{data.desc1}</div>
      <div className="form-container">
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phoneNumber: "",
            service: "",
          }}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(false)
            try {
              setSubmitting(true)
              alert(JSON.stringify(values, undefined, 2))
            } catch (ex) {
              alert(ex)
            }
          }}
        >
          {({
            submitForm,
            isSubmitting,
            touched,
            errors,
            values,
            setValues,
          }) => (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Form className={classes.root}>
                <Box margin={1}>
                  <Field
                    component={TextField}
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon name="account" />
                        </InputAdornment>
                      ),
                    }}
                    className="form-field"
                  />
                </Box>
                <Box margin={1}>
                  <Field
                    component={TextField}
                    type="text"
                    name="email"
                    placeholder="Email"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon name="email" />
                        </InputAdornment>
                      ),
                    }}
                    className="form-field"
                  />
                </Box>
                <Box margin={1}>
                  <Field
                    component={TextField}
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon name="phone" />
                        </InputAdornment>
                      ),
                    }}
                    className="form-field"
                  />
                </Box>
                <Field
                  component={TextField}
                  type="text"
                  name="service"
                  placeholder="Service"
                  select
                  className="form-field"
                  style={{ marginLeft: 24 }}
                >
                  <MenuItem value="" disabled selected>
                    Select a Service
                  </MenuItem>
                  {services.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>

                <Box margin={1}>
                  <div
                    variant="contained"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    className="form-button"
                    role="button"
                    tabIndex={0}
                    onKeyDown={submitForm}
                    style={{ marginLeft: 16 }}
                  >
                    Submit
                  </div>
                </Box>
              </Form>
            </MuiPickersUtilsProvider>
          )}
        </Formik>
      </div>
      <div className="desc2">{data.desc2}</div>
      <div className="read-more">
        <div>Read More</div>
        <Icon name="arrowright" color="#C19A5B" size="12" />
      </div>
    </div>
  )
}

export default Footer
