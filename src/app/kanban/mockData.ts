export interface task {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
}
export const mockTasks: task[] = [
  {
    id: 1,
    title: '学习 TypeScript',
    description: '理解接口和类型的基础概念',
    status: 'todo',
  },
  {
    id: 2,
    title: '设计看板界面',
    description: '使用 Ant Design 完成布局',
    status: 'in-progress',
  },
  {
    id: 3,
    title: '修复灰色背景 Bug',
    description: '搞定 globals.css 的渐变问题',
    status: 'done',
  },
];