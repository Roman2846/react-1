import "./index.css";
import { Fragment } from "react";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Attractions({ list }) {
  return (
    <Box shadow className="attractions__block">
      <Heading border>Пам'ятки поблизу</Heading>

      <div className="attractions">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <ListItem>
      <a href={link} className="attractions__info">
        {name}
      </a>
    </ListItem>
  );
}
