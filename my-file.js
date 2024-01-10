import { imported_function, person } from './imported-file';

const array = [ 1, 3, 4 ];

imported_function();

const { last_name, ...otherProps } = person;

console.log( last_name, otherProps.name );

const name = 'bob';
console.log( name );

function doSomeThing(
    myArray,
    secondArg,
    thirdArg,
    fourthArg,
) {
    for ( let
        number
        of myArray ) {
        console.log( number );
    }
}

const arrowFunc = () => {
    console.log( 'arrowFunc' );
};

arrowFunc();

const firstName = 'jack';
console.log( firstName );
doSomeThing( array );
