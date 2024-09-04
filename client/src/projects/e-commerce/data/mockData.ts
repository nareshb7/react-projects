import { LaptopDataType, MobileDataType, SpecificationsType } from "../types";


export const specifications:SpecificationsType = {
  "General": {
      "In the Box": "Handset, Charger, USB Data Cable, Sim Ejector Tool, Safety Guide, Quick Guide, TPU Protective Case",
      "Model Number": "RMX3998",
      "Model Name": "12x 5G",
      "Color": "Twilight Purple",
      "Browse Type": "Smartphones",
      "Touchscreen": "Yes",
      "SIM Type": "Dual Sim",
      "Battery": "5000mah Li-ion Battery"
  },
  "Display Features": {
      "Display Size": "17.07 cm (6.72 inch)",
      "Resolution": "2400 x 1080 Pixels",
      "Resolution Type": "Full HD+",
      "GPU": "ARM Mali G57 MC2",
      "Other Display Features": "120Hz Refresh Rate, Screen-to-Body Ratio: 91.40%, Color Saturation: 82% NTSC (Typical), 78% NTSC (Minimum), Aspect Ratio: 20:9, Color Gamut: 82% NTSC (Typical), 78% NTSC (Minimum), RGB Pixel Arrangement, Contrast Ratio: 1500:1, Sunshine Screen, Brightness: 800 Nits (Typical), 950 Nits (High Brightness Mode), 240Hz Touch Sampling Rate"
  },
  "Os & Processor Features": {
      "Operating System": "Android 14",
      "Processor Brand": "Mediatek",
      "Processor Type": "Dimensity 6100+",
      "Processor Core": "Octa Core",
      "Primary Clock Speed": "2.2 GHz"
  },
  "Memory & Storage Features": {
      "Internal Storage": "128 GB",
      "RAM": "8 GB",
      "Expandable Storage": "Dimensity 6100+",
      "Processor Core": "2 TB",
      "Memory Card Slot Type": "Hybrid Slot"
  },
  "Camera Features": {
      "Primary Camera Available": "Yes",
      "Primary Camera": "50MP + 2MP",
      "Primary Camera Features": "Dual Camera Setup: 50MP Main Camera (Samsung S5KJN1, f/1.8 Aperture, 1/ 2.76 inch Sensor Size, 0.64um Pixel Size, FOV: 80 Degree, 5P Lens, Effective Focal Length: 3.98mm, Equivalent Focal Length: 26mm, Supports Auto Focus, Open Loop VCM) + 2MP Mono Camera (Smartsense SC202CS, f/2.4 Aperture, 1/5 inch Sensor Size, 1.75um Pixel Size, FOV: 89 Degree, 3P Lens, Effective Focal Length: 1.77mm, Equivalent Focal Length: 22mm, Fixed Focus), CMOS, 20 Burst Photos, Features: Photo, Video, Night, Street, Pro, Pano, Portrait, Timelapse, Slo-Mo, Text Scanner, 50M, Tilt-Shift, Movie, Dual-View Video, Supports Smart Scenario Recognition, Supports Fill Light for Video Shooting",
      "Secondary Camera Available": "Yes",
      "Secondary Camera": "8MP Front Camera",
      "Flash": "Rear: Single Flashlight"
  }
}

