import{ContactItem} from '../newContact/ContactItem'

export const ContactList = ({ actual, onDelete }) => {
    return (
        <ol>
            {actual.map(contact => (
                <li 
                  key={contact.id}>
                    <ContactItem item={contact} onDelete={onDelete}/>
                </li >
            ))}
        </ol>
    );
};