import React from 'react';

import Guardar from '../../../Common/Button';
import Limpiar from '../../../Common/Button';

const BarraDeAcciones = () => (
  <div className="agenda--form_barra_acciones">
      <Guardar className="satisfactorio" value="Guardar" />
      <Limpiar className="limpiar" value="Limpiar" />
  </div>
);

export default BarraDeAcciones;
