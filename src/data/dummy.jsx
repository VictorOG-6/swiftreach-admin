import React from "react";

export const lineChartData = [
    { date: "Sun, 18 Feb", line1: 40, line2: 20, line3: 60 },
    { date: "Mon, 19 Feb", line1: 30, line2: 60, line3: 50 },
    { date: "Tue, 20 Feb", line1: 20, line2: 50, line3: 30 },
    { date: "Wed, 21 Feb", line1: 50, line2: 80, line3: 40 },
    { date: "Thu, 22 Feb", line1: 70, line2: 70, line3: 60 },
    { date: "Fri, 23 Feb", line1: 90, line2: 40, line3: 80 },
    { date: "Sat, 24 Feb", line1: 60, line2: 30, line3: 70 },
  ];

  
  export const orderamount = [
  {city: "San Jose, CA, US", price:"54.56"},
  {city: "Chicago, IL, US", price:"62.91"},
  {city: "Phoenix, AZ, US", price:"18.51"},
  {city: "Los Angeles, CA, US", price:"91.16"},
  {city: "Dallas, TX, US", price:"66.81"},
  {city: "San Antonio, TX, US", price:"32.29"},
  {city: "Austin, TX, US ", price:"50.67"},
  {city: "San Francisco, NC, US", price:"32.67"},
  {city: "Denver, CO, US", price:"43.85"},
  {city: "Portland, DC, US", price:"73.54"},
];

export const trackedorders = [
  {
    id: 'SUR14592900',
    orderDate: 'Fri, 5 Jan 2024',
    deliveryDate: 'Sat, 27 Jan 2024 ',    
    sliderPercentage: 50,
    pickupAddress: 'Surulere, Lagos',
    deliveryAddress: 'Gwarinpa, Abuja', 
    packageContent: 'Handle Well',
    packageQuantity: 2, 
  },
  {
    id: 'LEK22571911',
    orderDate: 'Mon, 1 Jan 2024',
    deliveryDate: 'Sat, 20 Jan 2024 ',    
    sliderPercentage: 100,
    pickupAddress: 'Lekki, Lagos',
    deliveryAddress: 'Surulere, Lagos', 
    packageContent: 'Documents',
    packageQuantity: 20, 
  },
  {
    id: 'WUS48139957',
    orderDate: 'Fri, 19 Jan 2024',
    deliveryDate: 'Sat, 27 Jan 2024 ',    
    sliderPercentage: 20,
    pickupAddress: 'WUSE II, Abuja',
    deliveryAddress: 'Gwarinpa, Abuja', 
    packageContent: 'Documents',
    packageQuantity: 5, 
  },
  {
    id: 'GWA37392300',
    orderDate: 'Fri, 10 Jan 2024',
    deliveryDate: 'Sat, 27 Jan 2024 ',    
    sliderPercentage: 0,
    pickupAddress: 'Gwarinpa, Abuja',
    deliveryAddress: 'Ikoyi, Lagos', 
    packageContent: 'Products',
    packageQuantity: 1, 
  },
  {
    id: 'OTA77156219',
    orderDate: 'Fri, 17 Jan 2024',
    deliveryDate: 'Sat, 27 Jan 2024 ',    
    sliderPercentage: 70,
    pickupAddress: 'Ota, Ogun',
    deliveryAddress: 'Ikeja, Lagos', 
    packageContent: 'Documents',
    packageQuantity: 5, 
  },
]

export const croppedordersgrid = [
  {
    field: 'OrderID',
    headerText: 'Order ID',
    width: '50',
    textAlign: 'Center',
  },
  {
    field: 'Category',
    headerText: 'Category',
    width: '50',    
    textAlign: 'Center',
  },
  {
    field: 'PackageQuantity',
    headerText: 'Package Quantity',
    width: '50',    
    textAlign: 'Center',
  },
  {
    field: 'Weight',
    headerText: 'Weight',
    width: '50',    
    textAlign: 'Center',
  },
  {
    field: 'ArrivalDate',
    headerText: 'Arrival Date',
    width: '50',
    textAlign: 'Center',
  },
  {
    field: 'Price',
    headerText: 'Price',
    format:'C2',
    width: '50',
    textAlign: 'Center',
  },
]

export const gridOrderStatus = (props) => (
  <button type="button" style={{background: props.StatusBg}} className="text-white py-1 px-2 capitalize rounded-2xl text-md">
    {props.Status}
  </button>
); 

export const ordersgrid = [
  {
    field: 'OrderID',
    headerText: 'Order ID',
    width: '40',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'Category',
    headerText: 'Category',
    width: '40',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'PackageQuantity',
    headerText: 'Package Quantity',
    width: '40',
    editType: 'numericedit',
    textAlign: 'Center',
  },
  {
    field: 'Weight',
    headerText: 'Weight',
    width: '40',    
    textAlign: 'Center',
  },
  {
    field: 'DepartureDate',
    headerText: 'Departure Date',
    width: '60',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'ArrivalDate',
    headerText: 'Arrival Date',
    width: '60',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'Price',
    headerText: 'Price',
    format:'C2',
    width: '40',
    editType: 'numericedit',
    textAlign: 'Center',
  },
  {
    field: 'Status',
    headerText: 'Status',
    template: gridOrderStatus,
    textAlign: 'Center',
    width: '60',
  }
]; 

