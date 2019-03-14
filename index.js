class HashTable{
  constructor(size){
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
  }
  hash(key){
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }
    let bucket = total % this.numBuckets
    return bucket
  }
  insert(key, value){
    let index = this.hash(key);
    if(!this.buckets[index]) this.buckets[index] = new HashNode(key,value);
    else if(this.buckets[index].key === key){
      this.buckets[index].value = value;
    }
    else{
      let currentNode = this.buckets[index];
      while(currentNode.next){
        if(currentNode.next.key === key){
          currentNode.next.value = value;
          return;
        }
        currentNode = currentNode.next;
      }
      currentNode.next = new HashNode(key, value)
    }
  }
  get(key){
    let index = this.hash(key);
    if(!this.buckets[index]) return null;
    let currentNode = this.buckets[index];
    while(currentNode){
      if(currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next
    }
    return null;
  }
  retriveAll(){
    const allArr = []
    this.buckets.forEach(bucket => {
      while(bucket){
        allArr.push(bucket)
        bucket = bucket.next;
      }
    })
    return allArr;
  }
}
class HashNode{
  constructor(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null;
  }
}
const myHT = new HashTable(30);
myHT.insert('Dean', 'dean@gmail.com')
myHT.insert('Megan', 'megan@gmail.com')
myHT.insert('Dane', 'dane@yahoo.com')
myHT.insert('Dean', 'deanmachine@gmail.com')
myHT.insert('Megan', 'megansmith@gmail.com')
myHT.insert('Dane', 'dane1010@yahoo.com')
myHT.insert('Joe', 'joey@yahoo.com')
myHT.insert('Samantha', 'sam0@yahoo.com')

console.log(myHT.get('Dane'));
console.log(myHT.retriveAll())



