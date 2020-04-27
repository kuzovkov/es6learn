//let вместо var
//let ивдна только внутри скобок

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 3000);
}

const PI = 3.14;
let a = 1;

//стрелочные функции
const arrow = () => {
    return 150;
}

const arrow2 = (num1, num2) => num1 + num2;
console.log(arrow());
console.log(arrow2(10,20));
//вынуждены сохранять контекст, тат как внутри function this уже не этот this
let obj1 = {
    name: 'WTR',
    logName: function () {
        var self = this;
        setTimeout(function(){
            console.log('name:', self.name);
        }, 3000)
    }
};

//стрелочные функции не создают контекста
let obj2 = {
    name: 'WTR',
    logName: function () {
        setTimeout(() => {
            console.log('name:', this.name);
        }, 3000)
    }
};

obj1.logName();
obj2.logName();

//параметры по умолчанию

const func = (a) => {
    a = a || 15;
    return a;
};

const func2 = (a=20, b=50) => {
    return a+b;
};

console.log('func:', func());
console.log('func2:', func2());
console.log('func2:', func2(60));
console.log('func2:', func2(undefined, 60));

const func3 = (a=20, b=a+10) => {
    return a+b;
};

console.log('func3:', func3(60));
console.log('func3:', func3(undefined, 60));
const c = 90;
const func4 = (a=20, b=a+c) => {
    return a+b;
};

console.log('func4:', func4(60));
const  c2 = () => 200;
const func5 = (a=20, b=a+c2()) => {
    return a+b;
};

console.log('func5:', func5(60));

//объекты

const name = 'ERT';
const age = 23;
const obj3 = {
    name,
    age
};

console.log(obj3);

const createPerson = (name, lastname, field1=null, field2=null) => {
    const fullname = [name, lastname].join(' ');
    return {
        name, lastname, fullname,
        getJob(){
            return 'frontend';
        },
        [field1+field2]: 100 //создание динамического поля
    }
};

const person = createPerson('David', 'Norton');
console.log(person, person.getJob());

const person2 = createPerson('David', 'Norton', 'bla', '-bla');
console.log(person2);

//Деструктуризация

let obj4 = {
    title: 'ERT',
    page: 45
};

let {title, page} = obj4; //извлечение полей из объекта в переменные
let {title:t, page:p} = obj4; //извлечение полей из объекта в переменные с другими именами чем поля
console.log(title, page);
console.log(t, p);

let array = ['YRE', 12, 'red'];

//для массивов
let [x,y,z] = array;
console.log(x,y,z);
let [x1,,x3] = array;
console.log(x1,x3);

//Rest и Spread операторы

function logStrings(num){
    var args = Array.prototype.slice.call(arguments);
    console.log(num, args);
}

//Rest оператор (...) все аргументы как массив присваиваем переменной args (имя любое)
function logStrings2(num, ...args){
    console.log(num, args);
}

logStrings(10, 'line1', 'line2', 'line3');
logStrings2(10, 'line1', 'line2', 'line3');

//Spread оператор (...) массив будет развернут в список элементов
let spreadArray = [ 'line1', 'line2', 'line3', 'line4', 'line5'];
logStrings2(10, ...spreadArray);

//Строки

let name2 = 'ETY';
let str2 = `Hello ${name2}, glat to see you`;
let str3 = `Hello '${name2}', glat to see you`;
console.log(str2);
console.log(str3);

let html = `
    <div>
        <h1>Title</h1>
        <span>
            wuiwqwqw
            qwqwqwqw
            wqwqwqwq
        </span>
    </div>
`

console.log(html);

//Циклы

const  arr = [1,2,3,4,5];

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr.forEach(function(item){
    console.log(`item: ${item}`);
});

for (let item of arr){
    console.log(`item: ${item}`);
};

//итерация строк
for (let item of 'QWERTY'){
    console.log(`item: ${item}`);
};

//Классы
/* старый синтаксис
function Car(name){
    this.name = name;
}

Car.prototype.logName = function () {
    console.log(this.name);
};
*/

class Car{

    constructor(name){
        console.log('Car constructor');
        this.name = name;
    }

    logName(){
        console.log('Car name is: ', this.name);
    }

    static funcStat(){
        console.log('static func');
    }
};

class BMW extends Car{
    constructor(name){
        super(name);
        console.log('BMW constructor');
    }

