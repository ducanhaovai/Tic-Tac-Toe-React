import { useState, useEffect } from "react";

export default function Player({ initiaName, symbol, isActive, winnerName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initiaName);

  useEffect(() => {
    // Khi winnerName thay đổi, kiểm tra xem playerName có phải là người thắng không
    if (winnerName === playerName) {
      setIsEditing(false); // Khi có người thắng, tự động đóng chế độ sửa đổi tên
    }
  }, [winnerName, playerName]);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
