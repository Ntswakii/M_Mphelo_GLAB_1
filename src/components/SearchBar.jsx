import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: 200,
        height: 30,
        border: '1px solid #ccc',
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 20,
        marginRight: 10,
      }}

      
    />
    

  );

  
};

export default SearchBar;
