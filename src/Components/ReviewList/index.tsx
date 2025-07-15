interface Props {
  reviews: string[];
}

const ReviewList = ({ reviews }: Props) => {
  if (reviews.length === 0) return <p>아직 작성된 리뷰가 없습니다.</p>;

  return (
    <ul>
      {reviews.map((review, i) => (
        <li
          key={i}
          style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}
        >
          {review}
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
