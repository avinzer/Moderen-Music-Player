/* eslint-disable no-unused-vars */
import { v4 as uuidv4 } from "uuid";
const ip = "moderen-music-player.vercel.app";
const localhost = "localhost:5173";

const local = ip || localhost;

const chillHop = () => {
  return [
    {
      name: "Anandile",
      cover: `http://${local}/Gamer.jpg`,
      artist: "Gamer_Fili, Solo G, & XO",
      audio: `http://${local}/music/Anandile_-_Gamer_Fili,_Solo_G_&_XO.mp3`,
      id: uuidv4(),
      active: true,
    },
    {
      name: "Ayney(ዓይነይ)",
      cover: `http://${local}/Gamer.jpg`,
      artist: "Gamer_Fili, Solo G, Steve Colombo & Reshid Hussen",
      audio: `http://${local}/music/Ayney_[ዓይነይ]_-_Gamer_Fili,_Solo_G,_Steve_Colombo_&_Reshid_Hussen.mp3`,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Enata",
      cover: `http://${local}/Gamer.jpg`,
      artist: "Gamer_Fili, Solo G, & Soliana Zerabruk",
      audio: `http://${local}/music/Enata_-_Gamer_Fili,_Solo_G_&_Soliana_Zerabruk.mp3`,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Expo(OUTRO)",
      cover: `http://${local}/Gamer.jpg`,
      artist: "Gamer_Fili",
      audio: `http://${local}/music/EXPO_(OUTRO)_-_Gamer_Fili.mp3`,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Kemdlayki",
      cover: `http://${local}/Gamer.jpg`,
      artist: "Gamer_Fili & Solo G",
      audio: `http://${local}/music/Kemdlayki_[ከምድላይኪ]_-_Gamer_Fili_&_Solo_G.mp3`,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Kasieta(ካሴታ)",
      cover: `http://${local}/Gamer.jpg`,
      artist: "Gamer_Fili & Solo G",
      audio: `http://${local}/music/KASIETA_[ካሴታ]_-_Gamer_Fili_&_KUSTO.mp3`,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Magota",
      cover: `http://${local}/Gamer.jpg`,
      artist: "Gamer_Fili, XO & Solo G",
      audio: `http://${local}/music/Magota_-_Gamer_Fili,_Solo_G_&_XO.mp3`,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Merawi",
      cover: `http://${local}/Gamer.jpg`,
      artist: "Gamer_Fili, Solo G & Adam TG",
      audio: `http://${local}/music/Merawi_[መርዓዊ]_-_Gamer_Fili,_Solo_G_&_Adam_TG.mp3`,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nameke",
      cover: `http://${local}/Gamer.jpg`,
      artist: "Gamer_Fili, Solo G & Soliana Zerabruk",
      audio: `http://${local}/music/Nameke_-_Gamer_Fili,_Solo_G_&_Soliana_Zerabruk.mp3`,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nay Hlmey Gual",
      cover: `http://${local}/Gamer.jpg`,
      artist: "Gamer_Fili & The IT Neger",
      audio: `http://${local}/music/Nay_Hlmey_Gual_[ናይ_ሕልመይ_ጓል]_-_Gamer_Fili_&_THE_IT_NEGER.mp3`,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nebit Nay Fqrki",
      cover: `http://${local}/Gamer.jpg`,
      artist: "Gamer_Fili, The IT Neger & Kusto",
      audio: `http://${local}/music/Nebit_nay_fqrki_[ነቢት_ናይ_ፍቕርኺ]_-_Gamer_Fili,_THE_IT_NEGER_&_KUSTO.mp3`,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Qanza Lbi",
      cover: `http://${local}/Gamer.jpg`,
      artist: "Gamer_Fili & Alex Tewelde",
      audio: `http://${local}/music/Qanza_lbi_(Bonus_Track)_[ቃንዛ_ልቢ]_Gamer_Fili_&_Alex_Tewelde.mp3`,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Shush",
      cover: `http://${local}/Gamer.jpg`,
      artist: "Gamer_Fili & Sieto",
      audio: `http://${local}/music/Shush_[ሹሽ]_-_Gamer_Fili_&_SIETO.mp3`,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Soliela Sola",
      cover: `http://${local}/Gamer.jpg`,
      artist: "Gamer_Fili & Solo G",
      audio: `http://${local}/music/Soliela_Sola_-_Gamer_Fili,_Solo_G.mp3`,
      id: uuidv4(),
      active: false,
    },
    {
      name: "Wedi Mama",
      cover: `http://${local}/Gamer.jpg`,
      artist: "Gamer_Fili & Sieto",
      audio: `http://${local}/music/Wedi_Mama[ወዲ_ማማ]_-_Gamer_Fili_&_SIETO.mp3`,
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
