export interface Recipe
{
    id : number;
    title : string;
    description : string;
    feeds_this_many : number;
    preparation_time : number;
    ingredients : Ingredient[];
    instructions : Instruction[];
}

interface Ingredient
{
    ingredient : string;
    measure : string;
}

interface Instruction
{
    instruction : string;
    photo : string;
}