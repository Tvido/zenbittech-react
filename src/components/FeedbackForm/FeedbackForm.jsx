import React from 'react'
import { Formik } from 'formik';

import s from './FeedbackForm.module.css'

export const FeedbackForm = () => {
  return (
    <>
    <Formik
        initialValues={{
          formName: '',
          formEmail: '',
          formMessage: '',
        }}
        onSubmit={values => {
          console.log('values', { ...values });
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form action="" className={s.container} onSubmit={handleSubmit}>
            <h1 className={s.title}>Reach out to us!</h1>
            <div className={s.inputs}>
              <div>
                <div className={s.content}>
                  <input
                    id="formName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.position}
                    type="text"
                    name="formName"
                    autoComplete="off"
                    placeholder=" "
                    className={s.input}
                  />
                  <label htmlFor="formName" className={s.label}>
                    Your Name *
                  </label>
                </div>

                <div className={s.content}>
                  <input
                    id="formEmail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="email"
                    name="formEmail"
                    autoComplete="off"
                    placeholder=" "
                    className={s.input}
                  />
                  <label htmlFor="formEmail" className={s.label}>
                  Your e-mail *
                  </label>
                </div>

                <div className={s.content}>
                  <textarea
                    id="formMessage"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    type="text"
                    name="formMessage"
                    autoComplete="off"
                    placeholder=" "
                    className={s.input}
                  ></textarea>
                  <label htmlFor="formMessage" className={s.label}>
                  Your message *
                  </label>
                </div>
              </div>
            </div>

            <div className="">
              <button type="submit" id="button" className={s.form__btn}>
                Send message
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
    
  )
}
