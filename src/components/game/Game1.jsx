import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Game1() {
  const randomNumberInRange = () => {
    return Math.floor(Math.random() * (40 - 31 + 1)) + 31;
  };

  const [mulaiGame, setMulaiGame] = useState(false);
  const [inputan, setInputan] = useState(false);
  const [realNumber, setRealNumber] = useState(randomNumberInRange());
  const [tebakan, setTebakan] = useState("");
  const [percobaan, setPercobaan] = useState(0);
  const [showRealNumber, setShowRealNumber] = useState(false);

  const notify = (message, type) => {
    toast[type](message, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
    });
  };

  const toggleRealNumberVisibility = () => {
    setShowRealNumber(!showRealNumber);
  };

  const mulaiTebakan = () => {
    const tebakanAngka = parseInt(tebakan, 10);

    if (tebakan.trim() === "") {
      notify("Inputan Tidak Boleh Kosong", "error");
    } else if (tebakanAngka < 31 || tebakanAngka > 40) {
      notify("Nilai harus antara 31 dan 40", "error");
      setPercobaan((prevPercobaan) => prevPercobaan + 1);
    } else if (tebakanAngka === realNumber) {
      notify("Selamat!! Anda Menang", "success");
      setMulaiGame(false);
    } else if (percobaan === 5) {
      notify("Game Over. Anda belum berhasil menebak.", "error");
      setMulaiGame(false);
    } else {
      setPercobaan((prevPercobaan) => prevPercobaan + 1);
    }
  };

  const resetGameHandler = () => {
    setMulaiGame(true);
    setInputan(true);
    setRealNumber(randomNumberInRange());
    setTebakan("");
    setPercobaan(0);
  };

  const renderButton = () => {
    if (percobaan === 5) {
      return (
        <button className="btn btn-danger mt-4" onClick={resetGameHandler}>
          Reset
        </button>
      );
    } else {
      return (
        <button className="btn btn-primary mt-4" onClick={mulaiTebakan}>
          Tebak Angka
        </button>
      );
    }
  };

  return (
    <div className="p-5">
      <h1 className="mb-2">Number Guessing Game</h1>

      <div className="d-flex justify-content-start align-items-center mb-3">
        <div className="col-md-6 d-block text-start">
          <p>1. Each player gets 5 chances to guess</p>
          <p>2. Number range is between 31 - 40</p>
          <p>3. You can reset the number after 5 wrong answers</p>
        </div>
      </div>

      <div className="d-flex justify-content-start mb-3">
        <div className="col-md-6 d-block text-start">
          {inputan ? (
            <>
              <label htmlFor="inputTebakan">Input Angka:</label>
              <div className="input-group">
                <input
                  type="number"
                  id="inputTebakan"
                  className="form-control"
                  placeholder="Input Angka 31-40"
                  onChange={(event) => setTebakan(event.target.value)}
                  value={tebakan}
                />
                <button
                  className={`btn btn-outline-primary ${
                    showRealNumber ? "bg-primary text-white me-2" : ""
                  }`}
                  type="button"
                  onClick={toggleRealNumberVisibility}
                >
                  {showRealNumber ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {showRealNumber && <p>Nilai Asli Adalah: {realNumber}</p>}
              <p>Jumlah Tebakan: {percobaan}</p>
            </>
          ) : (
            <p>Silahkan mulai permainan</p>
          )}
        </div>
      </div>

      <div className="col-md-6 d-block text-start">
        {mulaiGame ? renderButton() : (
          <button className="btn btn-success mt-4" onClick={resetGameHandler}>
            Mulai Permainan
          </button>
        )}
      </div>
    </div>
  );
}

export default Game1;
