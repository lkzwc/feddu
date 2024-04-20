## Promise的简单思路
```
const pending = 'PENDING'
const fulfilled = 'FULFILLED'
const rejected = 'REJECTED'

class Promise{
    constructor(exec){
        const resolve = (value) = >{
            if(this.status = 'PENDING'){
                this.value = value 
                this.status = 'REJECTED'
            }
        } 

        const reject = (value) =>{
            if(this.status =  'PENDING'){
                this.value = value 
                this.status = 'REJECTED'
            }
        } 

        exec(resolve,reject)
    }

    then(onFulfill,onReject){
        if(this.status === 'FULFILLED'){
            onFulfill && onFulfill(this.value)
        }
         if(this.status === 'REJECTED'){
            onReject && onReject(this.value)
        }
    }
}

```