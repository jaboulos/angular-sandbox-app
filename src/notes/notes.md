## Notes

* <b>Property</b>: attribute of a component
* <b>Method</b>: function inside a component
* <b>String interpolation</b>: Variables from component you put on the template
<br>
### Typescript types
* string
* number
* boolean
* array
* any
* void (returns nothing)
* null
* tuple (ordered list or ordered array)
<br>

### Class Binding
Adding or using certain classes depending on certain properties, values or aspects of our component.

<br>

### Services
<b>Classes that can send functionality and data across multiple components</b>

### Observables
* Inject service into constructor of component.ts file youre using
* Data stream, every second it will fetch data
* On service file
  * On service file, create field, set property type to Observalbe<any>
  * Get requests
    * this.<field name defined in previous step> = new Observable(observer => {
      observer.next(<pass something in here>)
    }) return this.(field name defined earlier)
* Operator OF
* import { of } from 'rxjs'
  * allows us to return an array as an observable
  * getUsers(): Observable<User[]> {
    return of(this.users)
  }

<br>
### HTTP Client

<br>
### Useful bookmark titles from Udemy course
* "return values from methods directly onto the html template"