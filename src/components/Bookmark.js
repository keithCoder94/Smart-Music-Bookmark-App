import React, { useState } from 'react';

function Bookmark(props) {
  const [album, setAlbum] = useState('');
  const handleChangeAlbum = e => {setAlbum(e.target.value); };

  const [artist, setArtist] = useState('');
  const handleChangeArtist = e => { setArtist(e.target.value); };

  const [track, setTrack] = useState('');
  const handleChangeTrack = e => { setTrack(e.target.value); };

  const [genre, setGenre] = useState('');
  const handleChangeGenre = e => { setGenre(e.target.value); };

  const [year, setYear] = useState('');
  const handleChangeYear = e => { setYear(e.target.value); };
  
  const [link, setLink] = useState('');
  const handleChangeLink = e => { setLink(e.target.value); };

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(album,artist,track,genre,year,link); 
  
  };

  


  return (
    <div className=" container form-group mt-6">
      <form onSubmit={handleSubmit} id="contact-form">
      <h2 className="formTitle">Smart Music Bookmark app</h2>
      <h5 className="formTitle">add your Favorite Track</h5>

        <input
          type="text"
          placeholder="Album"
          className="form-control w-75"
          onChange={handleChangeAlbum}
        />
        <input
          
          type="text"
          placeholder="Artist"
          className="form-control w-75"
          onChange={handleChangeArtist}
        />
        <input
          type="text"
          placeholder="Track"
          className="form-control w-75"
          onChange={handleChangeTrack}
        />
        <input
          type="text"
          placeholder="Genre"
          className="form-control w-75"
          onChange={handleChangeGenre}
        />
        <input
          type="text"
          placeholder="Year"
          className="form-control w-75"
          onChange={handleChangeYear}
        />
        <input
          type="text"
          placeholder="Link"
          className="form-control w-75"
          onChange={handleChangeLink}
        />
        <div className="leftContent">
          <form> 
            
            <div>
             
            </div>
          
          </form>
        <input type="submit" value="Add" className="mt-3" />{' '}
        <input type="submit" value="Reset" className="mt-3" />{' '}
        </div>
      </form>
    </div>
  );
}

export default Bookmark;
