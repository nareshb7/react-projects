export type TodoStatus ="Completed" | "In Progress" | "Pending"

export interface TodoModel {
    content: string;
    status: TodoStatus
}

export interface TodoTableProps {
    todos: TodoModel[];
    handleEdit: (id: number) => void;
    handleDelete: (data: TodoModel) => void
}
export interface TodoEditProps {
    handleAdd: (data: TodoModel, isUpdate?: boolean) => void;
    isEdit: boolean;
    editContent?: TodoModel
}