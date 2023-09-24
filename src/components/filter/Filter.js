
export const Filter = ({ onFilter, initValue }) => {
    return (
        
            <>
                <h2>Contacts</h2>
            
                <label htmlFor="filter">Filter</label>
                <input 
                id="filter"
                name="filter" 
                placeholder="Enter name" 
                value={initValue}
                onChange={ (searchValue) => {onFilter(searchValue)}}/>
           
        </>
    )
};