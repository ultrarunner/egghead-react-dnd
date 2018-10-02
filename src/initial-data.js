const initialData = {
    tasks: {
        'task-1': { id: 'task-1', code: 'Mc', content: 'Mind Care.' },
        'task-2': { id: 'task-2', code: 'Bc', content: 'Body Care.' },
        'task-3': { id: 'task-3', code: 'Ak', content: 'Random Act of Kindness.' },
        'task-4': { id: 'task-4', code: 'Nt', content: 'New Things.' },
        'task-5': { id: 'task-5', code: 'Gt', content: 'Grateful Things.' }
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'My Little Buddha',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5']
        },
        'column-2': {
            id: 'column-2',
            title: 'I am doing it!',
            taskIds: []
        },
        'column-3': {
            id: 'column-3',
            title: 'Done.',
            taskIds: []
        }                
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
};

export default initialData;