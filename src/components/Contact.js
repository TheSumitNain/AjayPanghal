import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

import "../css/contact.css";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { ImYahoo2 } from "react-icons/im";

const Contact = () => {
  const [state, setState] = useState();

  const formSparkURL = "https://submit-form.com/LG1j8cXX";

  const initialValues = {
    fullName: "",
    email: "",
    number: "",
  };

  const validationSchema = yup.object({
    fullName: yup.string().min(3).max(30).trim().required("required"),
    email: yup.string().email().required("required"),
    number: yup.number().required("required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    setState(values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  const postSubmission = async () => {
    const payload = {
      fullName: state.fullName,
      email: state.email,
      number: state.number,
    };

    try {
      const result = await axios.post(formSparkURL, payload);
      alert("Message send Successfully");
      setState(null);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (state) {
      postSubmission();
    }
  }, [state]);

  return (
    <>
      <div className="contact_main">
        <div className="contact_heading">
          <h2>contact us</h2>
        </div>
        <div className="contact_inner">
          <iframe
            className="contact_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93150.20950274414!2d-80.35646697997028!3d43.14770423401141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c65e278ea730f%3A0x353da5a5a466f9e0!2sBrantford%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1681920937964!5m2!1sen!2sin"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="contact_info">
            <div className="contact_info_div">
              <p>Brantford, Ontario</p>
            </div>
            <div className="contact_info_div">
              <span>
                {" "}
                <MdCall />{" "}
              </span>
              <a href="tel:+12898875156"> +1 (289) 887-5156 </a>
            </div>
            <div className="contact_info_div">
              <span>
                <ImYahoo2 />
              </span>

              <a href=""> panghal.ajay@yahoo.com </a>
            </div>
            <div className="contact_info_div">
              <span>
                <MdEmail />
              </span>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=panghal.ajay12@gmail.com">
                panghal.ajay12@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* contact form start here */}

      <div className="contact_form_main">
        <div className="contact_heading">
          <h2>We'll contact you soon</h2>
        </div>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div>
                {/* <label htmlFor="fullName">Full Name*</label> <br /> */}
                <Field
                  type="text"
                  name="fullName"
                  placeholder="full name *"
                  className="myinput"
                />
                <p className="error">
                  <ErrorMessage name="fullName" />
                </p>
              </div>
              <div>
                {/* <label htmlFor="email">Email*</label> <br /> */}
                <Field
                  type="number"
                  name="number"
                  placeholder="number *"
                  className="myinput"
                />
                <p className="error">
                  <ErrorMessage name="number" />
                </p>
              </div>
              <div>
                {/* <label htmlFor="email">Email*</label> <br /> */}
                <Field
                  type="email"
                  name="email"
                  placeholder="email *"
                  className="myinput"
                />
                <p className="error">
                  <ErrorMessage name="email" />
                </p>
              </div>
              <div className="contact_form_btn">
                <button type="submit">send</button>
                <button type="reset">reset</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>

      {/* contact form end here */}
    </>
  );
};

export default Contact;

