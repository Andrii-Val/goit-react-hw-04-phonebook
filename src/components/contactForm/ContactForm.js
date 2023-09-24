import { Formik, Field, Form } from 'formik';

export const AddContac = ({create}) => {
  return( <div>
     <h1>Contacts</h1>
            <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            
            onSubmit={ (values,{resetForm}) => {
               create(values)
                resetForm();
            }}
            >
            <Form style={{padding : 10 ,
            display: 'flex',
            }}
              >
               
                    <label htmlFor="Name">Name</label>
                    <Field  type="text"
                              name="name"
                              placeholder="Jacob Mercer"
                               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                 required/>
               
                
                    <label htmlFor="Number">Number</label>
                    <Field 
                    id="Number" 
                    name="number" 
                    placeholder="227-91-26" 
                    type="tel" 
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
               
               
                    <button type="submit">Add contact</button>
                
            </Form>
            </Formik>
  </div>
  )   
};