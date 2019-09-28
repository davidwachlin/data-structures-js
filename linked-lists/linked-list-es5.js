// DOUBLY LINKED LIST

//constructor functions
function LinkedList() {
    this.head = null;
    this.tail = null;
};

function LinkedListNode(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
};
// Add To Head

LinkedList.prototype.addToHead = function(value) {
    let newNode = new LinkedListNode(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
}

// Add To Tail
LinkedList.prototype.addToTail = function(value) {
    let newNode = newLinkedListNode(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode
}
// Remove Head
LinkedList.prototype.removeHead - function (value) {
    if (!this.head) return null;
    let val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
}


// Remove Tail

// Search

