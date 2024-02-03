import MusicIframe from "../../Atoms/MusicIframe";
import musicsData from "../../../data/musics.json";

export default function MusicsContainer() {
  return (
    <div className="musics-container">
      {musicsData.map((music) => (
        <MusicIframe
          key={music.id}
          MusicId={music.MusicId}
          style={{ marginTop: "30px" }}
        />
      ))}
    </div>
  );
}
