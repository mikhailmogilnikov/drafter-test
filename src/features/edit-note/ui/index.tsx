'use client';

/* eslint-disable jsx-a11y/no-autofocus */

import { FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from './styles.module.css';

import { INote, updateNoteApi } from '@/src/entities/note';

type Props = { note: INote };

export const EditNoteForm = ({ note }: Props) => {
  const { id, name: initName, description: initDesc } = note;

  const { push, refresh } = useRouter();

  const [name, setName] = useState(initName);
  const [description, setDescription] = useState(initDesc);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const updatedFields: Partial<INote> = {};

    if (name !== initName) {
      updatedFields['name'] = name;
    }

    if (description !== initDesc) {
      updatedFields['description'] = description;
    }

    await updateNoteApi(id.toString(), updatedFields);

    push(`/notes/${id}`);
    refresh();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='name'>Название</label>
        <input
          autoFocus
          className='form-control'
          id='name'
          name='name'
          placeholder='Название заметки'
          type='text'
          value={name}
          onChange={({ target: { value } }) => setName(value)}
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
          value={description}
          onChange={({ target: { value } }) => setDescription(value)}
        />
      </div>
      <button className='btn btn-primary' type='submit'>
        Изменить
      </button>
    </form>
  );
};
