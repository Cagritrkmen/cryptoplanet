"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const countries = [
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+49", name: "Germany" },
  { code: "+82", name: "South Korea" },
];

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])/, "Must include number & special char")
    .required("Required"),
  confirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  country: Yup.string().required("Required"),
  nickname: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Numbers only")
    .required("Required"),
  uid: Yup.string(),
});

export default function RegisterPage() {
  const [tab, setTab] = useState("email");

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-4 bg-light border-bottom">
        <div className="container d-flex flex-column flex-md-row align-items-md-center gap-2">
          <h1 className="h2 fw-bold mb-0">Register</h1>
          <nav className="ms-md-auto" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Register</li>
            </ol>
          </nav>
        </div>
      </section>

      <main className="py-5 bg-white">
        <div className="container" style={{ maxWidth: 760 }}>
          {/* Heading */}
          <div className="text-center mb-4">
            <h2 className="fw-bold display-6">Register To Rocket</h2>
            <p className="text-secondary fs-5">
              Register in advance and enjoy the event benefits
            </p>
          </div>

          {/* Tabs */}
          <div className="d-flex justify-content-center mb-4 gap-2">
            <button
              className={`btn rounded-pill px-4 fw-semibold ${
                tab === "email" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setTab("email")}
            >
              Email
            </button>
            <button
              className={`btn rounded-pill px-4 fw-semibold ${
                tab === "mobile" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setTab("mobile")}
            >
              Mobile
            </button>
          </div>

          {/* Formik Form */}
          {tab === "email" && (
            <Formik
              initialValues={{
                email: "",
                password: "",
                confirm: "",
                country: "",
                nickname: "",
                phone: "",
                uid: "",
              }}
              validationSchema={RegisterSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log("REGISTER", values);
                setSubmitting(false);
                resetForm();
                alert("Registered successfully (fake)");
              }}
            >
              {({ isSubmitting }) => (
                <Form className="row g-4">
                  {/* Email */}
                  <div className="col-12">
                    <label className="form-label fw-bold">Email / ID</label>
                    <div className="input-group">
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                      <button className="btn btn-primary" type="button">
                        Authenticate
                      </button>
                    </div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger small mt-1"
                    />
                  </div>

                  {/* Password */}
                  <div className="col-12">
                    <label className="form-label fw-bold">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                    />
                    <div className="form-text">
                      8 or more characters, including numbers and special characters
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger small mt-1"
                    />
                  </div>

                  {/* Confirm Password */}
                  <div className="col-12">
                    <label className="form-label fw-bold">Confirm Password</label>
                    <Field
                      type="password"
                      name="confirm"
                      className="form-control"
                      placeholder="Confirm password"
                    />
                    <ErrorMessage
                      name="confirm"
                      component="div"
                      className="text-danger small mt-1"
                    />
                  </div>

                  {/* Country */}
                  <div className="col-12">
                    <label className="form-label fw-bold">Country</label>
                    <Field as="select" name="country" className="form-select">
                      <option value="">Select country</option>
                      {countries.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.name} ({c.code})
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="text-danger small mt-1"
                    />
                  </div>

                  {/* Nickname */}
                  <div className="col-12">
                    <label className="form-label fw-bold">Nickname</label>
                    <Field
                      name="nickname"
                      className="form-control"
                      placeholder="Nickname"
                    />
                    <div className="form-text">(Excluding special characters)</div>
                    <ErrorMessage
                      name="nickname"
                      component="div"
                      className="text-danger small mt-1"
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-12">
                    <label className="form-label fw-bold">Phone</label>
                    <Field
                      name="phone"
                      className="form-control"
                      placeholder="e.g. 01012345678 (numbers only)"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-danger small mt-1"
                    />
                  </div>

                  {/* UID */}
                  <div className="col-12">
                    <label className="form-label fw-bold">UID Code (Invitation)</label>
                    <Field
                      name="uid"
                      className="form-control"
                      placeholder="Enter your invitation code"
                    />
                  </div>

                  {/* Submit */}
                  <div className="col-12 d-grid mt-3">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg rounded-pill fw-bold"
                      disabled={isSubmitting}
                    >
                      Pre-Registration
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </main>

    </>
  );
} 