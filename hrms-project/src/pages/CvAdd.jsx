import React from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik'
import { Button, Dropdown, Form, Label } from 'semantic-ui-react';
import { Formik, Field, ErrorMessage, FieldArray } from 'formik';
import { Header, Icon, Modal } from 'semantic-ui-react'


export default function CvAdd() {

    const schema = Yup.object({
        // schoolName: Yup.string().required("okul adı zorunlu"),
        // coverLetter: Yup.string().required("Ön yazı girilmesi şiddetle tavsiye edilir")
    })
    const graduationControl = [
        { key: 1, text: "Mezun", value: true },
        { key: 2, text: "Devam Ediyor", value: false }
    ]
    const handleChangeGraduation = (data) => {
        formik.values.graduation = data.value;
    }
    function cvLanguageLength() {
        return formik.values.cvLanguage.length
    }

    const formik = useFormik({
        initialValues: {
            coverLetter: "",
            cvUser: { id: "" },
            githubAccount: "",
            graduation: "",
            graduationYear: "",
            linkedinAccount: "",
            programmingLanguageAndTechnology: "",
            schoolName: "",
            cvLanguage: [{ language: '', level: '' }],
            cvJobexperience: [{ _Continue: '', companyName: '', finish_time: '', position: '', start_time: '' }]

        },
        validationSchema: schema,
        onSubmit: (values) => {

            console.log(values)

        }




    })

    return (
        <div>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Field>
                    <label>Ön Yazı</label>
                    <input
                        placeholder='Ön Yazı'
                        value={formik.values.coverLetter}
                        name="coverLetter"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Github Hesabınız</label>
                    <input
                        placeholder='Github Hesabınız'
                        value={formik.values.githubAccount}
                        name="githubAccount"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Mezun Durumu</label>
                    <Dropdown
                        clearable
                        item
                        placeholder="Mezun Durumu"
                        search
                        selection
                        onChange={(event, data) =>
                            handleChangeGraduation(data)
                        }
                        id="graduation"
                        name="graduation"
                        value={formik.values.graduation}
                        onBlur={formik.handleBlur("graduation")}
                        options={graduationControl}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Mezuniyet Yılı</label>
                    <input
                        placeholder='mezun değilseniz boş bırakınız'
                        value={formik.values.graduationYear}
                        name="graduationYear"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Linkedin Hesabınız</label>
                    <input
                        placeholder='Linkedin hesabınız'
                        value={formik.values.linkedinAccount}
                        name="linkedinAccount"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Bildiğiniz teknolojiler</label>
                    <input
                        placeholder='Belirtmek istediğiniz programlama dili ve teknolojilerini belirtiniz'
                        value={formik.values.programmingLanguageAndTechnology}
                        name="programmingLanguageAndTechnology"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Okulunuzun Adı</label>
                    <input
                        placeholder='Okulunuzun adını giriniz'
                        value={formik.values.schoolName}
                        name="schoolName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Field>

               
                <Form.Field>

                    <label>Bildiğiniz Yabancı Dil veya Diller</label>
                    
                    

                </Form.Field>



                <Button color='green' type="submit">Cvyi Ekle</Button>

            </Form>

        </div>
    )
}
