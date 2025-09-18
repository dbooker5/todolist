import React from 'react';
import {Checkbox} from './Checkbox';
import { useTasks } from '../../hooks';


export const Tasks = () => {
    const { tasks } = useTasks('INBOX');

    console.log(tasks);

    let projectName = 'Inbox';

    return (
        <div className="tasks" data-testid="tasks">
            <ul className="tasks__list">
                {tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}