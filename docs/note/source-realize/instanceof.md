# instanceof源码实现

```
// mm instanceof Array
function myinstanceof(left,right){
    if(typeof left !== object || left === null ) return false

    let proto = Object.getPrototypeof(left)
    while(true){
        if(proto === null) return false;
        if(proto === right.prototype) return true
        proto = Object.getPrototypeof(proto)
    }
}

```
