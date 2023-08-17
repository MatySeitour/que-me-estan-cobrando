export interface ServiceType {
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

interface DollarApi {
  casa: {
    agencia: string;
    compra: string;
    venta: string;
    decimales: string;
    nombre: string;
    variacion: string;
    ventaCero: string;
  };
}

interface DollarNewValues {
  nombre: string;
  compra: string;
  venta: string;
  variacion: string;
  descripcion: string;
}

interface ServiceTest {
  plans: PlansType[];
  serviceId: number;
  serviceName: string;
}

interface PlansType {
  serviceName: string;
  id: number;
  name: string;
  price: number;
  benefits: string;
}

export { Planes };
export { PlansType };
export { DollarApi };
export { DollarNewValues };
export { ServiceTest };