export const mobiles: MobileDataType[] = [
  {
    id: 1,
    title: "Iphone 13",
    brand: "Apple",
    tag: "mobiles",
    actualPrice: 55999,
    finalPrice: 48999,
    discount: 20,
    color: "Blue",
    rating: 4.2,
    ram: 4,
    rom: 128,
    specifications,
    displaySize: "6.1 Inch",
    displayType: "LED",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/ktketu80/mobile/q/h/8/iphone-13-mlpk3hn-a-apple-original-imag6vpywdtyhbkr.jpeg",
  },
  {
    id: 2,
    title: "Iphone 14",
    brand: "Apple",
    tag: "mobiles",
    actualPrice: 58999,
    finalPrice: 51999,
    discount: 20,
    color: "Starlight",
    rating: 4.0,
    ram: 4,
    rom: 128,
    specifications,
    displaySize: "6.1 Inch",
    displayType: "LED",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/5/i/7/-original-imaguypzzhbzm5an.jpeg",
  },
  {
    id: 3,
    title: "Mi Note 10S",
    brand: "MI",
    tag: "mobiles",
    actualPrice: 15999,
    finalPrice: 13999,
    discount: 25,
    color: "Black",
    rating: 3.9,
    ram: 6,
    rom: 128,
    specifications,
    displaySize: "6.1 Inch",
    displayType: "LED",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbsla7exTnx_eV2oe46LQErbxOJ4Hi-vesHA&s",
  },
  {
    id: 4,
    title: "Realme 7i",
    brand: "Realme",
    tag: "mobiles",
    actualPrice: 14999,
    finalPrice: 12999,
    discount: 23,
    color: "Fusion Blue",
    rating: 3.8,
    ram: 4,
    rom: 64,
    specifications,
    displaySize: "6.1 Inch",
    displayType: "LED",
    imageUrl:
      "https://m.media-amazon.com/images/I/41+clrV1FPL._AC_UF350,350_QL80_.jpg",
  },
  {
    id: 5,
    title: "Realme 11x 5G",
    brand: "Realme",
    tag: "mobiles",
    actualPrice: 18999,
    finalPrice: 14999,
    discount: 29,
    color: "Midnight Black",
    rating: 4.1,
    ram: 8,
    rom: 128,
    specifications,
    displaySize: "6.1 Inch",
    displayType: "LED",
    imageUrl:
      "https://m.media-amazon.com/images/I/71RAdmjaf5L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 6,
    title: "IQOO Z6 5G",
    brand: "IQOO",
    tag: "mobiles",
    actualPrice: 16999,
    finalPrice: 19999,
    discount: 23,
    color: "White",
    rating: 4.0,
    ram: 4,
    rom: 128,
    specifications,
    displaySize: "6.1 Inch",
    displayType: "LED",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/q/j/f/-original-imagcsyzjpyjezeh.jpeg",
  },
  {
    id: 7,
    title: "Oneplus Nord CE 3 Lite 5G",
    brand: "Oneplus",
    tag: "mobiles",
    actualPrice: 28999,
    finalPrice: 23999,
    discount: 28,
    color: "Chromatic Gray",
    rating: 4.0,
    ram: 8,
    rom: 256,
    specifications,
    displaySize: "6.1 Inch",
    displayType: "LED",
    imageUrl:
      "https://m.media-amazon.com/images/I/71EA48-X7zL.jpg",
  },
  {
    id: 8,
    title: "Xiaomi 14 civi",
    brand: "Xioami",
    tag: "mobiles",
    actualPrice: 54999,
    finalPrice: 42999,
    discount: 21,
    color: "Shadow Black",
    rating: 4.0,
    ram: 8,
    rom: 256,
    specifications,
    displaySize: "6.1 Inch",
    displayType: "LED",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/y/q/i/14-civi-mzb0hd1in-xiaomi-original-imahfqjxwfecrrfa.jpeg",
  },
];

