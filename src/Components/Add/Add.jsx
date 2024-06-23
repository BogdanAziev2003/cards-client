import React, { useState } from 'react';
import './Add.css';
import axios from 'axios';

const Add = () => {
  const [formData, setFormData] = useState({
    number: '',
    owner: '',
    broughter: '',
    phone: '',
    info: ''  // Добавлено поле для текстовой области
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращение перезагрузки страницы
    axios.post('http://127.0.0.1:5000/cards/create', formData)
      .then(response => {
        setFormData({
          number: '',
          owner: '',
          broughter: '',
          phone: '',
          info: ''  // Очистка поля для текстовой области
        });
      })
      .catch(error => {
        console.error('There was an error adding the data!', error);
      });
  };

  return (
    <form className="styled-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="number"
        value={formData.number}
        onChange={handleChange}
        placeholder="Номер карты"
        required
        maxLength={16}
        className="form-input"
      />
      <input
        type="text"
        name="owner"
        value={formData.owner}
        onChange={handleChange}
        placeholder="Владелец карты"
        required
        className="form-input"
      />
      <input
        type="text"
        name="broughter"
        value={formData.broughter}
        onChange={handleChange}
        placeholder="Дроповод"
        required
        className="form-input"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Телефон"
        required
        maxLength={12}
        className="form-input"
      />
      <textarea
        name="info"  // Добавлено имя для текстовой области
        value={formData.info}
        onChange={handleChange}
        rows={12}
        columns={10}
        className="form-textarea"
        placeholder="Введите дополнительную информацию..."
      />
      <button type="submit" className="form-button">Отправить</button>
    </form>
  );
};

export default Add;
