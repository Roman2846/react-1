import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import wifi from "./wifi.svg";
import parking from "./parking.svg";
import pets from "./pets.svg";
import airport from "./airport.svg";
import security from "./security.svg";
import room from "./room.svg";
import child from "./child.svg";

export default function Amenities({
  hasPool,
  hasGym,
  hasFree,
  hasFreeWiFi,
  hasParking,
  hasPets,
  hasAirport,
  hasConcierge,
  hasRoom,
  hasChild,
}) {
  return (
    <Box shadow className="amenities">
      <Heading border>Зручності</Heading>

      <ListItem imageSrc={pool}>
        <span className="amenities__info">{hasPool} Басейн</span>
      </ListItem>

      <ListItem imageSrc={gym}>
        <span className="amenities__info">{hasGym} Спортивний зал</span>
      </ListItem>

      <ListItem imageSrc={breakfast}>
        <span className="amenities__info">{hasFree} Безкоштовний сніданок</span>
      </ListItem>

      <ListItem imageSrc={wifi}>
        <span className="amenities__info">
          {hasFreeWiFi} Безкоштовний Wi-Fi
        </span>
      </ListItem>

      <ListItem imageSrc={parking}>
        <span className="amenities__info">
          {hasParking} Безкоштовний вуличний паркінг
        </span>
      </ListItem>

      <ListItem imageSrc={pets}>
        <span className="amenities__info">
          {hasPets} Дозволено розміщення з домашніми тваринами
        </span>
      </ListItem>

      <ListItem imageSrc={airport}>
        <span className="amenities__info">
          {hasAirport} Трансфер до/з аеропорту
        </span>
      </ListItem>

      <ListItem imageSrc={security}>
        <span className="amenities__info">{hasConcierge} Консьєрж-сервіс</span>
      </ListItem>

      <ListItem imageSrc={room}>
        <span className="amenities__info">
          {hasRoom} Обслуговування номерів
        </span>
      </ListItem>

      <ListItem imageSrc={child}>
        <span className="amenities__info">{hasChild} Підходить для дітей</span>
      </ListItem>
    </Box>
  );
}
