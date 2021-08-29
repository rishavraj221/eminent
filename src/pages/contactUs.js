import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Formik, Form, Field } from "formik"
import { Box, InputAdornment } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { TextField } from "formik-material-ui"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import * as Yup from "yup"
import emailjs from "emailjs-com"

import Head from "../components/head"
import Layout from "../components/layout"
import Icon from "../assets/Icons"
import "./contactUs.css"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: 16,
      backgroundColor: "white",
    },
    "& .MuiOutlinedInput-multiline": {
      backgroundColor: "white",
    },
    "& .MuiBox-root-10": {
      marginTop: 60,
    },
  },
}))

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(100, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .length(10, "Enter a valid 10 digit number")
    .required("Required"),
  message: Yup.string().min(10, "Too Short!").max(255, "Too Long!"),
})

const followUsLinks = (
  <div className="follow-us-links contact-single-info-container">
    <div className="contact-head">FOLLOW US</div>
    <div>
      <a
        href="https://www.facebook.com/eminentid/"
        target="_blank"
        className="social-media-link"
        rel="noreferrer"
      >
        Facebook
      </a>
      <a
        href="https://www.instagram.com/eminentinteriordesign/"
        target="_blank"
        className="social-media-link"
        rel="noreferrer"
      >
        Instagram
      </a>
      <a
        href="http://www.houzz.com/pro/eminentid/eminent-interior-design"
        target="_blank"
        className="social-media-link"
        rel="noreferrer"
      >
        Houzz
      </a>
    </div>
  </div>
)

const ContactUs = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          phone
          address
          email
        }
      }
    }
  `).site.siteMetadata

  return (
    <Layout>
      <Head title="Contact Us" />
      <div className="contact-us-head-text">CONTACT US</div>
      <div className="contact-us-head head-a">LET'S WORK</div>
      <div className="contact-us-head head-b">TOGETHER</div>
      <div className="contact-us-head-c">Connect</div>
      <div className="contact-info-container">
        <div className="contact-single-info-container">
          <div className="contact-head">EMAIL</div>
          <div className="contact-info">{data.email.toUpperCase()}</div>
          <div className="follow-us-links-big-screen">{followUsLinks}</div>
        </div>
        <div className="contact-single-info-container">
          <div className="contact-head">PHONE</div>
          <div className="contact-info">{data.phone}</div>
        </div>
        <div className="contact-single-info-container">
          <div className="contact-head">OFFICE</div>
          <div className="contact-info">{data.address.toUpperCase()}</div>
          <a
            href="https://www.google.com/maps/place/11140+Hwy+55+Suite+C,+Plymouth,+MN+55441,+USA/@44.9890516,-93.4234356,17z/data=!3m1!4b1!4m5!3m4!1s0x52b33581056a5ac1:0x78b19213a5d8f875!8m2!3d44.9890516!4d-93.4212469"
            target="_blank"
            className="link-to-google-map"
            rel="noreferrer"
          >
            View on Map
          </a>
        </div>
        <div className="follow-us-links-mobile">{followUsLinks}</div>
      </div>

      <div className="contact-form-container">
        <div className="contact-form-text">CONTACT FORM</div>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phoneNumber: "",
            message: "",
          }}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(false)
            try {
              setSubmitting(true)
              await emailjs.send(
                process.env.EMAILJS_SERVICE_ID,
                process.env.EMAILJS_TEMPLATE_ID,
                {
                  from_name: values.fullName,
                  to_name: "EMINENT INTERIOR DESIGNER",
                  message: values.message,
                  phone_number: values.phoneNumber,
                  email: values.email,
                },
                process.env.EMAILJS_USER_ID
              )
              setSubmitting(false)
              alert("Thank you for your message, we will get to you soon...")
            } catch (ex) {
              alert("Something went wrong!")
              console.log(ex)
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
                    className="contact-form-field"
                    variant="outlined"
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
                    className="contact-form-field"
                    variant="outlined"
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
                    className="contact-form-field"
                    variant="outlined"
                  />
                </Box>
                <Box margin={1}>
                  <Field
                    component={TextField}
                    type="text"
                    name="message"
                    placeholder="Your Message"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon name="comment" />
                        </InputAdornment>
                      ),
                    }}
                    multiline
                    rows={3}
                    className="contact-form-field message-form-field"
                    variant="outlined"
                  />
                </Box>

                <Box margin={1}>
                  <div
                    variant="contained"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    className="submit-form-button"
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
    </Layout>
  )
}

export default ContactUs
