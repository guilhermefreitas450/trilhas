
abstract class TaskManager {
    protected tasks: string[] = [];
    abstract addTask(task: string): void;
    listTasks(): string[] {
        return this.tasks;
    }
    protected checkTask(task: string): boolean {
        return this.tasks.includes(task);
    }
}

class Project extends TaskManager {
    addTask(task: string): void {
        if (!this.checkTask(task)) {
            this.tasks.push(task);
        } else {
            console.log(`"${task}" já esta adicionada`);
        }
    }
}

class DailyTasks extends TaskManager {
    addTask(task: string): void {
        if (!this.checkTask(task)) {
            this.tasks.push(task);
        } else {
            console.log(`"${task}" já foi adicionada`);
        }
    }
}

const project1 = new Project();
project1.addTask("acorda");
project1.addTask("instalock em duelista");
project1.addTask("assistir BRKsEDU");
console.log("tarefas do projeto:", Project.listTasks());

const daily1 = new DailyTasks();
daily1.addTask("jogar");
daily1.addTask("dormir");
daily1.addTask("jogar");
console.log("tarefas diarias:", DailyTasks.listTasks());