export const laptops: LaptopDataType[] = [
  {
    id: 1,
    title: "Thinkpad L460",
    brand: "Lenovo",
    model: "2018",
    color: "Black",
    processor: "Intel i5 6th gen",
    ram: 8,
    rom: 256,
    romType: "SSD",
    displayType: "Full HD LED",
    displaySize: "14 Inch",
    tag: "laptops",
    actualPrice: 48999,
    finalPrice: 42999,
    discount: 25,
    rating: 4.5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgihL3w3tFnTzPy3z3D__UtY6ajSroSuNt_A&s",
    specifications,
  },
  {
    id: 2,
    title: "Asus Vivobook 15",
    brand: "Asus",
    model: "2022",
    color: "Icelight Sliver",
    processor: "Intel i5 12th gen",
    ram: 8,
    rom: 256,
    romType: "SSD",
    displayType: "LED",
    displaySize: "15.6 Inch",
    tag: "laptops",
    actualPrice: 70990,
    finalPrice: 48990,
    discount: 30,
    rating: 3.9,
    imageUrl:
      "https://rukminim1.flixcart.com/image/1664/1664/xif0q/computer/f/a/d/x1502za-ej545ws-thin-and-light-laptop-asus-original-imahfqg26dzzdmu7.jpeg",
    specifications,
  },
  {
    id: 3,
    title: "HP 15s",
    brand: "HP",
    model: "2021",
    color: "Natural Silver",
    processor: "AMD Ryzen 5 Hexa Core 5500U",
    ram: 8,
    rom: 512,
    romType: "SSD",
    displayType: "LED",
    displaySize: "15.6 Inch",
    tag: "laptops",
    actualPrice: 54552,
    finalPrice: 38390,
    discount: 29,
    rating: 4.3,
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/computer/j/s/m/-original-imagykgpjswsfggf.jpeg",
    specifications,
  },
  {
    id: 4,
    title: "Acer CB514-4H-39T7 Chromebook",
    brand: "Lenovo",
    model: "2018",
    color: "Steel Gray",
    processor: "Intel Core i3 N305",
    ram: 8,
    rom: 256,
    romType: "SSD",
    displayType: "Full HD IPS LCD",
    displaySize: "14 inch",
    tag: "laptops",
    actualPrice: 49999,
    finalPrice: 28990,
    discount: 42,
    rating: 3.6,
    imageUrl:
      "https://rukminim1.flixcart.com/image/850/850/xif0q/computer/t/t/j/chromebook-plus-chromebook-acer-original-imahfcj5nhzbfp78.jpeg",
    specifications,
  },
  {
    id: 5,
    title: "Apple 2020 Macbook Air Apple M1",
    brand: "Apple",
    model: "2020",
    color: "Space Grey",
    processor: "Mac OS Big Sur",
    ram: 8,
    rom: 256,
    romType: "SSD",
    displayType: "Quad LED Backlit IPS Display",
    displaySize: "13.3 inch",
    tag: "laptops",
    actualPrice: 89900,
    finalPrice: 63990,
    discount: 28,
    rating: 4.7,
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/850/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg",
    specifications,
  },
  {
    id: 6,
    title: "DELL Inspiron 3520",
    brand: "DELL",
    model: "2018",
    color: "Platinum Silver",
    processor: "Intel Core i3 12th Gen",
    ram: 8,
    rom: 512,
    romType: "SSD",
    displayType: "LED",
    displaySize: "1366 x 728",
    tag: "laptops",
    actualPrice: 50479,
    finalPrice: 37890,
    discount: 24,
    rating: 4.2,
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/850/xif0q/computer/l/h/1/inspiron-3520-thin-and-light-laptop-dell-original-imahyggypmfkkpnf.jpeg",
    specifications,
  },
  {
    id: 7,
    title: "Lenovo Yoga Slim 7 AI PC",
    brand: "Lenovo",
    model: "2024",
    color: "Luna Grey",
    processor: "Intel Core Ultra 7 15",
    ram: 32,
    rom: 1024,
    romType: "SSD",
    displayType: "LED",
    displaySize: "1366 x 728",
    tag: "laptops",
    actualPrice: 146890,
    finalPrice: 102990,
    discount: 29,
    rating: 4.3,
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/850/xif0q/computer/1/z/d/-original-imahyfx7hyg8t4gf.jpeg",
    specifications,
  },
  {
    id: 8,
    title: "Lenovo ThinkPad E14",
    brand: "Lenovo",
    model: "2019",
    color: "Black",
    processor: "AMD Ryzen 5 Hexa Core 7530U",
    ram: 16,
    rom: 512,
    romType: "SSD",
    displayType: "WUXGA IPS Anti-glare Display",
    displaySize: "14 Inch",
    tag: "laptops",
    actualPrice: 95111,
    finalPrice: 51990,
    discount: 45,
    rating: 4.4,
    imageUrl:
      "https://rukminim1.flixcart.com/image/850/850/xif0q/computer/w/v/d/tp-e14-gen-5-thin-and-light-laptop-lenovo-original-imags8wwkum3gzbz.jpeg",
    specifications,
  },
  {
    id: 9,
    title: "MSI Cyborg 15",
    brand: "MSI",
    model: "2022",
    color: "Translucent Black",
    processor: "AI Intel Core Ultra 5 125H",
    ram: 16,
    rom: 1024,
    romType: "SSD",
    displayType: "FHD , 144Hz 45%NTSC IPS-Level",
    displaySize: "15.6 Inch",
    tag: "laptops",
    actualPrice: 111990,
    finalPrice: 96990,
    discount: 13,
    rating: 4.1,
    imageUrl:
      "https://rukminim1.flixcart.com/image/850/850/xif0q/computer/m/d/7/-original-imagyj9kyqnps7sv.jpeg",
    specifications,
  },
  {
    id: 10,
    title: "Acer Swift Go 14",
    brand: "Acer",
    model: "2018",
    color: "Pure Silver",
    processor: "Intel Core i5 13th Gen",
    ram: 16,
    rom: 256,
    romType: "SSD",
    displayType: "LED",
    displaySize: "14 Inch",
    tag: "laptops",
    actualPrice: 93999,
    finalPrice: 59990,
    discount: 36,
    rating: 4.3,
    imageUrl:
      "https://rukminim1.flixcart.com/image/850/850/xif0q/computer/u/1/4/-original-imaguyt4gyzmcm9y.jpeg",
    specifications,
  },
];

