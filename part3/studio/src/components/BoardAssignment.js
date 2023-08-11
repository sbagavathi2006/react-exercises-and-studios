import { useState } from "react";

export default function BoardAssignment() {
  const [boardName, setName] = useState("no boards yet!");
  const boards = [
    { label: 1, value: "Easy Diners" },
    { label: 2, value: "Pasta Meals" },
    { label: 3, value: "Fall Favorites" },
  ];

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
        <option value="">Select a board</option>

        {boards.map((board) => (
          <option key={board.label} value={board.value}>
            {board.value}
          </option>
        ))}
      </select>

      <p>Saved to {boardName}!</p>
    </div>
  );
}