import React from 'react';
import Contador from '../components/Legacy/classComponents/Contador';
import ContadorFuncional from '../components/ContadorFuncional';
import ContadorFuncional2 from '../components/ContadorFuncional2';

function ContadoresView() {
  return (
    <div className='contadores-view'>
      <Contador titulo='Contador Class'/>
      <ContadorFuncional titulo='Contador Funcional'/>
      <ContadorFuncional2 titulo='Contador Funcional DOS' />
    </div>
  );
}

export default ContadoresView;
