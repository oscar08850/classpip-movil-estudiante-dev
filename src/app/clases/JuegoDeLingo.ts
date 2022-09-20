export class JuegoDeLingo {
    id: number;
    NombreJuego: string;
    Descripcion: string;
    Tipo: string;
    Modo: string;
    JuegoActivo: boolean;
    JuegoTerminado: boolean;
    PalabraSecreta: string;
    Intentos: number;
    profesorId: number;
    grupoId: number;
  
    // tslint:disable-next-line:max-line-length
    constructor(id: number, NombreJuego: string, Descripcion: string, Tipo: string, Modo: string, JuegoActivo: boolean, JuegoTerminado: boolean, PalabraSecreta: string, Intentos: number, profesorId: number, grupoId: number) {
      this.id = id;
      this.NombreJuego = NombreJuego;
      this.Descripcion = Descripcion;
      this.Tipo = Tipo;
      this.Modo = Modo;
      this.JuegoActivo = JuegoActivo;
      this.JuegoTerminado = JuegoTerminado;
      this.PalabraSecreta = PalabraSecreta;
      this.Intentos = Intentos;
      this.profesorId = profesorId;
      this.grupoId = grupoId;
    }
  }
  