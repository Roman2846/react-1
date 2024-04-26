import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Properties({
  house,
  cancellation,
  transport,
  host,
  offers,
  instructions,
}) {
  return (
    <Box shadow className="properties">
      <Heading border>Додаткові властивості</Heading>

      <ListItem title="Правила дому">
        <span className="properties__info">{house}</span>
      </ListItem>

      <ListItem title="Політика скасування">
        <span className="properties__info">{cancellation}</span>
      </ListItem>

      <ListItem title="Місцевий транспорт">
        <span className="properties__info">{transport}</span>
      </ListItem>

      <ListItem title="Мови хоста">
        <span className="properties__info">{host}</span>
      </ListItem>

      <ListItem title="Спеціальні пропозиції:">
        <span className="properties__info">{offers}</span>
      </ListItem>

      <ListItem title="Інструкції щодо реєстрації">
        <span className="properties__info">{instructions}</span>
      </ListItem>
    </Box>
  );
}