export const homePageData = {
  mobiles,
  laptops,
};


// export const specifications: SpecificationsType = {
//   General: [
//     {
//       key: "In the Box",
//       value:
//         "Handset, Charger, USB Data Cable, Sim Ejector Tool, Safety Guide, Quick Guide, TPU Protective Case",
//     },
//     { key: "Model Number", value: "RMX3998" },
//     { key: "Model Name", value: "12x 5G" },
//     { key: "Color", value: "Twilight Purple" },
//     { key: "Browse Type", value: "Smartphones" },
//     { key: "Touchscreen", value: "Yes" },
//     { key: "SIM Type", value: "Dual Sim" },
//   ],
//   "Display Features": [
//     { key: "Display Size", value: "17.07 cm (6.72 inch)" },
//     { key: "Resolution", value: "2400 x 1080 Pixels" },
//     { key: "Resolution Type", value: "Full HD+" },
//     { key: "GPU", value: "ARM Mali G57 MC2" },
//     {
//       key: "Other Display Features",
//       value:
//         "120Hz Refresh Rate, Screen-to-Body Ratio: 91.40%, Color Saturation: 82% NTSC (Typical), 78% NTSC (Minimum), Aspect Ratio: 20:9, Color Gamut: 82% NTSC (Typical), 78% NTSC (Minimum), RGB Pixel Arrangement, Contrast Ratio: 1500:1, Sunshine Screen, Brightness: 800 Nits (Typical), 950 Nits (High Brightness Mode), 240Hz Touch Sampling Rate",
//     },
//   ],
//   "Os & Processor Features": [
//     { key: "Operating System", value: "Android 14" },
//     { key: "Processor Brand", value: "Mediatek" },
//     { key: "Processor Type", value: "Dimensity 6100+" },
//     { key: "Processor Core", value: "Octa Core" },
//     { key: "Primary Clock Speed", value: "2.2 GHz" },
//   ],
//   "Memory & Storage Features": [{key: "Internal Storage", value: "128 GB"},
//     {key: "RAM", value: "8 GB"},
//      {key: "Expandable Storage", value: "Dimensity 6100+"},
//      {key: "Processor Core", value: "2 TB"},
//      {key: "Memory Card Slot Type", value: "Hybrid Slot"},
//     ],
//     "Camera Features": [{key: "Primary Camera Available", value: "Yes"},
//       {key: "Primary Camera", value: "50MP + 2MP"},
//        {key: "Primary Camera Features", value: "Dual Camera Setup: 50MP Main Camera (Samsung S5KJN1, f/1.8 Aperture, 1/ 2.76 inch Sensor Size, 0.64um Pixel Size, FOV: 80 Degree, 5P Lens, Effective Focal Length: 3.98mm, Equivalent Focal Length: 26mm, Supports Auto Focus, Open Loop VCM) + 2MP Mono Camera (Smartsense SC202CS, f/2.4 Aperture, 1/5 inch Sensor Size, 1.75um Pixel Size, FOV: 89 Degree, 3P Lens, Effective Focal Length: 1.77mm, Equivalent Focal Length: 22mm, Fixed Focus), CMOS, 20 Burst Photos, Features: Photo, Video, Night, Street, Pro, Pano, Portrait, Timelapse, Slo-Mo, Text Scanner, 50M, Tilt-Shift, Movie, Dual-View Video, Supports Smart Scenario Recognition, Supports Fill Light for Video Shooting"},
//        {key: "Secondary Camera Available", value: "Yes"},
//        {key: "Secondary Camera", value: "8MP Front Camera"},
//        {key: "Flash", value: "Rear: Single Flashlight"},
//       ]
// };