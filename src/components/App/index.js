import LocalStorage from 'components/LocalStorage';
import Task from 'components/Task';

export default class App extends LocalStorage {
    constructor({ name, appContainer, adToDoForm }) {
        super(name);

        this.appContainer = appContainer;

        adToDoForm.addEventListener('submit', this.onAddTask);
    }

    validateFormValue = (form, name) => form?.get(name)?.length > 2;

    onAddTask = (event) => {
        event.preventDefault();

        const { target } = event;
        const form = new FormData(target);
        const text = form.get('add');

        if (!text) return null;

        const appList = this.appContainer.querySelector('.to-do__list');

        const toDo = {
            text,
            isDone: 0,
            date: Date.now(),
        };

        if (this.validateFormValue(form, 'add')) {
            const newTask = new Task(toDo);

            newTask.save();
            appList.prepend(newTask.element.wrapper);
            target.reset();
        }
    };

    render = () => {
        const state = this.state;
        const list = document.createElement('ul');
        list.className = 'to-do__list';
        const appList = this.appContainer.querySelector('.to-do__list');

        state.forEach((item) => {
            const itemTodo = new Task(item);

            list.appendChild(itemTodo.element.wrapper);
        });

        if (appList) appList.parentNode.replaceChild(list, appList);
    };
}