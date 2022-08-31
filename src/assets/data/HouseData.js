// images
import HomeImg1 from "../images/houses/HomeImg1.jpeg";
import HomeImg2 from "../images/houses/HomeImg2.jpg";
import HomeImg3 from "../images/houses/HomeImg3.jpg";
import HomeImg4 from "../images/houses/HomeImg4.jpg";
import HomeImg5 from "../images/houses/HomeImg5.jpg";
import HomeImg6 from "../images/houses/HomeImg6.jpg";
import HomeImg7 from "../images/houses/HomeImg7.jpg";
import HomeImg8 from "../images/houses/HomeImg8.jpg";
import HomeImg9 from "../images/houses/HomeImg9.jpg";
import HomeImg10 from "../images/houses/HomeImg10.jpg";
import HomeImg11 from "../images/houses/HomeImg11.jpg";
import HomeImg12 from "../images/houses/HomeImg12.jpg";
import HomeImg13 from "../images/houses/HomeImg13.jpg";
import HomeImg14 from "../images/houses/HomeImg14.jpg";
import HomeImg15 from "../images/houses/HomeImg15.jpg";

// category rent it - (3) or sell - (2)
// property type: - houses(3), appartments(1), commercial(1)

export const HouseData = [
  // Mumbai
  {
    id: 1,
    title: "Palm Harbor Mumbai",
    img: HomeImg1,
    location: "Mumbai, India",
    rates: 50000,
    address: "2699 Green Valley Mumbai, India",
    beds: "4",
    bathroom: "3",
    category: "rent",
    availableFrom: "31/01/2022",
    propertyType: "houses",
  },
  {
    id: 2,
    title: "Beverly Springfield",
    img: HomeImg2,
    location: "Mumbai, India",
    rates: 70000,
    address: "2821 Lake Sevilla Mumbai, India",
    beds: "4",
    bathroom: "3",
    category: "rent",
    availableFrom: "02/10/2022",
    propertyType: "commercial",
  },
  {
    id: 3,
    title: "Faulkner Ave East",
    img: HomeImg3,
    location: "Mumbai, India",
    rates: 100000,
    address: "909 Woodland Mumbai, India",
    beds: "4",
    bathroom: "3",
    category: "rent",
    availableFrom: "01/12/2022",
    propertyType: "appartments",
  },
  {
    id: 4,
    title: "Pine Ave",
    img: HomeImg4,
    location: "Mumbai, India",
    rates: 35000,
    address: "910 Woodland Mumbai, India",
    beds: "4",
    bathroom: "3",
    category: "sell",
    availableFrom: "01/02/2022",
    propertyType: "houses",
  },
  {
    id: 5,
    title: "Faulkner Ave West",
    img: HomeImg5,
    location: "Mumbai, India",
    rates: 80000,
    address: "909 WestWood Mumbai, India",
    beds: "4",
    bathroom: "3",
    category: "sell",
    availableFrom: "01/05/2022",
    propertyType: "houses",
  },
  // Delhi
  {
    id: 6,
    title: "Palm Harbor Delhi",
    img: HomeImg6,
    location: "Delhi, India",
    rates: 25000,
    address: "2526 WestUnion Delhi, India",
    beds: "4",
    bathroom: "3",
    category: "rent",
    availableFrom: "15/05/2022",
    propertyType: "houses",
  },
  {
    id: 7,
    title: "Cedar Maple Elm",
    img: HomeImg7,
    location: "Delhi, India",
    rates: 50000,
    address: "909 Woodland Delhi, India",
    beds: "4",
    bathroom: "3",
    category: "rent",
    availableFrom: "15/06/2022",
    propertyType: "houses",
  },
  {
    id: 8,
    title: "View Elm",
    img: HomeImg8,
    location: "Delhi, India",
    rates: 10000,
    address: "92568 Old Bazar Delhi, India",
    beds: "4",
    bathroom: "3",
    category: "rent",
    availableFrom: "11/11/2020",
    propertyType: "houses",
  },
  {
    id: 9,
    title: "Washington Elm",
    img: HomeImg9,
    location: "Delhi, India",
    rates: 60000,
    address: "92568 New Bazar Delhi, India",
    beds: "4",
    bathroom: "3",
    category: "sell",
    availableFrom: "1/1/2020",
    propertyType: "appartments",
  },
  {
    id: 10,
    title: "Hill Oak View",
    img: HomeImg10,
    location: "Delhi, India",
    rates: 60000,
    address: "1001 Kalki Delhi, India",
    beds: "4",
    bathroom: "3",
    category: "sell",
    availableFrom: "1/1/2023",
    propertyType: "commercial",
  },
  // Pune
  {
    id: 11,
    title: "HillTown Oak View",
    img: HomeImg11,
    location: "Pune, India",
    rates: 150000,
    address: "101 Ghat Par Pune, India",
    beds: "4",
    bathroom: "3",
    category: "sell",
    availableFrom: "1/5/2012",
    propertyType: "commercial",
  },
  {
    id: 12,
    title: "HillTown Bollywood View",
    img: HomeImg12,
    location: "Pune, India",
    rates: 80000,
    address: "1001 Mera Bhag, India",
    beds: "4",
    bathroom: "3",
    category: "sell",
    availableFrom: "1/1/2023",
    propertyType: "commercial",
  },
  {
    id: 13,
    title: "Bollywood Nort West Side",
    img: HomeImg13,
    location: "Pune, India",
    rates: 60000,
    address: "51568 Bollywood north west, India",
    beds: "2",
    bathroom: "3",
    category: "rent",
    availableFrom: "1/12/2020",
    propertyType: "houses",
  },
  {
    id: 14,
    title: "Downtown Road",
    img: HomeImg14,
    location: "Pune, India",
    rates: 80000,
    address: "1001 Santhi Bazar, India",
    beds: "6",
    bathroom: "4",
    category: "rent",
    availableFrom: "1/1/2019",
    propertyType: "houses",
  },
  {
    id: 15,
    title: "Old Ghat View",
    img: HomeImg15,
    location: "Pune, India",
    rates: 20000,
    address: "1001 Old Ghat, India",
    beds: "7",
    bathroom: "3",
    category: "rent",
    availableFrom: "1/8/2028",
    propertyType: "appartment",
  },
  // Varanasi
  // Chennai
  // Surat
];

export const locationFilter = [
  {
    id: 0,
    title: "Select Location",
  },
  {
    id: 1,
    title: "Mumbai India",
  },
  {
    id: 2,
    title: "Delhi India",
  },
  {
    id: 3,
    title: "Pune India",
  },
  {
    id: 4,
    title: "Varanasi India",
  },
  {
    id: 5,
    title: "Chennai India",
  },
  {
    id: 6,
    title: "Surat India",
  },
];
