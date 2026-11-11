"use client";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styles from "../page.module.css";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration (dashboard: https://dashboard.emailjs.com/admin)
  // Service ID comes from Email Services. Override without a code change by setting
  // NEXT_PUBLIC_EMAILJS_SERVICE_ID in .env.local or in Vercel's environment variables.
  const EMAILJS_SERVICE_ID = "service_hmagck2";
  const EMAILJS_TEMPLATE_ID = "template_4pdcyuy"; // "One-Time Password" template: {{name}} {{email}} {{subject}} {{message}}
  const EMAILJS_PUBLIC_KEY = "pRzu3QeZX_DQLZcch";
  const OWNER_EMAIL = "afzaalhafeez1020@gmail.com";

  useEffect(() => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);


  // Regex patterns
  const nameRegex = /^[a-zA-Z ._-]+$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validation logic
  const validateField = (name, value) => {
    let error = "";
    if (name === "name") {
      if (!value.trim()) error = "Name is required.";
      else if (!nameRegex.test(value.trim()))
        error = "Name can only contain letters, space, '.', '_', and '-'.";
    }
    if (name === "email") {
      if (!value.trim()) error = "Email is required.";
      else if (!emailRegex.test(value.trim()))
        error =
          "Please enter a valid email address (e.g., example@domain.com).";
    }
    if (name === "subject") {
      if (!value.trim()) error = "Subject cannot be empty.";
    }
    if (name === "message") {
      if (!value.trim()) error = "Message cannot be empty.";
      else if (value.trim().length < 1)
        error = "Message should be at least 1 characters long.";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
    return error;
  };
  // Handle input changes and validate fields on change

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSubmitted(false);

  
    const nameError = validateField("name", form.name);
    const emailError = validateField("email", form.email);
    const subjectError = validateField("subject", form.subject);
    const messageError = validateField("message", form.message);

    if (
      nameError ||
      emailError ||
      subjectError ||
      messageError ||
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setIsSubmitting(false);
      return;
    }

    // EmailJS send
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          // The template's "To Email" field is {{email}}, so this must be the owner's
          // address or the message would go to the visitor instead.
          name: form.name,
          email: OWNER_EMAIL,
          reply_to: form.email,
          subject: `Portfolio contact: ${form.subject}`,
          message: `From: ${form.name} <${form.email}>\n\n${form.message}`,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      })
      .catch((err) => {
        const detail = err?.text || err?.message || "";
        console.error("EmailJS send failed:", err);
        setError(
          detail
            ? `Message could not be sent (${detail}). Please email me directly instead.`
            : "Message could not be sent. Please email me directly instead."
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Hide notifications after a few seconds (errors stay longer so they can be read)
  useEffect(() => {
    let timer;
    if (submitted || error) {
      timer = setTimeout(() => {
        setSubmitted(false);
        setError("");
      }, error ? 8000 : 4000);
    }
    return () => clearTimeout(timer);
  }, [submitted, error]);

  return (
    <>
      <form
        className={styles.contactForm}
        style={{ width: "100%" }}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className={styles.formGroup}>
          <input
            type="text"
            name="name"
            id="contactName"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={form.name}
            onChange={handleChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            placeholder="Your Name"
            required
            aria-describedby="nameHelp"
          />
          {errors.name && (
            <div id="nameHelp" className="invalid-feedback">
              {errors.name}
            </div>
          )}
        </div>
        <div className={styles.formGroup}>
          <input
            type="email"
            name="email"
            id="contactEmail"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={form.email}
            onChange={handleChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            placeholder="Your Email"
            required
            aria-describedby="emailHelp"
          />
          {errors.email && (
            <div id="emailHelp" className="invalid-feedback">
              {errors.email}
            </div>
          )}
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="subject"
            id="contactSubject"
            className={`form-control ${errors.subject ? "is-invalid" : ""}`}
            value={form.subject}
            onChange={handleChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            placeholder="Subject"
            required
            aria-describedby="subjectHelp"
          />
          {errors.subject && (
            <div id="subjectHelp" className="invalid-feedback">
              {errors.subject}
            </div>
          )}
        </div>
        <div className={styles.formGroup}>
          <textarea
            name="message"
            id="contactMessage"
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            value={form.message}
            onChange={handleChange}
            onBlur={(e) => validateField(e.target.name, e.target.value)}
            placeholder="Write your message here..."
            rows="5"
            required
            aria-describedby="messageHelp"
          ></textarea>
          {errors.message && (
            <div id="messageHelp" className="invalid-feedback">
              {errors.message}
            </div>
          )}
        </div>
        <button
          type="submit"
          className={styles.btnPrimary}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
        {submitted && (
          <div className="alert alert-success mt-3" role="alert">
            Thank you for contacting me! I&apos;ll get back to you soon.
          </div>
        )}
        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}
      </form>
    </>
  );
}
