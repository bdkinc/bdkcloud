import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import { FaPaperPlane, FaSync } from "react-icons/fa";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";
import { useRouter } from "next/router.js";
import { useState } from "react";

const initialValues = { name: "", email: "", phone: "", comment: "" };
const validationSchema = object().shape({
  name: string().required("Required"),
  email: string().email("Invalid email").required("Required"),
  phone: string().required("Required"),
  comment: string().required("Required"),
});

const ContactForm = () => {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        let data = { ...values, website: "", business: "", origin: 2 };

        try {
          await fetch("https://cms.bdkinc.com/_/items/contact_requests", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          setSubmitted(true);
        } catch (e) {
          throw Error(e);
        }
      }}
    >
      {({ isSubmitting, errors, touched, submitCount, values }) =>
        submitted ? (
          <div>
            <div className="mb-4 text-xl">
              <h3 className="font-semibold text-3xl mb-3">
                Thank you for getting in touch, {values.name}!
              </h3>
              <p>
                We appreciate you contacting us. One of our colleagues will get
                back in touch with you soon. Keep an eye out for an email sent
                to &lt;{values.email}&gt;. Have a great day!
              </p>
            </div>
          </div>
        ) : (
          <div className="relative">
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block font-semibold text-gray-800 dark:text-blue-200"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="name"
                  as={Input}
                  placeholder="Pat Doe"
                  autoFocus={router.route === "/contact"}
                  className={`${
                    errors.name &&
                    touched.name &&
                    submitCount > 0 &&
                    "border-red-500"
                  }`}
                />
                {errors.name && touched.name && submitCount > 0 && (
                  <div className="text-red-500">{errors.name}</div>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-semibold text-gray-800 dark:text-blue-200"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <Field
                  type="email"
                  name="email"
                  as={Input}
                  placeholder="pat.doe@example.com"
                  className={`${
                    touched.email &&
                    errors.email &&
                    submitCount > 0 &&
                    "border-red-500"
                  }`}
                />
                {touched.email && errors.email && submitCount > 0 && (
                  <div className="text-red-500">{errors.email}</div>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block font-semibold text-gray-800 dark:text-blue-200"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  name="phone"
                  as={Input}
                  placeholder="(202) 555-0112"
                  className={`${
                    touched.phone &&
                    errors.phone &&
                    submitCount > 0 &&
                    "border-red-500"
                  }`}
                />
                {touched.phone && errors.phone && submitCount > 0 && (
                  <div className="text-red-500">{errors.phone}</div>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="comment"
                  className="block font-semibold text-gray-800 dark:text-blue-200"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <Field
                  as={Textarea}
                  name="comment"
                  placeholder="I would like..."
                  className={`${
                    touched.comment &&
                    errors.comment &&
                    submitCount > 0 &&
                    "border-red-500"
                  }`}
                />
                {touched.comment && errors.comment && submitCount > 0 && (
                  <div className="text-red-500">{errors.comment}</div>
                )}
              </div>
              <div className="mb-4">
                <Button type="submit" disabled={isSubmitting}>
                  <span className="pr-1 -ml-1">
                    {isSubmitting ? (
                      <FaSync className="animate-spin" />
                    ) : (
                      <FaPaperPlane />
                    )}
                  </span>
                  <span>{isSubmitting ? "Submitting..." : "Submit"}</span>
                </Button>
              </div>
            </Form>
          </div>
        )
      }
    </Formik>
  );

  async function handleSubmit(values) {
    let data = { ...values, website: "", business: "", origin: 2 };

    await new Promise((r) => {
      setTimeout(() => {
        console.log({ data, r });
        setSubmitted(true);
      }, 2000);
    });

    // try {
    //   await fetch(
    //     "https://cms.bdkinc.com/_/items/contact_requests",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(data),
    //     }
    //   );
    // } catch (e) {
    //   throw Error(e);
    // }
  }
};

export default ContactForm;
