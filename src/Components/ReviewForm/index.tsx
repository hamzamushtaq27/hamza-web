import { useState } from "react";

interface Props {
  onSubmit: (text: string) => void;
}

const ReviewForm = ({ onSubmit }: Props) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onSubmit(text);
    setText("");
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <textarea
        placeholder="리뷰를 작성해주세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button onClick={handleSubmit} style={{ marginTop: "8px" }}>
        등록
      </button>
    </div>
  );
};

export default ReviewForm;
