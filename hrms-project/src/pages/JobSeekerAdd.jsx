import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import JobSeekerService from '../services/jobSeekerService';
import { useNavigate } from 'react-router-dom';
import { Button,  Form, } from 'semantic-ui-react';

export default function JobSeekerAdd() {
    const navigate = useNavigate()
    const schema = Yup.object({
        birthyear: Yup.number().required("Bu alanın doldurulması zorunlu"),
        eposta: Yup.string().required("Bu alanın doldurulması zorunlu"),
        name: Yup.string().required("Bu alanın doldurulması zorunlu"),
        sifre: Yup.string().required("Bu alanın doldurulması zorunlu"),
        surname: Yup.string().required("Bu alanın doldurulması zorunlu"),
        tc_no: Yup.string().required("Bu alanın doldurulması zorunlu")

    })
    let jobSeekerService = new JobSeekerService()




    const formik = useFormik({
        initialValues: {
            birthyear: "",
            eposta: "",
            name: "",
            sifre: "",
            surname: "",
            tc_no: ""
        },
        validationSchema: schema,
        onSubmit: (values) => {

            //console.log(values)

            jobSeekerService.add(values)
            navigate("/")
        }


    })


    return (
        <div>
            <h2>Bireysel Üye Kayıt Formu</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Field>
                    <label>Ad </label>
                    <input
                        placeholder='Adınız'
                        value={formik.values.name}
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Soyad </label>
                    <input
                        placeholder='Soyadınız'
                        value={formik.values.surname}
                        name="surname"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Form.Field>
                    <label>TC NO </label>
                    <input
                        placeholder='TC NO giriniz'
                        value={formik.values.tc_no}
                        name="tc_no"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Doğum Yılı </label>
                    <input
                        placeholder='Doğum yılınızı giriniz'
                        value={formik.values.birthyear}
                        name="birthyear"
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
