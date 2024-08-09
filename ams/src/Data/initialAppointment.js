const initialAppointments = [
    { 
      id: 1, 
      name: 'Jane Cooper', 
      inTime: '2024-08-07T09:30:00', 
      outTime: '2024-08-07T10:00:00',
      services: [{ service: 'Haircut', package: 'Basic' }], 
      additionalServices: [] 
    },
    { 
      id: 2, 
      name: 'Jenny Wilson', 
      inTime: '2024-08-05T14:00:00', 
      outTime: '2024-08-05T15:00:00',
      services: [{ service: 'Manicure', package: 'Deluxe' }],
      additionalServices: [] 
    },
    { 
      id: 3, 
      name: 'Guy Hawkins', 
      inTime: '2024-08-01T11:00:00', 
      outTime: '2024-08-01T12:00:00',
      services: [{ service: 'Massage', package: 'Premium' }],
      additionalServices: [] 
    },
  ];
  
  export default initialAppointments;
  