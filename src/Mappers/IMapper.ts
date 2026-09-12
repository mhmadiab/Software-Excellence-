
//this is generic mapper, method map take an data of type T, and retun type U
//and this is an abstract definition
export interface IMapper<T, U>{
    map(data : T) : U;
}