import { Formik, Form, Field } from 'formik';

function MessageForm({ initialValues, onSubmit }) {
    // const addMessage = (values, formikBag) => {
    //     ws.createMessage(values);
    //     formikBag.resetForm();
    // };
    // const deleteMessage = (id) => {
    //     ws.removeMessage(id)
    //     console.log(id);
    // }

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {formikProps => (
                <Form>
                    <Field name='body'></Field>
                    <button type='submit'>Send</button>
                </Form>
                )}
            </Formik>
        </div>
    )
}

export default MessageForm