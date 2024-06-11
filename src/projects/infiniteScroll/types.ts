export interface DataModal {
  id: number;
  name: string;
}

export interface TableProps {
  data: DataModal[];
  isLoading: boolean;
  hasData: boolean;
  loadMore: (id: number) => void;
}
