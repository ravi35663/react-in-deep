function Counter(){
    var count=10;
    this.count = count;
    this.incrementOne = ()=>{
        count++;
    }
    this.decrementOne = ()=>{
        count--;
    }
    this.showCount = ()=>{
        console.log("Count is ",count);
    }
}

const counter = new Counter();
counter.incrementOne();
counter.showCount();
counter.incrementOne();
counter.incrementOne();
counter.showCount();
counter.incrementOne();
counter.incrementOne();
counter.incrementOne();
counter.showCount();
counter.incrementOne();
counter.decrementOne();
counter.decrementOne();
counter.showCount();
counter.decrementOne();
counter.decrementOne();
counter.showCount();


console.log("Final count is ",counter.count);