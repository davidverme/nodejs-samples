/**
 * Created by wdverme on 2/26/14.
 */

function mundo(){
    process.nextTick(function(){
        console.log('mundo');
    });

}

function hola(){
    console.log('hola');
}

mundo();
hola();

