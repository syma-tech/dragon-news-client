import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, author, details, image_url, title, rating, total_view } = news;
  // console.log(news);
  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            src={author?.img}
            style={{ height: "60px" }}
            roundedCircle
            className="me-2"
          />
          <div>
            <p className="mb-0">{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div className="">
          <FaRegBookmark className="me-2" />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 200 ? (
            <>
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read More</Link>{" "}
            </>
          ) : (
            details
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div className="">
          <FaStar className="text-warning" />
          <span>{rating?.number}</span>
        </div>
        <div className="">
          <FaEye className="me-2" />
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
