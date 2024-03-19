interface Item {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

interface TableColumn {
  key: string;
  display: string;
  convert?: (value: any) => string;
}
