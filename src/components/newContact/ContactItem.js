export const ContactItem = ({ item, onDelete }) => {
    return (
        <>
            <p>{item.name}: {item.number}  <button onClick={() => onDelete(item.id)}>Delete</button></p>
            
        </>
    );
};