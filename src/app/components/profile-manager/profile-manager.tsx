'use client';

import React from 'react';
import ProfileForm from './profile-form';

function ProfileManager() {
  return (
    <div className="my-4 w-full flex justify-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3 h-fit bg-[#3c3c3c] border border-slate-400 rounded-3xl p-8 shadow-lg backdrop-filter backdrop-blur-sm relative">
        <div className="text-center m-3 text-4x1 text-xl font-medium">
          <h1>Crie o seu Perfil</h1>
        </div>
        <ProfileForm />
      </div>
    </div>
  );
}

export default ProfileManager;
