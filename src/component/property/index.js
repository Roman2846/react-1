import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import people from "./people.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bathroom from "./bathroom.svg";

export default function Property({ guests, bedrooms, beds, baths }) {
  return (
    <Box shadow className="property">
      <Heading border>Деталі властивості:</Heading>

      <ListItem imageSrc={people}>
        <span className="property__info">{guests} гості</span>
      </ListItem>

      <ListItem imageSrc={bedroom}>
        <span className="property__info">{bedrooms} спальня</span>
      </ListItem>

      <ListItem imageSrc={bed}>
        <span className="property__info">{beds} ліжко</span>
      </ListItem>

      <ListItem imageSrc={bathroom}>
        <span className="property__info">{baths} ванна кімната</span>
      </ListItem>
    </Box>
  );
}
