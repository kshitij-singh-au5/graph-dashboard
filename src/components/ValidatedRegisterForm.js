import React from "react";
import { Link } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";
const ValidatedRegisterForm = () => (

    <Formik
        initialValues={{ email: "", phone:"", password: "", cfpassword: "" }}
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
            phone: Yup.string()
                .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Phone number not valid.")
                .required("Required"),
            password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number."),
            cfpassword: Yup.string()
                .required("Enter password again.")
                .test('passwords-match', 'Passwords must match', function(value) {
                    return this.parent.password === value;
                  }),
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
                    <label htmlFor="phone">Phone</label>
                    <input
                        name="phone"
                        type="phone"
                        placeholder="Enter your phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.phone && touched.phone && "error"}
                        required
                    />
                    {errors.phone && touched.phone && (
                        <div className="input-feedback">{errors.phone}</div>
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
                    <label htmlFor="email">Re-Enter Password</label>
                    <input
                        name="cfpassword"
                        type="password"
                        placeholder="Re-Enter your password"
                        value={values.cfpassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.cfpassword && touched.cfpassword && "error"}
                        required
                    />
                    {errors.cfpassword && touched.cfpassword && (
                        <div className="input-feedback">{errors.cfpassword}</div>
                    )}

                    <Link to='/'>
                        {values.email && values.password && values.phone && values.cfpassword ?
                            <button type="submit" className="rounded-pill btn-primary btn-md" disabled={false} style={{ width: "200px" }}>
                                Submit
                            </button>
                        :
                            <button type="submit" className="rounded-pill btn-primary btn-md" disabled={true} style={{ width: "200px" }}>
                                Submit
                            </button>
                        }

                    </Link>

                </form>
            );
        }}
    </Formik>
);

export default ValidatedRegisterForm;
