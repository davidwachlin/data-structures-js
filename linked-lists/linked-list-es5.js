//Linked Lists

//function constructors
function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

// Add To Head
LinkedList.prototype.addToHead = function(value) {
    var newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
}

// Add To Tail
LinkedList.prototype.addToTail = function(value) {
    var newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode
    this.tail = newNode;
}

// Remove Head
LinkedList.prototype.removeHead = function() {
    if (!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
}

// Remove Tail
LinkedList.prototype.removeTail = function() {
    if (!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.prev;
}

// Search
LinkedList.prototype.search = function(searchValue) {
    var currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === searchValue) return currentNode.value;
        curentNode = currentNode.next
    }
    return null;
}
// indexOf

LinkedList.prototype.indexOf = function(value) {
    var indexes = [];
    var currentIndex = 0;
    var currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === value) {
            indexes.push(currentIndext)
        }
        currentNode = currentNode.next;
        currentIndex++;
    }
    return indexes;
}