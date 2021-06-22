import React, { useState } from "react";
import classes from "./Contact.module.scss";
import { FaMapMarker, FaEnvelope, FaCode } from "react-icons/fa";

const Contact = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    subject: "",
    feedback: "",
  });
  // to submit our form with a success message
  const [submitted, setSubmitted] = useState(false);

  // for the submit message . should apear when all form is filled correctly
  const [valid, setValid] = useState(false);

  //  handler on change for full name
  const handleFullNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      fullName: event.target.value,
    }));
  };
  // handler on change for email
  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };
  // handler chnage for subject
  const handleSubjectlInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      subject: event.target.value,
    }));
  };
  // handler for feedback
  const handleFeedbacklInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      feedback: event.target.value,
    }));
  };

  // here checking each of our state values for the form is valid
  const handleSubmit = (event) => {
    // event.preventDefault();
    if (values.fullName && values.email && values.subject && values.feedback) {
      setValid(true);
      setSubmitted(true);
    }
  };

  return (
    <div>
      <div className={classes.MainContainer}>
        <div className={classes.Container}>
          <div className={classes.Header}>
            <h1>
              CONTACT <span>ME</span>
            </h1>
            <p>
              If you want my work, why not call on me for your next project? I
              could send you a quotation and more details about my workflow.
            </p>
          </div>
          <div className={classes.Info}>
            <div className={classes.EmailInfo}>
              <h4>Get In Touch</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
                sapiente.
              </p>
              <div className={classes.MoreInfo}>
                <FaMapMarker className={classes.icon} />
                <span>
                  Location <div>Leipzig</div>
                </span>
              </div>

              <div className={classes.MoreInfo}>
                <FaEnvelope className={classes.icon} />
                <span>
                  E-mail <div>maryampayanda12@gmail.com</div>
                </span>
              </div>
              <div className={classes.MoreInfo}>
                <FaCode className={classes.icon} />
                <span>
                  Website <div>.com</div>
                </span>
              </div>
            </div>
            <div className={classes.FormInfo}>
              <form
                action="https://formsubmit.co/maryampayanda12@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className={classes.PartOne}>
                  <span>
                    <label htmlFor="fullName">Full Name *</label>
                    <br />
                    <input
                      type="text"
                      id="fullName"
                      required
                      placeholder="Full Name"
                      name="fullName"
                      value={values.fullName}
                      onChange={handleFullNameInputChange}
                    />
                    {submitted && !values.fullName && (
                      <span id="full-name-error">Please enter a fullname</span>
                    )}
                  </span>

                  <span>
                    <label htmlFor="email"> Email *</label> <br />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Enter Your Email"
                      value={values.email}
                      onChange={handleEmailInputChange}
                    />
                    {submitted && !values.email && (
                      <span id="email-error">
                        Please enter valid email address
                      </span>
                    )}
                  </span>
                </div>

                <div className={classes.PartTwo}>
                  <label htmlFor="subject">Subject *</label>
                  <br />

                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    name="subject"
                    required
                    value={values.subject}
                    onChange={handleSubjectlInputChange}
                  />
                  {submitted && !values.subject && (
                    <span id="subject-error">Please enter a Subject</span>
                  )}
                </div>

                <div className={classes.PartThree}>
                  <label htmlFor="feedback">
                    Please write your message here! *
                  </label>
                  <br />
                  <textarea
                    name="feedback"
                    id="feedback"
                    cols="30"
                    rows="10"
                    required
                    placeholder="Hello There!"
                    value={values.feedback}
                    onChange={handleFeedbacklInputChange}
                  ></textarea>
                  {submitted && !values.feedback && (
                    <span id="feedback-error">Please enter your message!</span>
                  )}
                </div>
                <div className={classes.PartFour}>
                  <button type="submit" value="Submit">
                    Submit
                  </button>
                </div>
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you! your message has been received and I will reply to you as soon as possible."
                />
                <input type="hidden" name="_subject" value="Message received" />
              </form>
              {submitted && (
                <div className={classes.SuccessMessage}>
                  Success! Soon will get in touch.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
