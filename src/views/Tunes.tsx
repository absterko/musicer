import React, { useState, ChangeEvent, FormEvent } from "react";
import TunesList from "../components/tunes/TunesList";
import TunesSearchForm from "../components/tunes/TunesSearchForm";
import axios from "axios";
import { Song } from "../types";

type Props = {
  // trackId: number;
  // artistName: string;
  // previewUrl: string;
  // artworkUrl100?: string;
  // trackName: string;
  // collectionName: string;
  // kind?: string;
};

const handleSearch = (query: string) => {
  axios
    .get(
      `https://itunes.apple.com/search?term=${encodeURI(
        query
      )}&entity=musicTrack&limit=5`
    )
    .then((response) => console.log(response));
};

const extractData = ({
  trackId: id,
  artistName: artist,
  previewUrl: audioFile,
  artworkUrl100: artwork,
  trackName: title,
  collectionName: album,
}: any) => {
  return { id, artist, audioFile, artwork, title, album } as Song;
};

const Tunes = (props: Props) => {
  return (
    <>
      <h1>Tunes</h1>
      <TunesSearchForm onSearch={handleSearch} />
      <TunesList />
    </>
  );
};

export default Tunes;
