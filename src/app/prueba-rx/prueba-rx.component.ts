import { Component, OnInit } from '@angular/core';
import { from, interval, fromEvent, of, pipe } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { filter, map, catchError, retry } from 'rxjs/operators'
@Component({
  selector: 'app-prueba-rx',
  templateUrl: './prueba-rx.component.html',
  styleUrls: ['./prueba-rx.component.css']
})
export class PruebaRxComponent implements OnInit {

  



  constructor() { }

  ngOnInit(): void {
    // **** HANDLING ERRORS

    const apiData = ajax("https://rickandmortyapi.com/api/characters").pipe(
      // if an error ocurr, it will retry 3 times before failing
      retry(3),
      map(res => {

        if(!res.response){

          throw new Error('Value expected')
        } 

        return res.response
      }),
      catchError(err => of([]) )
    )

    apiData.subscribe({
      next(x) { console.log('data:', x)},
      error(err) { console.log('error already caught... will not run')}
    })


    // **** OPERATORS 
    // === MAP ===
    // const nums = of(1,2,3)

    // const squareValues = map((val: number) => val * val)

    // const squaredNums = squareValues(nums)

    // squaredNums.subscribe(x => console.log(x))

    // // function pipe
    // // pipe allows to execute multiple functions inside and return what we desired after that functions.
    // // to execute pipe we have to call subscribe()
    // const squareOddsVals = pipe(
    //   filter((n: number) => n % 2 !== 0),
    //   map(n => n * n)
    // )

    // const squareOdds = squareOddsVals(nums)

    // squareOdds.subscribe(x => console.log('odds:', x))

    // podemos simplificar de esta manera 

    const squareOdds2 = of(1,2,3,4)
      .pipe(
        filter(n => n % 2 !== 0),
        map(n => n * n )
      )

    squareOdds2.subscribe(x => console.log('easier:',x))


    // **** OBSERVER CURSOR POINTER IN BODY
    // no anduvo ========
    // const el = document.getElementById('body')

    // // Create an observable that will publish mouse movements
    // const mouseMoves = fromEvent(el, 'mousemove')

    // // Subscribe to start listening for mouse-move events
    // const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
    //   console.log(`Coord: ${evt.clientX} x ${evt.clientY}`)
      
    //   // Make unsubscribtion when mouse is out screen
    //   if( evt.clientX < 40 && evt.clientY < 40){
    //     subscription.unsubscribe
    //   }
    // })
    


    // // **** INTERVAL SUBSCRIPTION
    // // Create an Observable that will publish a value on an inteval
    // let secondsCounter = interval(1000)

    // // Subscribe to begin publishing values
    // secondsCounter.subscribe(n => {
    //   console.log(`It's been ${n} seconds since subscribing!`)
    // })


    // **** FETCH SOME DATA
    // Create an Observable out of a promise
    // const data = from(fetch("https://rickandmortyapi.com/api/location"));
    // // Subscribe to begin listening for async result
    // data.subscribe({
    //   next(response){ console.log(response.json()); },
    //   error(err){ console.error('Error: ' + err); },
    //   complete(){ console.warn('Completed toma los datos papa'); }
    // });





  }

}
