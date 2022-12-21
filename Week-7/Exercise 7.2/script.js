//Implementation of a Linked List
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBegining(data) {
    var node = new Node(data);
    node.next = this.head;
    this.head = node;
    return this.head;
  }

  insertAtEnd(data) {
    var newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }
    var currNode = this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    currNode.next = newNode;
    return this.head;
  }

  getNode(index) {
    if (!this.head) {
      return;
    } else {
      var currNode = this.head;
      for (let i = 0; i <= index; i++) {
        currNode = currNode.next;
      }
      return this.head;
    }
  }

  insertAtLocation(data, index) {
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    if (index === 0) {
      this.insertAtBegining(data);
      return this.head;
    } else {
      var newNode = new Node(data);
      var prevNode = this.getNode(index - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;

      return this.head;
    }
  }
}

//Creating a new Linked List and adding nodes to it
var newList = new LinkedList();

newList.insertAtBegining(8);
newList.insertAtBegining(7);
newList.insertAtBegining(6);
newList.insertAtBegining(5);
newList.insertAtBegining(4);
newList.insertAtBegining(3);
newList.insertAtBegining(2);
newList.insertAtBegining(1);

// console.log(newList);

//Function to rotate a linked list
var rotateList = function (list, index) {
  //loop the list
  let currNode = list.head;
  let length = 0;
  while (currNode.next !== null) {
    currNode = currNode.next;
    length++;
  }
  currNode.next = list.head;
  let count = 0;
  while (count < index) {
    currNode = currNode.next;
    list.head = currNode.next;
    count++;
  }
  currNode.next = null;
  return list;
};

var afterRotate = rotateList(newList, 4);
console.log(afterRotate);

//Time Complexity - O(n), where n is the length of linked list
//Space Complexity - O(1)