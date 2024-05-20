import { ImGoogle, ImLinkedin2 } from 'react-icons/im';
import React from 'react';

function AltLogin() {
  return (
    <div>
      <button className="btn btn-secondary bg-[#4F4F4F] hover:scale-[1.01] rounded-3xl  w-full text-white text-xl font-md" type="submit">
        <ImGoogle />
        <span className="pt-2">Entrar com Google</span>
      </button>
      <button className="btn btn-secondary bg-[#4f4f4f] hover:scale-[1.01] rounded-3xl mt-3 mb-4 w-full text-white text-xl font-md inline-flex" type="submit">
        <ImLinkedin2 />
        <span className="pt-2">Entrar com Linkedin</span>
      </button>
    </div>
  );
}

export default AltLogin;
