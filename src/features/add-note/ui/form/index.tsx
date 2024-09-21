/* eslint-disable jsx-a11y/no-autofocus */

import styles from './styles.module.css';

export const AddNoteForm = () => {
  return (
    <form action='/api/notes' className={styles.form} method='POST'>
      <div className='form-group'>
        <label htmlFor='name'>Название</label>
        <input
          autoFocus
          className='form-control'
          id='name'
          name='name'
          placeholder='Название заметки'
          type='text'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='exampleInputEmail1'>Описание</label>
        <textarea
          aria-describedby='description'
          className='form-control'
          id='description'
          name='description'
          placeholder='Введите описание для заметки'
        />
      </div>
      <button className='btn btn-primary' type='submit'>
        Создать
      </button>
    </form>
  );
};
