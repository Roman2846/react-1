import { Fragment } from "react";

import Heading from "../heading";

import Box from "../box";

import "./index.css";

export default function RoomList({ comment }) {
  return (
    <div className="reviews__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="reviews__list">
        {comment.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="reviews">
      <div className="reviews__top">
        <span className="reviews__name">{guestName}</span>
        <span className="rating">Рейтинг: {rating}</span>
      </div>
      <span className="reviews__info">{review}</span>
    </Box>
  );
}
