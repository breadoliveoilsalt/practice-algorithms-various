

function ListNode(val) {
  this.val = val;
  this.next = null;
}


var addTwoNumbers = function(l1, l2) {
    let num1 = getNumberFromLL(l1)
    let num2 = getNumberFromLL(l2)

    let newSum = num1 + num2

    return makeLLIntoNum(newSum)

};

function getNumberFromLL(ll) {

    let num = 0
    let placeValue = 1

    let currentNode = ll

    while (currentNode) {
        num += currentNode.val * placeValue
        placeValue *= 10
        currentNode = currentNode.next
    }

    return num

}

function makeLLIntoNum(num) {

    let placeValue = 1

        // this gets first number
    let nextNum = Math.floor(num / placeValue) % 10

    let baseNode = new ListNode(nextNum)

    let currentNode = baseNode

    placeValue *= 10

    while (num / placeValue >= 1) {
        nextNum = Math.floor(num / placeValue) % 10
        currentNode.next = new ListNode(nextNum)
        placeValue *= 10
        currentNode = currentNode.next
        console.log(placeValue)
    }

    return baseNode

}
