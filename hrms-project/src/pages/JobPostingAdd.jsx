import React from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik'
import { Button, Dropdown, Form, Label } from 'semantic-ui-react';
import JobPostingService from '../services/jobPostingService';
import { useEffect } from 'react';
import JobPositionService from '../services/jobPositionService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function JobPostingAdd() {
    const navigate = useNavigate()

    let [jobPositions,setJobPositions] = useState([]);
    useEffect(() => {
        let jobPositionServe = new JobPositionService();
        jobPositionServe.getJobPositions().then((res) => {
            setJobPositions(res.data);
        })
    },[])
      let jobPostingService = new JobPostingService()

    const schema = Yup.object({
        companyName: Yup.string().required("Şirket adı zorunlu"),
        job_Description: Yup.string().required("İş Tanımı zorunlu"),
        lastapplicationdeadline: Yup.date().required("Bu alanın doldurulması zorunlu"),
        max_salary: Yup.number("Bu alan asdasd").required("Bu alanın doldurulması zorunlu"),
        min_salary: Yup.number().required("Bu alanın doldurulması zorunlu"),
        numberOfOpenPositions: Yup.number()
    })

    const workPlaceOptions = [
        { key: 1, text: "Uzaktan", value: "uzaktan" },
        { key: 2, text: "Yüzyüze", value: "yüzyüze" }
    ]

    const jobPositionOptions = jobPositions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.positionName,
        value: jobPosition.id,
      }));
    const jobTimeOptions = [
        { key: 1, text: "Yarı Zamanlı", value: "yarı zamanlı" },
        { key: 2, text: "Tam Zamanlı", value: "tam zamanlı" },
        { key: 3, text: "Dönemsel Zamanlı", value: "dönemsel zamanlı" }
    ]  

    const handleChangeJobType = (data) => {
        formik.values.jobType = data.value;
    }
   
    const handleChangeJobPosition = (data) => {
        formik.values.jobposition.id = data.value;
    }

    const handleChangeJobTimeType = (data) => {
        formik.values.jobTimeType = data.value;
    }

    const formik = useFormik({
        initialValues: {
            city: "",
            //companyName: "",
            job_Description: "",
            jobposition:{id:""} ,
            lastapplicationdeadline: "",
            max_salary: "",
            min_salary: "",
            numberOfOpenPositions: "",
            jobType: "",
            jobTimeType:""
        },
        validationSchema: schema,
        onSubmit: (values) => {
            
           //console.log(values)
            
            jobPostingService.add(values)
            navigate("/")
        }
    })

    return (
        <div>
            <h2>İş İlanı Ekleme Formu</h2>
            <Form onSubmit={formik.handleSubmit}>

                <Form.Field>
                    <label>Şehir</label>
                    <input 
                        placeholder='Şehir'
                        value={formik.values.city}
                        name="city"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                {/* <Form.Field>
                    <label>Şirket Adı</label>
                    <input 
                        placeholder='Şirket Adı'
                        value={formik.values.companyName}
                        name="companyName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.companyName && formik.touched.companyName && <Label pointing basic color="red" content={formik.errors.companyName}>{formik.errors.companyName}</Label>}
                </Form.Field> */}
                <Form.Field>
                    <label>Çalışma Zaman Tipi</label>
                    <Dropdown
                        clearable
                        item
                        placeholder="Çalışma Zaman Tipi"
                        search
                        selection
                        onChange={(event, data) =>
                            handleChangeJobTimeType(data)
                        }
                        id="jobTimeType"
                        name="jobTimeType"
                        value={formik.values.jobTimeType}
                        onBlur={formik.handleBlur("jobTimeType")}
                        options={jobTimeOptions}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Çalışma Tipi</label>
                    <Dropdown
                        clearable
                        item
                        placeholder="Çalışma Tipi"
                        search
                        selection
                        onChange={(event, data) =>
                            handleChangeJobType(data)
                        }
                        id="jobType"
                        name="jobType"
                        value={formik.values.jobType}
                        onBlur={formik.handleBlur("jobType")}
                        options={workPlaceOptions}
                    />
                </Form.Field>
                 <Form.Field>
                    <label>İş Pozisyonu</label>
                    <Dropdown
                        clearable
                        item
                        placeholder="İş pozisyonu"
                        search
                        selection
                        onChange={(event, data) =>
                            handleChangeJobPosition(data)
                        }
                        id="jobposition"
                        name="jobposition"
                        value={formik.values.jobposition.id}
                        onBlur={formik.handleBlur("jobposition")}
                        options={jobPositionOptions}
                    />
                </Form.Field> 
                <Form.Field>
                    <label>İş Tanımı</label>
                    <input 
                        placeholder='İş Tanımı'
                        value={formik.values.job_Description}
                        name="job_Description"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Son Başvuru Tarihi</label>
                    <input 
                        placeholder='Son Başvuru Tarihi'
                        value={formik.values.lastapplicationdeadline}
                        name="lastapplicationdeadline"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Maksimum Maaş</label>
                    <input 
                        placeholder='Maksimum Maaş'
                        value={formik.values.max_salary}
                        name="max_salary"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Minimum Maaş</label>
                    <input 
                        placeholder='Minimum Maaş'
                        value={formik.values.min_salary}
                        name="min_salary"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Açık Pozisyon Adedi</label>
                    <input 
                        placeholder='Açık Pozisyon Adedi'
                        value={formik.values.numberOfOpenPositions}
                        name="numberOfOpenPositions"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Button color='green' type="submit">Ekle</Button>
            </Form>

        </div>
    )
}
