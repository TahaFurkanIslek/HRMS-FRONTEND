import React from 'react'
import EmployerService from '../services/employerService'
import { Button, Form, } from 'semantic-ui-react';
import * as Yup from "yup";
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';

export default function EmployerAdd() {
    const navigate = useNavigate()
    const schema = Yup.object({
        eposta: Yup.string().required("Bu alanın doldurulması zorunlu"),
        companyName: Yup.string().required("Bu alanın doldurulması zorunlu"),
        sifre: Yup.string().required("Bu alanın doldurulması zorunlu"),
        phoneNumber: Yup.string().required("Bu alanın doldurulması zorunlu"),
        websiteName: Yup.string().required("Bu alanın doldurulması zorunlu")
    })
    let employerService = new EmployerService()




    const formik = useFormik({
        initialValues: {
            companyName: "",
            websiteName: "",
            phoneNumber: "",
            eposta: "",
            sifre: ""
        },
        validationSchema: schema,
        onSubmit: (values) => {

            //console.log(values)

            employerService.add(values)
            navigate("/")
        }


    })


    return (
        <div>
            <h2>Kurumsal Üye Kayıt Formu</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Field>
                    <label>Şirket Adı </label>
                    <input
                        placeholder='Şirketinizin adı'
                        value={formik.values.companyName}
                        name="companyName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Web Site Adı </label>
                    <input
                        placeholder='Web sitenizin adı'
                        value={formik.values.websiteName}
                        name="websiteName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Telefon</label>
                    <input
                        placeholder='Telefon numaranız'
                        value={formik.values.phoneNumber}
                        name="phoneNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Form.Field>
                    <label>E-posta </label>
                    <input
                        placeholder='E postanız'
                        value={formik.values.eposta}
                        name="eposta"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Şifre </label>
                    <input
                        placeholder='Şifreniz'
                        value={formik.values.sifre}
                        name="sifre"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Button color='green' type="submit">Ekle</Button>

            </Form>
        </div>
    )
}
