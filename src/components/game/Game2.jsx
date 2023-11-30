import React, { useState } from "react";

function Game2() {
  const [todo, setTodo] = useState("");
  const [catatan, setCatatan] = useState("");
  const [priority, setPriority] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [priorityList, setList] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newData = {
      todo: todo,
      catatan: catatan,
      priority: priority,
      tanggal: tanggal,
    };

    setList((prev) => [...prev, newData]);

    setTodo("");
    setCatatan("");
    setPriority("");
    setTanggal("");
  };

  return (
    <div className="p-5" style={{ textAlign: "center" }}>
      <h1>Simple To-Do List</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-md-6 text-start mb-3">
            <label htmlFor="To-Do">Apa Yang Ingin Kamu Kerjakan?</label>
            <input
              type="text"
              className="form-control"
              id="To-Do"
              placeholder="Nama To-Do List"
              required
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>

          <div className="col-md-6 text-start mb-3">
            <label htmlFor="cek">Pilih Prioritas</label>
            <select
              id="priority"
              className="form-control"
              required
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">Pilih Priority</option>
              <option value="Urgent">Urgent</option>
              <option value="Normal">Normal</option>
              <option value="Biasa Aja">Biasa Aja</option>
              <option value="Tidak Penting">Tidak Penting</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 text-start mb-3">
            <label htmlFor="To-Do">Catatan</label>
            <textarea
              className="form-control"
              id="To-Do"
              placeholder="Catatan"
              required
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
            />
          </div>

          <div className="col-md-6 text-start mb-3">
            <label htmlFor="tanggal">Tanggal To-DO List</label>
            <input
              type="date"
              className="form-control"
              id="tanggal"
              required
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12 ms-0 text-start mt-3">
          <button className="btn btn-primary" type="submit">
            Tambah To-Do List
          </button>
        </div>
      </form>

      <div className="Game 2">
        {priorityList.map((item, list) => (
          <div key={list} className="card mt-4" style={{ width: "250px" }}>
            <div
              className={
                item.priority === "Urgent"
                  ? "card-header bg-danger text-white"
                  : item.priority === "Normal"
                  ? "card-header bg-success text-white"
                  : item.priority === "Biasa Aja"
                  ? "card-header bg-primary text-white"
                  : item.priority === "Tidak Penting"
                  ? "card-header bg-dark text-white"
                  : ""
              }
            >
              {item.priority}
            </div>
            <div className="card-body" style={{ marginTop: '10px', marginBottom: '10px' }}>
              <h5 className="card-title">Deadline: {item.tanggal}</h5>
              <p className="card-title">{item.todo}</p>
              <p className="card-text">{item.catatan}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game2;
