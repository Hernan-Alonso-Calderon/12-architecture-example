export const environment = {
  production: false,
  adminUsername: 'admin',
  adminPassword: '1234*Gufi',
  apiUrl: 'http://localhost:8080/api',
};

export const urlResources = {
  customer: `${environment.apiUrl}/client`,
  customerOperationsById: (id: number) => `${environment.apiUrl}/client/${id}`,
  menu: `${environment.apiUrl}/menu`,
  dish: `${environment.apiUrl}/dish`,
  order: `${environment.apiUrl}/order`,
};
