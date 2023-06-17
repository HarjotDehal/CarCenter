import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
import { carTypes,  drivetypes, fuels, yearsOfProduction } from '@/components/constants';
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home({searchParams}) {
 
  // we can make our home page async, this means it will wait for our cars to load before it loads. 
 
  const allCars = await fetchCars({
    
    manufacturer: searchParams.manufacturer || '', 
  year: searchParams.year|| 2022 , fuel: searchParams.fuel || '',  limit:searchParams.limit || 10, model: searchParams.model || '', drive:searchParams.drive || '' });
 
  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;
  // console.log(allCars);
  
  return (
    <main className="overflow-hidden bg-white">
{/* this gets rid of unnucesary white space and scrolling */}
      {/* check classnames in tailwind css. utility first css framework */}
   
{/* make our main hero section which is our front page */}

    <Hero/>
{/* only want to put routes in the app folder. so put this in a component folder */}

    <div className='mt-12 padding-x padding-y max-width' id='discover'>


    <div className='home__text-container'>


      {/* this has our class car headline */}


    <h1 className='text-6xl font-extrabold text-red-500'>Car Inventory</h1>

    <p className='font-bold'>Explore cars you might like</p>

    </div>


        <div className='home__filters'>

          <SearchBar />

          <div className='home__filter-container'>

{/* allows us to search by fuel or year */}
            <CustomFilter title='fuel' options={fuels} />

            {/* this sets the filter to each of these  */}
            <CustomFilter title='year'  options={yearsOfProduction}/>


            {/* <CustomFilter title='car_type'  options={carTypes}/> */}
            <CustomFilter title='drive'  options={drivetypes}/>

 


          </div>
        </div>



      {!isDataEmpty ? (

        <section> 
          
          {/* We have cars */}
          
          {/* here we will have our cars */}
          
          <div className='home__cars-wrapper'>

            {allCars?.map((car) =>(<CarCard car={car} />))}


            {/* maps each car to a car card. Nice and clean */}

            {/* now we just have to make the information look clean and neat.  */}
          </div>
                <ShowMore     pageNumber ={(searchParams.limit || 10)/10}   isNext={(searchParams.limit || 10 ) > allCars.length}   />
                {/* puts 10 cars per page */}

                {/* this lets us fetch more data */}

          </section>
      ) :(
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>
      )}



    </div>

    </main>




  )
}
