import { useEffect, useState } from 'react';
import './All.css';
import axios from 'axios';

function All() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [changeId, setChangesId] = useState(null);
  const [textArea, setTextArea] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setTextArea(value);
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const updateCardInfo = () => {
    axios
      .put(`http://127.0.0.1:5000/cards/changeInfo/${changeId}`, {
        info: textArea,
      })
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (id) => {
    setModal(true);
    setChangesId(id);
  };

  const fetchData = () => {
    axios
      .get('http://127.0.0.1:5000/cards/getAll')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  };

  const hendleStatus = (status) => {
    setModal(false);
    axios
      .put(`http://127.0.0.1:5000/cards/changeStatus/${changeId}`, {
        status: status,
      })
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
  };

  const hendleDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:5000/cards/delete/${id}`)
      .then(() => fetchData())
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };

  function addSpacesEveryFourChars(input) {
    return input.replace(/(.{4})/g, '$1 ');
  }

  const filteredData = data.filter((row) => {
    const searchString = searchText.toLowerCase();
    return (
      row.id.toString().includes(searchString) ||
      row.number.toLowerCase().includes(searchString) ||
      row.owner.toLowerCase().includes(searchString) ||
      row.broughter.toLowerCase().includes(searchString) ||
      row.phone.toLowerCase().includes(searchString) ||
      row.buy_time.toLowerCase().includes(searchString) ||
      row.info.toLowerCase().includes(searchString)
    );
  });

  return (
    <div className="wrapper">
      {modal && (
        <div className="modal">
          <div className="modal__wrapper">
            <div
              className="modal__elem grev"
              onClick={() => hendleStatus('grev')}
            >
              grev
            </div>
            <div
              className="modal__elem work"
              onClick={() => hendleStatus('work')}
            >
              work
            </div>
            <div
              className="modal__elem block"
              onClick={() => hendleStatus('block')}
            >
              block
            </div>
            <div
              className="modal__elem dead"
              onClick={() => hendleStatus('dead')}
            >
              dead
            </div>
          </div>
        </div>
      )}

      {infoModal && (
        <div className="modal">
          <div className="modal__wrapper">
            <div
              className="closeModal"
              onClick={() => {
                setInfoModal(false);
              }}
            >
              X
            </div>
            <textarea
              value={textArea}
              onChange={handleChange}
              rows={10}
              cols={40}
            ></textarea>
            <button
              className="changeInfoButton"
              onClick={() => {
                updateCardInfo();
                setInfoModal(false);
              }}
            >
              Обновить информацию
            </button>
          </div>
        </div>
      )}

      <h1>Всего карт: {filteredData.length}</h1>
      <input
        type="text"
        placeholder="Поиск..."
        value={searchText}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="card__wrapper">
        {filteredData.map((row) => (
          <div key={row.id} className="card">
            <div className="card__header">
              <div className="card__id">
                <span>№ {row.id}</span>
              </div>
              <div className="card_number">
                <span>{addSpacesEveryFourChars(row.number)}</span>
              </div>
            </div>

            <div className="card__inner">
              <div className="card__owner card__elem">
                <span className="card__elem-title">Владелец:</span>
                <span className="card__elem-info">{row.owner}</span>
              </div>
              <div className="card__broughter card__elem">
                <span className="card__elem-title">Дроповод:</span>
                <span className="card__elem-info">{row.broughter}</span>
              </div>
              <div className="card__phone card__elem">
                <span className="card__elem-title">Телефон:</span>
                <span className="card__elem-info">{row.phone}</span>
              </div>
              <div className="card__buy-time card__elem">
                <span className="card__elem-title">Дата:</span>
                <span className="card__elem-info">{row.buy_time}</span>
              </div>
              <div className="card__info-block card__elem">
                <span className="card__elem-title">Доп. инфо:</span>
                <span className="card__elem-info">{row.info}</span>
              </div>
            </div>
            <div>
              <div className="card__buttons">
                <div className={'card__status '}>
                  <button
                    onClick={() => {
                      openModal(row.id);
                    }}
                    className={row.status}
                  >
                    Изменить статус
                  </button>
                </div>
                <div className="card__delete">
                  <button
                    onClick={() => {
                      hendleDelete(row.id);
                    }}
                  >
                    Удалить карту
                  </button>
                </div>
              </div>
              <div className="card__info">
                <button
                  onClick={() => {
                    setInfoModal(true);
                    setChangesId(row.id);
                  }}
                >
                  Изменить информацию
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default All;
