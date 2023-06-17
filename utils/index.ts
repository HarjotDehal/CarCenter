// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'bff5d5d5c0msh4880fa0d23267b0p16013ejsnae28dab1b56f',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// import { drive } from "@/components/constants";
import { CarProps, FilterProps } from "@/types";

// import {RAPIDAPI_KEY} from .env
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


// function call which uses api


export async function fetchCars(filters: FilterProps){

    const {manufacturer,year,model,limit,fuel,drive} =filters;
    const headers= {

        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'}

        console.log(model);
        const response = 
        await fetch 

       
        
            // ( `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?cartype=minivan`
        (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}&drive=${drive}`
        
        
        ,{
         
        
        headers:headers
        });

        const result = await response.json();

        return result;
        // modify so it gets all vars
}

export const updateSearchParams =(type:string, value:string)=>{



 // Get the current URL search params
 const searchParams = new URLSearchParams(window.location.search);

 // Set the specified search parameter to the given value
 searchParams.set(type, value);

 // Set the specified search parameter to the given value
 const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

 return newPathname;

};

export const calculateCarRent = (city_mpg: number, year: number,make:string, drive:string) => {

// play around with this rental cost method

    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.12; // Additional rate per mile driven
    const ageFactor = -5; // Additional rate per year of vehicle age
  let makePrice =20;
  let driveprice=10;
  switch (drive) {
    case "4wd":
      // Code for 4-Wheel Drive
      break;
    case "awd":
        driveprice=20;
      // Code for All-Wheel Drive
      break;
    case "rwd":
        driveprice=15;
      // Code for Rear-Wheel Drive
      break;
    case "fwd":
      // Code for Front-Wheel Drive
      break;
    default:
      // Code for unrecognized drive type
      break;
  }
  
  
  
  switch (make) {
        case "acura":
          // Code for Acura
            makePrice=105;
          break;
        case "alfa romeo":
            makePrice = 102;

          // Code for Alfa Romeo
          break;
        case "aston martin":

            makePrice = 250;
          // Code for Aston Martin
          break;
        case "audi":
          // Code for Audi
          makePrice = 123;
          
          break;
          case "genesis":
            makePrice=100;
            break;
        case "bentley":
            makePrice = 247;

          // Code for Bentley
          break;
        case "bmw":
          // Code for BMW
          makePrice = 176;
          
          break;
        case "buick":
          // Code for Buick
          makePrice = 87;

          break;
        case "cadillac":
            makePrice = 91;

          // Code for Cadillac
          break;
        case "chevrolet":
          // Code for Chevrolet
          makePrice = 72;

          break;
        case "chrysler":
          // Code for Chrysler
          makePrice = 81;
          
          break;
        case "citroen":
          // Code for Citroen

          makePrice = 39;

          break;
        case "dodge":
            makePrice = 69;

          // Code for Dodge
          break;
        case "ferrari":
          // Code for Ferrari
          makePrice = 246;

          break;
        case "fiat":
          // Code for Fiat
          makePrice = 42;

          break;
        case "ford":
            makePrice = 33;

          // Code for Ford
          break;
        case "gmc":
            makePrice = 84;

          // Code for GMC
          break;
        case "honda":
            makePrice = 63;

          // Code for Honda
          break;
        case "hyundai":
            makePrice = 60;

          // Code for Hyundai
          break;
        case "infiniti":
            makePrice = 96;

          // Code for Infiniti
          break;
        case "jaguar":
            makePrice = 117;
            
          // Code for Jaguar
          break;
        case "jeep":
            makePrice = 30;
            
          // Code for Jeep
          break;
        case "kia":
            makePrice = 57;

          // Code for Kia
          break;
        case "lamborghini":
          // Code for Lamborghini
          makePrice = 241;

          break;
        case "land rover":
            makePrice = 160;

          // Code for Land Rover
          break;
        case "lexus":
            makePrice = 114;

          // Code for Lexus
          break;
        case "lincoln":
            makePrice = 91;

          // Code for Lincoln
          break;
        case "maserati":
            makePrice = 192;

          // Code for Maserati
          break;
        case "mazda":
            makePrice = 54;
            
          // Code for Mazda
          break;
        case "mclaren":

        makePrice = 235;

          // Code for McLaren
          break;
        case "mercedes-benz":
            makePrice = 189;

          // Code for Mercedes-Benz
          break;
        case "mINI":
            makePrice = 78;

          // Code for MINI
          break;
        case "mitsubishi":
            makePrice = 48;

          // Code for Mitsubishi
          break;
        case "nissan":
          // Code for Nissan

          makePrice = 51;

          break;
        case "porsche":

        makePrice = 111;

          // Code for Porsche
          break;
        case "ram":
          // Code for Ram
          makePrice = 45;

          break;
        case "rolls-royce":
            makePrice = 298;

          // Code for Rolls-Royce
          break;
        case "subaru":
            makePrice = 66;

          // Code for Subaru
          break;
        case "tesla":
          // Code for Tesla
          makePrice = 108;

          break;
        case "toyota":
            makePrice = 36;

          // Code for Toyota
          break;
        case "volkswagen":
            makePrice = 75;

          // Code for Volkswagen
          break;
        case "volvo":
            makePrice = 90;

          // Code for Volvo
          break;
        default:
          // Code for unrecognized manufacturer
          break;
      }
    

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;



    const ageRate = ( (new Date().getFullYear() - year)) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate + makePrice +driveprice;
  
    return rentalRatePerDay.toFixed(0);
  };
  


// this is for getting our pictures
  export const generateCarImageUrl =(car: CarProps, angle?: string) =>{

        const url = new URL('https://cdn.imagin.studio/getimage')


        const {make,year,model} =car;

        url.searchParams.append('customer', 'hrjavascript-mastery');
        
        
        url.searchParams.append('make', make);
        url.searchParams.append('modelFamily', model.split(" ")[0]);
        url.searchParams.append('zoomType', 'fullscreen');
        url.searchParams.append('modelYear', `${year}`);
        // url.searchParams.append('zoomLevel', zoomLevel);
        url.searchParams.append('angle', `${angle}`);
        // url.searchParams.append('colourCluster','Black')
        // url.searchParams.append(paintSwatch: { "primary": { "lowLight": "#000000", "midLight": null, "highLight": "#131313", "colourCluster": "black", "paintType": "uni" } });

        return `${url}`;

  }