export const ordersdata = [
  {
    OrderID: 150700,
    Category: 'Documents',
    PackageQuantity: 20,
    Weight: '2kg',
    DepartureDate: 'January 1, 2024',
    ArrivalDate: 'January 20, 2024',
    Price: 11.70,
    Status: 'Successful',
    StatusBg: '#03c907', 
  },
  {
    OrderID: 150728,
    Category: 'Products',
    PackageQuantity: 1,
    Weight: '1kg',
    DepartureDate: 'January 10, 2024',
    ArrivalDate: 'January 20, 2024',
    Price: 8.99,
    Status: 'Ready to Shipping',
    StatusBg: '#00a7ec', 
  },
  {
    OrderID: 150705,
    Category: 'Handle Well',
    PackageQuantity: 2,
    Weight: '500g',
    DepartureDate: 'January 1, 2024',
    ArrivalDate: 'January 7, 2024',
    Price: 5.22,
    Status: 'Successful',
    StatusBg: '#03c907', 
  },
  {
    OrderID: 150737,
    Category: 'Products',
    PackageQuantity:10,
    Weight: '3kg',
    DepartureDate: 'January 12, 2024',
    ArrivalDate: 'January 29, 2024',
    Price: 17.84,
    Status: 'Ready to Shipping',
    StatusBg: '#00a7ec', 
  },
  {
    OrderID: 150743,
    Category: 'Products',
    PackageQuantity: 20,
    Weight: '1kg',
    DepartureDate: 'January 22, 2024',
    ArrivalDate: 'January 30, 2024',
    Price: 10.80,
    Status: 'Ready to Shipping',
    StatusBg: '#00a7ec', 
  },
  {
    OrderID: 150703,
    Category: 'Handle Well',
    PackageQuantity: 2,
    Weight: '504gm',
    DepartureDate: 'January 5, 2024',
    ArrivalDate: 'January 27, 2024',
    Price: 7.74,
    Status: 'Pending',
    StatusBg: '#ffa500', 
  },
  {
    OrderID: 150709,
    Category: 'Documents',
    PackageQuantity: 10,
    Weight: '98gm',
    DepartureDate: 'January 12, 2024',
    ArrivalDate: 'January 28, 2024',
    Price: 1.80,
    Status: 'Pending',
    StatusBg: '#ffa500', 
  },
  {
    OrderID: 150712,
    Category: 'Products',
    PackageQuantity: 8,
    Weight: '5kg',
    DepartureDate: 'January 15, 2024',
    ArrivalDate: 'January 20, 2024',
    Price: 49.94,
    Status: 'Successful',
    StatusBg: '#03c907', 
  },
  {
    OrderID: 150724,
    Category: 'Documents',
    PackageQuantity: 5,
    Weight: '1kg',
    DepartureDate: 'January 19, 2024',
    ArrivalDate: 'January 27, 2024',
    Price: 7.34,
    Status: 'Pending',
    StatusBg: '#ffa500', 
  },
  {
    OrderID: 150707,
    Category: 'Products',
    PackageQuantity: 10,
    Weight: '10kg',
    DepartureDate: 'January 5, 2024',
    ArrivalDate: 'January 21, 2024',
    Price: 98.54,
    Status: 'Successful',
    StatusBg: '#03c907', 
  },
  {
    OrderID: 150715,
    Category: 'Handle Well',
    PackageQuantity: 8,
    Weight: '20kg',
    DepartureDate: 'January 10, 2024',
    ArrivalDate: 'January 20, 2024',
    Price: 140.43,
    Status: 'Successful',
    StatusBg: '#03c907', 
  },
  {
    OrderID: 150740,
    Category: 'Documents',
    PackageQuantity: 10,
    Weight: '1kg',
    DepartureDate: 'January 2, 2024',
    ArrivalDate: 'January 30, 2024',
    Price: 7.23,
    Status: 'Pending',
    StatusBg: '#ffa500', 
  },
  {
    OrderID: 150707,
    Category: 'Documents',
    PackageQuantity: 15,
    Weight: '3kg',
    DepartureDate: 'January 1, 2024',
    ArrivalDate: 'January 9, 2024',
    Price: 19.00,
    Status: 'Successful',
    StatusBg: '#03c907', 
  },
  {
    OrderID: 150723,
    Category: 'Products',
    PackageQuantity: 10,
    Weight: '3kg',
    DepartureDate: 'January 10, 2024',
    ArrivalDate: 'January 20, 2024',
    Price: 14.59,
    Status: 'Ready to Shipping',
    StatusBg: '#03c907', 
  },
  {
    OrderID: 150731,
    Category: 'Products',
    PackageQuantity: 1,
    Weight: '1kg',
    DepartureDate: 'January 15, 2024',
    ArrivalDate: 'January 30, 2024',
    Price: 22.74,
    Status: 'Ready to Shipping',
    StatusBg: '#00a7ec', 
  },
];