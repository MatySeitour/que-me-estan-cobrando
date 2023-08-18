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

interface ServiceType {
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

export { PlansType };
export { DollarApi };
export { DollarNewValues };
export { ServiceType };
