export const sayHello = () => {
    console.log('Hello world! From module script');
};

const user = {
    name: 'Alex',
    age: 26,
};

export {sayHello as sayHi, user};
