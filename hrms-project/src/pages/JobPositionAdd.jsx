import React from 'react'
import { useFormik } from 'formik'
import JobPositionService from '../services/jobPositionService'
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { Button,  Form, } from 'semantic-ui-react';


export default function JobPositionAdd() {
    const navigate = useNavigate()

    const schema = Yup.object({
        positionName: Yup.string().required("Bu alanın doldurulması zorunlu"),
    })

    let jobPositionService=new JobPositionService()


    const formik = useFormik({
        initialValues: {
            positionName: "",
            userId: 8
           
        },
        validationSchema: schema,
        onSubmit: (values) => {

            //console.log(values)

            jobPositionService.add(values)
            navigate("/")
        }


    })
  

  return (
    <div>
        <h2>Genel İş Pozisyonu Ekleme Paneli</h2>
        <Form onSubmit={formik.handleSubmit}>
        <Form.Field>
                    <label>Pozisyon Adını Giriniz</label>
                    <input
                        placeholder='Pozisyon Adını Giriniz'
                        value={formik.values.positionName}
                        name="positionName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Button color='green' type="submit">Ekle</Button>
        </Form>

    </div>
  )
}
