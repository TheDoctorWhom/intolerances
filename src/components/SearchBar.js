import React, { useState }from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('TITLE');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term, selectedOption);
  };

  // const onValueChange = ( option ) =>{
  //   setSelectedOption(option);
  // };


  return (
      <div className="search-bar ui segment">
        <form onSubmit={onSubmit} className="ui form">
          <div className="field">
            <label>Search for Intolerances</label>
            <input
              type="text"
              value={term}
              onChange={(event) => setTerm(event.target.value)}
            />
          </div>
          <div className="radiobuttongroup ui grid"> {/*start of radio buttons Option*/}
            <div className="radio three wide column">
            <label>
              <input
                type="radio"
                value="NAME"
                checked={selectedOption === "NAME"}
                onChange={(event) => setSelectedOption(event.target.value)}
              />
              &nbsp;Name
            </label>
          </div>
          <div className="radio three wide column">
            <label>
              <input
                type="radio"
                value="TYPE"
                checked={selectedOption === "TYPE"}
                onChange={(event) => setSelectedOption(event.target.value)}
              />
              &nbsp;Type
            </label>
          </div>
          <div className="radio three wide column">
            <label>
              <input
                type="radio"
                value="LEVEL"
                checked={selectedOption === "LEVEL"}
                onChange={(event) => setSelectedOption(event.target.value)}
              />
              &nbsp;Level
            </label>
          </div>
        </div> {/*end of options*/}
        <button className="btn btn-default column" type="submit">
          Submit
        </button>
        </form>
      </div>
    );

};



export default SearchBar;
