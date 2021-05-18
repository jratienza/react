class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
        return;
    }

    pop() {
        if (this.stack.length === 0) return console.log("Stack is empty");
        this.stack.pop();
        return;
    }

    check() {
        if (this.stack.length === 0) return console.log("Stack is empty");

        console.log(this.stack);
        return;
    }
}

const stack1 = new Stack();
stack1.check();
stack1.push("hello");
stack1.push("hi");
stack1.push("amf");
stack1.check();
stack1.pop();
stack1.check();
stack1.pop();
stack1.check();
stack1.pop();
stack1.check();
