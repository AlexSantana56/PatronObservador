class Subject {
    constructor() {
        this.observers = [];
    }

    registerObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(cambios) {  
        for (const observer of this.observers) {
            observer.update(cambios);
        }
    }
}

export default Subject;