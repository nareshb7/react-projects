export type TodoStatus ="completed" | "inProgress" | "pending"

export interface TodoModel {
    content: string;
    status: TodoStatus;
    id: string;
}


export interface TodoTableProps {
    todos: TodoModel[];
    handleEdit: (todo: TodoModel) => void;
    handleDelete: (data: TodoModel) => void
}
export interface TodoEditProps {
    handleAdd: (data: TodoModel, isUpdate?: boolean) => void;
    isEdit: boolean;
    editContent?: TodoModel
}

export type NewTodoModel = {
    [key in TodoStatus]: TodoModel[];
};

export interface DragContent {
    content: string;
    status: TodoStatus;
}