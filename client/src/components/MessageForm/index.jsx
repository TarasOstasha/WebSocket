import { Formik, Form, Field } from 'formik';
import { ws } from '../../api';

function MessageForm({ initialValues }) {
    const addMessage = (values, formikBag) => {
        ws.createMessage(values);
        formikBag.resetForm();
    };
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={addMessage}>
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