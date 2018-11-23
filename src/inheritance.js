class Task {
    constructor(title){
        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log('Create task');
    }

    complete(){
        this.done = true;
        console.log(`Задача ${this.title} выполнена`)
    }

    get title() {
        return this._title
    }
    set title(value) {
        this._title = value;
    }
    static getDeafaultTitle() {
        return 'Задача'
    }
}

Task.count = 0;

class SubTask extends Task {
    constructor(title, parent){
        super(title);
        this.parent = parent;
        console.log('Create subtask');
    }
    complete(){
        super.complete();
        console.log(`Подзадача ${this.title} выполнена`)
    }

}

let task = new Task('Learn JS');
let subtask = new SubTask('Learn ES6', task);

console.log(SubTask.getDeafaultTitle());
console.log(SubTask.count);

task.complete();
subtask.complete();
console.log(task);
console.log(subtask);

