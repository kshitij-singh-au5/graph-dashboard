import React from "react";
import { Link } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";
const ValidatedLoginForm = () => (

    <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                console.log("Logging in", values);
                setSubmitting(false);
            }, 500);
        }}

        validationSchema={Yup.object().shape({
            email: Yup.string()
                .email()
                .required("Required"),
            password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number.")
        })}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;

            return (

                <form onSubmit={handleSubmit} className='mt-5'>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && "error"}
                        required
                    />
                    {errors.email && touched.email && (
                        <div className="input-feedback">{errors.email}</div>
                    )}
                    <label htmlFor="email">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password && "error"}
                        required
                    />
                    {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                    )}

                    <Link to='/dashboard'>
                        {values.email && values.password ?
                            <button type="submit" className="rounded-pill btn-primary btn-md" disabled={false} style={{ width: "200px" }}>
                                Submit
                            </button>
                            :
                            <button type="submit" className="rounded-pill btn-primary btn-md" disabled={true} style={{ width: "200px" }}>
                                Submit
                            </button>
                        }

                    </Link>
                    <div>
                        <button type="button" className="btn btn-link mt-3">
                            Forgot Password
                        </button>
                        <Link to='/register'>
                            <button type="submit" className="ml-3 btn btn-link mt-3">
                                Register
                            </button>
                        </Link>
                    </div>


                </form>
            );
        }}
    </Formik>
);

export default ValidatedLoginForm;
