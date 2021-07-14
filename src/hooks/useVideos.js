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
      for (x in response.data.CATALOG.LEGO){
        if(!response.data.CATALOG.LEGO[x].NUMBER.toLowerCase().includes(term.toLowerCase())){
          // console.log(response.data.CATALOG.LEGO[x]);
          delete response.data.CATALOG.LEGO[x];
        }
      }
    }
    if(searchOption === "LEVEL" ){
      for (x in response.data.CATALOG.LEGO){
        if(!response.data.CATALOG.LEGO[x].THEME.toLowerCase().includes(term.toLowerCase())){
          // console.log(response.data.CATALOG.LEGO[x]);
          delete response.data.CATALOG.LEGO[x];
        }
      }
    }
    // console.log(response.data.intolerances);
    setVideos(response.data.intolerances);

  }; // end of search

  return [videos, search];
};

export default useVideos;
