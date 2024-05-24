class Node{
    constructor(value){
      this.value = value
      this.next = null
    }
  }
  
  class linkedList{
    constructor(){
      this.head = null
      this.size = 0
    }
    
    isEmpty(){
      return this.size === 0 
    }
    
    getSize(){
      return this.size
    }
    
    prepend(value){
      const node = new Node(value)
      if(this.isEmpty()){
        this.head = node
      }else{
        node.next = this.head
        this.head = node
      }
      this.size++
    }
    
    print(){
      if(this.isEmpty()){
        console.log("List is empty")
      }else{
        let curr = this.head
        let listingValues = ""
        while(curr){
          listingValues = listingValues+`${curr.value} `
          curr = curr.next
        }
        console.log(listingValues)
      }
    }
  }
  
  const list = new linkedList()
  
  console.log("Empty",list.isEmpty())
  console.log("Size",list.getSize())
  list.print()
  
  list.prepend(10)
  list.print()
  
  list.prepend(20)
  list.print()
  
  list.prepend(30)
  list.print()