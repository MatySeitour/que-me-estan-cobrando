export interface Service {
  id: number;
  nombre: string;
  imagen: string;
  planes: Planes[];
  impuesto_final: number;
  impuesto_porcentaje: number;
  select_price: boolean;
}

interface Planes {
  id: number;
  plan: string;
  descripcion: {
    plan_description_id: number;
    plan_description: string;
  }[];
  precio: number;
}
