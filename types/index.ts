import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyles?: string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";   
    textStyles?: string;
    rightIcon?:string;
    isDisabled?: boolean;
    // disabled lets us disable the button

}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}


export interface CarProps {
    city_mpg: number;
    car_type: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }
  


  export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
    drive?: string;
   
  }


  export interface OptionProps{
    title: string;
    value: string;
  }

  export interface CustomFilterProps{

    title:string;
    options: OptionProps[];
  }
  
  export interface HomeProps {
    searchParams: FilterProps;
  }

export interface ShowMoreProps{
    pageNumber:number;
    isNext:boolean;
}

