/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import DefaultInput from '../input/default-form-input';
import FrameworksDropdown from './frameworks-dropdown';

function ProfileForm() {
  const { register, handleSubmit } = useForm();

  const frameworks = [
    { id: '1', name: 'React', image: '' },
    { id: '2', name: 'Vue', image: '' },
    { id: '3', name: 'Angular', image: '' },
    { id: '4', name: 'Svelte', image: '' },
    { id: '5', name: 'C', image: '' },
    { id: '6', name: 'C++', image: '' },
    { id: '7', name: 'C#', image: '' },
    { id: '8', name: 'Java', image: '' },
    { id: '9', name: 'Python', image: '' },
    { id: '10', name: 'Go', image: '' },
    { id: '11', name: 'PHP', image: '' },
    { id: '12', name: 'Javascript', image: '' },
    { id: '13', name: 'Ruby', image: '' },
    { id: '14', name: 'Rust', image: '' },
    { id: '15', name: 'Swift', image: '' },
    { id: '16', name: 'Kotlin', image: '' },
    { id: '17', name: 'Dart', image: '' },
    { id: '18', name: 'Scala', image: '' },
    { id: '19', name: 'Perl', image: '' },
    { id: '20', name: 'Lua', image: '' },
  ];
  const onSubmit = (data:any) => {
    const selectedFrameworks = frameworks.filter((framework) => data[framework.id]);

    console.log({
      name: data.name,
      title: data.title,
      description: data.description,
      selectedFrameworks,
    });
  };

  return (
    <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
      <DefaultInput register={register} type="text" placeholder="Nome Exibido" autoComplete="name" data="name" />
      <DefaultInput register={register} type="text" placeholder="Título Profissional" autoComplete="title" data="title" />
      <textarea className="w-full border-2 rounded-3xl p-4 pl-7 m-2 bg-[#4f4f4f] placeholder-white" placeholder="Descrição" {...register('description', { required: true })} />
      <FrameworksDropdown frameWorks={frameworks} register={register} />
      <button
        type="submit"
        className="btn btn-secondary bg-[#C14080] hover:scale-[1.01] rounded-3xl mt-3 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="text-white text-xl font-light">Confirmar Atualizações</span>
      </button>
    </form>
  );
}

export default ProfileForm;
