import { preconnect } from "react-dom";


const articulos=[
  {
    id: 1,
    nombre: "Acer aspire 3",
    descripcion: "Acer aspire portátil de 15.6 pulgadas 32GB RAM 1TB disco duro",
    precio: 599,
    imagen: "public/img/Acer Aspire 3.png"
  },
  {
    id: 2,
    nombre: "Lenovo idea pad 1",
    descripcion: "Lenovo IdeaPad portátil de 15.6 pulgadas 16GB RAM 512GB disco duro",
    precio: 499,
    imagen: "public/img/Lenovo IdeaPad 1.png"
  },
  {
    id: 3,
    nombre: "HP Pavilion",
    descripcion: "HP Pavilion portátil de 15.6 pulgadas 8GB RAM 256GB disco duro",
    precio: 399,
    imagen: "public/img/HP Portátil.png"
  },
  {
    id: 4,
    nombre: "Lenovo ThinkBook 15",
    descripcion: "Lenovo ThinkBook portátil de 15.6 pulgadas 16GB RAM 1TB disco duro",
    precio: 699,
    imagen: "public/img/Lenovo ThinkBook 15.png"
  },
  {
    id: 5,
    nombre: "Acer Nitro 27",
    descripcion: "Monitor Acer Nitro de 27 pulgadas Full HD 165Hz",
    precio: 279,
    imagen: "public/img/Acer Nitro 27.png"
  },
  {
    id: 6,
    nombre: "Acer Nitro V",
    descripcion: "Acer Nitro V portátil gamer de 15.6 pulgadas 32GB RAM 1TB disco duro",
    precio: 899,
    imagen: "public/img/Acer Nitro V.png"
  },
  {
    id: 7,
    nombre: "Acer Swift 14",
    descripcion: "Acer Swift 14 portátil ultraligero de 14 pulgadas 16GB RAM 512GB SSD",
    precio: 799,
    imagen: "public/img/Acer Swift 14.png"
  },
  {
    id: 8,
    nombre: "ASUS ROG G13CH (2024)",
    descripcion: "PC gaming ASUS ROG G13CH con Intel i7, RTX 4070 y 32GB RAM",
    precio: 1799,
    imagen: "public/img/ASUS ROG G13CH (2024).png"
  },
  {
    id: 9,
    nombre: "Corsair K70 RGB PRO",
    descripcion: "Teclado mecánico Corsair K70 RGB PRO con switches Cherry MX",
    precio: 169,
    imagen: "public/img/Corsair K70 RGB PRO.png"
  },
  {
    id: 10,
    nombre: "CyberPowerPC Gamer Xtreme",
    descripcion: "PC de escritorio gamer CyberPowerPC con RTX 3060, 16GB RAM y 1TB SSD",
    precio: 1299,
    imagen: "public/img/CyberPowerPC.png"
  },
  {
    id: 11,
    nombre: "G305 LIGHTSPEED",
    descripcion: "Ratón inalámbrico Logitech G305 LIGHTSPEED con sensor HERO",
    precio: 59,
    imagen: "public/img/G 305 LIGHTSPEED.png"
  },
  {
    id: 12,
    nombre: "Image3 iBuyPower SlateMesh",
    descripcion: "PC gaming iBuyPower SlateMesh con Intel i5 y RTX 4060",
    precio: 1399,
    imagen: "public/img/Image3iBuyPower SlateMesh.png"
  },
  {
    id: 13,
    nombre: "LG 34WP60C-B",
    descripcion: "Monitor LG curvo de 34 pulgadas UltraWide QHD 160Hz",
    precio: 399,
    imagen: "public/img/LG 34WP60C-B.png"
  },
  {
    id: 14,
    nombre: "MSI Aegis ZS",
    descripcion: "PC gaming MSI Aegis ZS con Ryzen 7, RTX 4070 y 32GB RAM",
    precio: 1699,
    imagen: "public/img/MSI Aegis ZS.png"
  },
  {
    id: 15,
    nombre: "Philips 221V8LB",
    descripcion: "Monitor Philips 221V8LB de 21.5 pulgadas Full HD",
    precio: 149,
    imagen: "public/img/PHILIPS 221V8LB.png"
  },
  {
    id: 16,
    nombre: "Razer Basilisk V3",
    descripcion: "Ratón gamer Razer Basilisk V3 con 11 botones programables",
    precio: 89,
    imagen: "public/img/Razer Basilisk V3.png"
  },
  {
    id: 17,
    nombre: "Razer DeathAdder Essential",
    descripcion: "Ratón gamer Razer DeathAdder Essential ergonómico con sensor óptico",
    precio: 49,
    imagen: "public/img/Razer DeathAdder E.png"
  },
  {
    id: 18,
    nombre: "Rii RK100+",
    descripcion: "Teclado retroiluminado Rii RK100+ con diseño compacto",
    precio: 39,
    imagen: "public/img/Rii RK100+.png"
  },
  {
    id: 19,
    nombre: "Samsung Monitor 24”",
    descripcion: "Monitor Samsung de 24 pulgadas Full HD 75Hz",
    precio: 179,
    imagen: "public/img/SAMSUNG Monitor.png"
  },
  {
    id: 20,
    nombre: "Sceptre Monitor curvo",
    descripcion: "Monitor Sceptre curvo de 27 pulgadas Full HD 165Hz",
    precio: 199,
    imagen: "public/img/Sceptre Monitor curvo.png"
  },
  {
    id: 21,
    nombre: "Skytech Gaming Nebula",
    descripcion: "PC gamer Skytech Nebula con RTX 4060, Ryzen 5 y 16GB RAM",
    precio: 1399,
    imagen: "public/img/Skytech Gaming Nebula.png"
  },
  {
    id: 22,
    nombre: "SteelSeries Apex Pro",
    descripcion: "Teclado mecánico SteelSeries Apex Pro con switches ajustables",
    precio: 229,
    imagen: "public/img/SteelSeries Apex Pro.png"
  },
  {
    id: 23,
    nombre: "Thermaltake LCGS Quartz",
    descripcion: "PC gamer Thermaltake LCGS Quartz con Ryzen 7, RTX 4070 y refrigeración líquida",
    precio: 1899,
    imagen: "public/img/Thermaltake LCGS Quartz.png"
  }
     
    
]

export default articulos;