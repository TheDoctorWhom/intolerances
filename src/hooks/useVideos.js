import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect (() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

const search = async (term, searchOption) => {
  const response = await youtube.get('',{
    }); // end of response
      // const reducedResponse = {};

    let x;

    if(searchOption === "NAME"){
      for (x in response.data.intolerances){
        if(!response.data.intolerances[x].NAME.toLowerCase().includes(term.toLowerCase())){
          // console.log(response.data.CATALOG.LEGO[x]);
          delete response.data.intolerances[x];
        }
      }
    }
    if(searchOption === "TYPE" ){
      for (x in response.data.intolerances){
        if(!response.data.intolerances[x].TYPE.toLowerCase().includes(term.toLowerCase())){
          // console.log(response.data.CATALOG.LEGO[x]);
          delete response.data.intolerances[x];
        }
      }
    }
    if(searchOption === "LEVEL" ){
      for (x in response.data.intolerances){
        let shouldBeDeleted = false;
        if (!isNaN(Number(term))){ // checks if the term is a Number
        if(response.data.intolerances[x].LEVEL !== Number(term)){
          // console.log(response.data.CATALOG.LEGO[x]);
          shouldBeDeleted=true;
         }
       }
        if(isNaN(Number(term))){ // checks if the term is a string of a number

          let termNumber = 0;

          //Converts String to a Number 1 - 3
          if(term.toLowerCase().includes('one')){
            termNumber = 1;
          }else if(term.toLowerCase().includes('two')){
            termNumber = 2;
          }else if(term.toLowerCase().includes('three')){
            termNumber = 3;
          }
          if(response.data.intolerances[x].LEVEL !== termNumber){
            shouldBeDeleted=true;
          }
        }

          if(shouldBeDeleted){
           delete response.data.intolerances[x];
          }
      }
    }
    // console.log(response.data.intolerances);
    setVideos(response.data.intolerances);

  }; // end of search

  return [videos, search];
};

export default useVideos;