    logName(){
        //super.logName();
        console.log('BMW name is: ', this.name);
    }
}

let car = new Car('Toyota');
car.logName();
Car.funcStat();
let bmw = new BMW('x6');
bmw.logName();

//Set и WeakSet

let set  = new Set();
set.add(10);
set.add('line1');
set.add({});
set.add([]);
set.add(10);
console.log(set, set.size);

let set2 = new Set([1,2,3,4,5,5,5,6,7,7]);
console.log(set2, set2.size);
let set3  = new Set().add(2).add(4).add(6).add(0);
console.log(set3, set3.size);
console.log('set has: ', set3.has(2));
set3.delete(2);
console.log(set3, set3.size);
console.log('set has: ', set3.has(2));
set3.clear();
console.log(set3, set3.size);

let set4 = new Set();
let key = {}
set4.add(key);
console.log(set4, set4.size);
key = null;
console.log(set4, set4.size);

let set5 = new WeakSet();
let key2 = {};
set5.add(key2);
console.log(set5, set5.size);
key2 = null;
console.log(set5, set5.size);

//Map и WeakMap

let map = new Map();
map.set('key1', 123);
map.set('key2', 'line1');
map.set('key3', {});
map.set('key4', []);
map.set('key6', new Map());

console.log(map);
console.log(map.get('key1'));
console.log(map.size);

let obj5 = {};
let obj6 = {};
map.set(obj5, 10);
map.set(obj6, 20);
console.log(map.size, map, map.has(obj5));
map.delete(obj5);
console.log(map.size, map, map.has(obj5));
let map2 = new Map([
    ['key1', 'line1'],
    ['key2', 124]
]);
console.log(map2, map2.size);

for (let val of map2.values()){
    console.log('value: ', val);
}

for (let key of map2.keys()){
    console.log('value: ', key);
}

for (let entr of map2.entries()){
    console.log(`key: ${entr[0]}, value: ${entr[1]}`);
}

let map3 = new Map();
let key7 = {};
map3.set(key7, 127);
console.log(map3, map3.size);
key7 = null;
console.log(map3, map3.size);

let map4 = new WeakMap();
let key8 = {};
map4.set(key8, 127);
console.log(map4, map4.size);
key8 = null;
console.log(map4, map4.size);
console.log(map4, map4.size);


//Модули
import * as extra from './modules/extra';
console.log(extra);

import {header, count} from './modules/extra2';
console.log(header, count);

import {name as name3} from './modules/extra';
console.log(name3);

import * as extra3 from './modules/extra3';
console.log(extra3);

import {myfunc} from './modules/func';
myfunc();

import myfuncdef from './modules/func2';
myfuncdef();

import Boy from './modules/boy';
let boy = new Boy('Игорь');
console.log(boy.getName());

//Символы

let s = Symbol('RTYU');
console.log(typeof(s), s);
let s2 = Symbol('1');
let s3 = Symbol('1');
console.log(s2 === s3);

let s4 = Symbol('field');
let s5 = Symbol('field');

let obj7 = {[s4]: 'RTYU'};
console.log(obj7);
console.log(obj7['field']);
console.log(obj7[s5]);
console.log(obj7[s4]);


let obj8 = {[s4]: 'RTYU', age: 34};
console.log(Object.getOwnPropertyNames(obj8));
console.log(Object.getOwnPropertySymbols(obj8));

let num = 1;
let str = 'RTYU';
let arr1 = [1,3,6,7];
let obj = {'eyr': 15632};

console.log('number: ', typeof(num[Symbol.iterator]));
console.log('string: ', typeof(str[Symbol.iterator]));
console.log('array: ', typeof(arr1[Symbol.iterator]));
console.log('object: ', typeof(obj[Symbol.iterator]));
//eсли не undefined то применим цикл for(let item of items)
//создание итератора

function createIterator(arr){
    let count = 0;
    return {
        next(){
            return count < arr.length ?
            {value: arr[count++], done: false}
            :
            {value: undefined, done: true};
        }
    };
}

let iter = createIterator([1,2,3,4,5,6]);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

//генерация ряда Фиббоначи
let fib  = {
    [Symbol.iterator](){
        let pre = 0, cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre+cur];
                return {value: cur, done: false};
            }
        };
    }
};

for (let n of fib){
    if (n > 1500)
        break;
    console.log(n);
}

