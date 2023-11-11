
import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    ochre: {
      main: '#E3D026',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
    name: 'salmon',
  },
});

const validationSchema = yup.object({
    name: yup
        .string(('Enter your name'))
        .min(2, 'Name is too short ')
        .required('Name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    message: yup
      .string('Enter your message here')
      .min(8, 'Message is too short')
      .required('Message is required'),
  });

const ContactForm = () => {
    const [mailSent, setMailSent] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
          axios({
            method: 'post',
            url: '/api/sendEmail.php',
            headers: { 'Content-Type' : 'application/json' },
            data: values
          }).then(result => {
            console.log(result)
            setMailSent(true)
          })
          .catch(error => {
            console.log(error)
            setError(error.message)
          })
          resetForm()
          setMailSent(true)
        },
      });

    return (
        <div className="contact-form-container">
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    type="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    sx={{
                        background: "rgba(255,255,255,.1)",
                        margin: '0 0 10px',
                        borderRadius: '4px',
                    }}
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={{
                        background: "rgba(255,255,255,.1)",
                        margin: '0 0 10px',
                        borderRadius: '4px',
                    }}
                />
                <TextField
                    fullWidth
                    multiline
                    rows={7}
                    id="message"
                    name="message"
                    label="Message"
                    type="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                    sx={{
                        background: "rgba(255,255,255,.1)",
                        margin: '0 0 10px',
                        borderRadius: '4px',
                    }}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
            <div>
            {mailSent &&
                <div className="thank-you"><p>Thank you for contacting us.</p></div>
            }
            </div>
        </div>
    )
}

export default ContactForm